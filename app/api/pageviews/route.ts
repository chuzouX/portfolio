import { NextRequest, NextResponse } from 'next/server';

interface UmamiShareData {
  websiteId: string;
  token: string;
}

interface ShareCache {
  data: UmamiShareData;
  timestamp: number;
}

const SHARE_TOKEN = 'evQ07K61RINSSxXs';
const UMAMI_URL = 'https://umami.chuzoux.top';

// 缓存 share 数据
let shareDataCache: ShareCache | null = null;
const CACHE_TTL = 3600_000; // 1 小时

async function getShareData() {
  // 检查缓存
  if (shareDataCache && Date.now() - shareDataCache.timestamp < CACHE_TTL) {
    return shareDataCache.data;
  }

  // 获取新数据
  const response = await fetch(`${UMAMI_URL}/api/share/${SHARE_TOKEN}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch share data: ${response.status}`);
  }

  const data = await response.json();
  shareDataCache = { data, timestamp: Date.now() };
  return data;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    // 获取 share 数据
    const shareData = await getShareData();
    const { websiteId, token } = shareData;

    // 获取统计数据
    const endAt = Date.now();
    const statsResponse = await fetch(
      `${UMAMI_URL}/api/websites/${websiteId}/stats?startAt=0&endAt=${endAt}&url=${encodeURIComponent(url)}&timezone=Asia/Shanghai`,
      {
        headers: {
          'x-umami-share-token': token,
        },
        next: { revalidate: 300 }, // 缓存 5 分钟
      }
    );

    if (!statsResponse.ok) {
      return NextResponse.json(
        { error: `Stats API returned ${statsResponse.status}` },
        { status: statsResponse.status }
      );
    }

    const data = await statsResponse.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Pageviews API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
