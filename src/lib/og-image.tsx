import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type BuildOgImageOptions = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: "primary" | "secondary" | "accent";
};

const accentColorMap = {
  primary: "#ff7a00",
  secondary: "#00d1ff",
  accent: "#b6ff3b",
} as const;

export function buildOgImage({
  eyebrow,
  title,
  subtitle,
  accent = "primary",
}: BuildOgImageOptions) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fff5e6",
        color: "#0a0a0a",
        padding: "56px",
        border: "10px solid #000000",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0",
          backgroundImage:
            "linear-gradient(45deg, rgba(255,122,0,0.2) 0%, transparent 35%), radial-gradient(circle at 85% 18%, rgba(0,209,255,0.28) 0%, transparent 34%), repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 10px, transparent 10px, transparent 20px)",
          opacity: 0.9,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignSelf: "flex-start",
          alignItems: "center",
          border: "4px solid #000",
          background: accentColorMap[accent],
          color: "#0a0a0a",
          padding: "10px 18px",
          fontSize: 34,
          fontWeight: 900,
          textTransform: "uppercase",
          boxShadow: "8px 8px 0 #000",
          letterSpacing: "0.04em",
        }}
      >
        {eyebrow}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 68,
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            textShadow: "4px 4px 0 #00000030",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            border: "4px solid #000",
            padding: "10px 14px",
            background: "#b6ff3b",
            boxShadow: "6px 6px 0 #000",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          muhammadfiaz.com
        </div>
      </div>
    </div>,
    ogSize,
  );
}

export function buildTwitterImage({
  eyebrow,
  title,
  subtitle,
  accent = "secondary",
}: BuildOgImageOptions) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "56px",
        background: "#fffef8",
        color: "#0a0a0a",
        border: "10px solid #000",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0",
          backgroundImage:
            "radial-gradient(circle at 16% 12%, rgba(255,122,0,0.24) 0%, transparent 30%), radial-gradient(circle at 88% 20%, rgba(0,209,255,0.24) 0%, transparent 36%), linear-gradient(0deg, rgba(0,0,0,0.04), rgba(0,0,0,0.04))",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignSelf: "flex-start",
          background: accentColorMap[accent],
          border: "4px solid #000",
          boxShadow: "8px 8px 0 #000",
          padding: "10px 16px",
          fontSize: 32,
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.03em",
        }}
      >
        {eyebrow}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            fontSize: 70,
            lineHeight: 1,
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "3px solid #000",
            padding: "9px 12px",
            background: "#fff",
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>,
    ogSize,
  );
}
