// Umami Share API 工具函数
// 参考: https://github.com/chuzouX/fuwari/blob/main/public/js/umami-share.js

const CACHE_KEY = 'umami-share-cache';
const CACHE_TTL = 3600_000; // 1 小时

let shareDataPromise = null;

/**
 * 获取 Umami Share 数据（带缓存）
 */
async function getUmamiShareData() {
  // 检查缓存
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      return data;
    }
  }

  // 防止并发请求
  if (shareDataPromise) {
    return shareDataPromise;
  }

  // 获取新数据
  shareDataPromise = (async () => {
    try {
      const response = await fetch('https://umami.chuzoux.top/api/share/evQ07K61RINSSxXs');
      if (!response.ok) {
        throw new Error(`Failed to fetch share data: ${response.status}`);
      }
      const data = await response.json();

      // 缓存数据
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now(),
      }));

      return data;
    } finally {
      shareDataPromise = null;
    }
  })();

  return shareDataPromise;
}

/**
 * 清除缓存
 */
function clearUmamiShareCache() {
  localStorage.removeItem(CACHE_KEY);
}

/**
 * 获取页面访问统计（带自动重试）
 */
async function fetchUmamiStats(url, retry = true) {
  try {
    const shareData = await getUmamiShareData();
    const { websiteId, token } = shareData;

    const endAt = Date.now();
    const response = await fetch(
      `https://umami.chuzoux.top/api/websites/${websiteId}/stats?startAt=0&endAt=${endAt}&url=${encodeURIComponent(url)}&timezone=Asia/Shanghai`,
      {
        headers: {
          'x-umami-share-token': token,
        },
      }
    );

    if (response.status === 401 && retry) {
      // Token 过期，清除缓存并重试
      clearUmamiShareCache();
      return fetchUmamiStats(url, false);
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch stats: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching Umami stats:', error);
    return null;
  }
}

// 导出到全局
window.getUmamiShareData = getUmamiShareData;
window.clearUmamiShareCache = clearUmamiShareCache;
window.fetchUmamiStats = fetchUmamiStats;
