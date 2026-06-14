"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function WebsiteStats() {
  const [stats, setStats] = useState<{ pageviews: number; visitors: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/website-stats');

        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          setStats(null);
        }
      } catch (error) {
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading || !stats) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
      <Eye className="w-3.5 h-3.5" />
      <span>
        {stats.pageviews.toLocaleString()} views
      </span>
    </div>
  );
}
