import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GNC Financial – Your Local Accountant in Baulkham Hills";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#5271ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            background: "#e89018",
            marginBottom: "40px",
          }}
        />
        <div
          style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          GNC Financial
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "48px",
          }}
        >
          Your Local Accountant in Baulkham Hills
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#f0a500",
            fontWeight: "600",
          }}
        >
          30+ Years of Hills District Expertise
        </div>
      </div>
    ),
    size,
  );
}
