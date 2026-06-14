import { NextResponse } from 'next/server';

const SHARE_TOKEN = 'evQ07K61RINSSxXs';
const UMAMI_URL = 'https://umami.chuzoux.top';

// 缓存网站统计数据
let statsCache: { data: any; timestamp: number } | null = null;
const CACHE_TTL = 300_000; // 5 分钟

// 缓存 share 数据
let shareDataCache: { data: any; timestamp: number } | null = null;
const SHARE_CACHE_TTL = 3600_000; // 1 小时

async function getShareData() {
  if (shareDataCache && Date.now() - shareDataCache.timestamp < SHARE_CACHE_TTL) {
    return shareDataCache.data;
  }

  try {
    const response = await fetch(`${UMAMI_URL}/api/share/${SHARE_TOKEN}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      // 添加超时和重试配置
      signal: AbortSignal.timeout(10000), // 10秒超时
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch share data: ${response.status}`);
    }

    const data = await response.json();
    shareDataCache = { data, timestamp: Date.now() };
    return data;
  } catch (error) {
    console.error('Error fetching share data:', error);
    throw error;
  }
}

export async function GET() {
  try {
    // 检查缓存
    if (statsCache && Date.now() - statsCache.timestamp < CACHE_TTL) {
      console.log('Returning cached stats');
      return NextResponse.json(statsCache.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      });
    }

    console.log('Fetching fresh stats from Umami...');

    // 获取 share 数据
    const shareData = await getShareData();
    const { websiteId, token } = shareData;

    console.log('WebsiteId:', websiteId);

    // 获取网站总访问量统计
    const endAt = Date.now();
    // 使用一个合理的起始时间（比如一年前），而不是 0
    const startAt = endAt - (365 * 24 * 60 * 60 * 1000); // 一年前

    const statsUrl = `${UMAMI_URL}/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}&timezone=Asia/Shanghai`;
    console.log('Stats URL:', statsUrl);

    const statsResponse = await fetch(statsUrl, {
      method: 'GET',
      headers: {
        'x-umami-share-token': token,
        'User-Agent': 'Mozilla/5.0',
      },
      signal: AbortSignal.timeout(10000), // 10秒超时
    });

    if (!statsResponse.ok) {
      const errorText = await statsResponse.text();
      console.error('Stats API error:', statsResponse.status, errorText);
      throw new Error(`Stats API returned ${statsResponse.status}: ${errorText}`);
    }

    const data = await statsResponse.json();
    console.log('Stats data received:', data);

    // 提取访问量和访客数 - 修复：直接使用数值，不是 .value
    const result = {
      pageviews: data?.pageviews || 0,
      visitors: data?.visitors || 0,
    };

    console.log('Parsed result:', result);

    // 更新缓存
    statsCache = { data: result, timestamp: Date.now() };

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Website stats API error:', error);

    // 如果有缓存，即使过期也返回
    if (statsCache) {
      console.log('Returning stale cache due to error');
      return NextResponse.json(statsCache.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      });
    }

    return NextResponse.json(
      {
        error: 'Failed to fetch website statistics',
        pageviews: 0,
        visitors: 0,
      },
      { status: 200 } // 返回 200 但数据为 0，避免前端报错
    );
  }
}
