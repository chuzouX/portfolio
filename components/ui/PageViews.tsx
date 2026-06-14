"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface PageViewsProps {
  url: string;
  className?: string;
}

export function PageViews({ url, className = "" }: PageViewsProps) {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // 使用服务器端 API 路由（避免 CORS）
        const response = await fetch(
          `/api/pageviews?url=${encodeURIComponent(url)}`
        );

        if (response.ok) {
          const data = await response.json();
          const pageviews = data?.pageviews?.value || 0;
          if (pageviews > 0) {
            setViews(pageviews);
          } else {
            setViews(null);
          }
        } else {
          setViews(null);
        }
      } catch (error) {
        // 静默处理错误
        setViews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [url]);

  // 如果正在加载、没有数据或访问量为0，不显示
  if (loading || views === null || views === 0) {
    return null;
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 ${className}`}>
      <Eye className="w-3 h-3 text-emerald-400 flex-shrink-0" />
      <span className="text-emerald-400 text-xs font-mono tracking-wider whitespace-nowrap">
        {views.toLocaleString()}
      </span>
    </div>
  );
}
