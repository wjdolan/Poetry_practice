"use client";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Chart() {
  return (
    <Plot
      data={[
        {
          x: ["Jan", "Feb", "Mar", "Apr"],
          y: [78, 82, 88, 91],
          type: "scatter",
          mode: "lines+markers",
          line: { color: "#316bff" },
        },
      ]}
      layout={{
        title: "Example Commodity Price Trend",
        autosize: true,
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        margin: { l: 40, r: 20, b: 40, t: 40 },
      }}
      style={{ width: "100%", height: "100%" }}
      config={{ displayModeBar: false }}
    />
  );
}
