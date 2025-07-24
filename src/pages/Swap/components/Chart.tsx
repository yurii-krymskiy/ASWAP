import { useEffect, useRef, memo } from "react";

function Chart() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => {
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
    },
    []
  );

  return (
    <div className="flex basis-[65%] grow-1 rounded-[12px] h-[500px]">
      <div
        className="tradingview-widget-container size-full border border-[#181818] rounded-[12px] overflow-hidden"
        ref={container}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{
            height: "calc(100% - 32px)",
            width: "100%",
          }}
        />
      </div>
    </div>
  );

}

export default memo(Chart);
