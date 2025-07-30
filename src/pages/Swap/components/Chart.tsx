import { useEffect, useRef, memo } from "react";

function Chart() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": false,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "OKX:BTCUSD",
          "theme": "dark",
          "timezone": "Etc/UTC",
          "backgroundColor": "rgba(15, 15, 15, 1)",
          "gridColor": "rgba(24, 24, 24, 0.06)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
    if (container.current)
      container.current.appendChild(script);
  }, []);

  return (
    <div className="hidden md:flex w-[65%] h-[450px] relative overflow-hidden rounded-[12px]">
      <div
        className="absolute size-full border border-[#181818] z-10 rounded-[12px]"
        style={{ pointerEvents: "none" }}
      />
      <div
        ref={container}
        className="tradingview-widget-container size-full"
      />
    </div>
  );
}

export default memo(Chart);
