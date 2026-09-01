import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { site } from "@/content/site";
import { dictionary } from "@/content/dictionary";

// Node runtime so we can read the portrait off disk (edge can't touch fs).
export const runtime = "nodejs";

export const alt = `${site.name} — ${dictionary.en.hero.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const portrait = readFileSync(join(process.cwd(), "public/me.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#08080b",
          color: "#ededf2",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* ambient cyan glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 400px at 20% -10%, rgba(34,211,238,0.22), transparent 70%)",
          }}
        />

        {/* left: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 24,
              color: "#9a9aa7",
              marginBottom: 28,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: "#22d3ee" }} />
            marceloaugustofries.vercel.app
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 44, fontWeight: 600, color: "#22d3ee", marginTop: 8 }}>
            {dictionary.en.hero.role}
          </div>
          <div style={{ fontSize: 26, color: "#9a9aa7", marginTop: 28, maxWidth: 560, lineHeight: 1.4 }}>
            Production-ready apps across web, mobile, desktop &amp; automation.
          </div>
        </div>

        {/* right: portrait (satori paints in DOM order — fade goes after the img) */}
        <div style={{ display: "flex", width: 430, height: "100%", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            width={430}
            height={630}
            style={{ width: 430, height: 630, objectFit: "cover", objectPosition: "center 30%" }}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 120,
              background: "linear-gradient(90deg, #08080b, transparent)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
