import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function toDataUri(relativePath: string) {
  const buffer = await readFile(join(process.cwd(), "public", relativePath));
  const ext = relativePath.split(".").pop();
  return `data:image/${ext};base64,${buffer.toString("base64")}`;
}

export default async function OpengraphImage() {
  const [bgImage, logoImage] = await Promise.all([
    toDataUri("images/gallery/hero-2-og.png"),
    toDataUri("images/brand/my3-logo-og.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#20261a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt=""
          width={size.width}
          height={size.height}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(0deg, rgba(10,11,7,0.97) 0%, rgba(10,11,7,0.93) 22%, rgba(10,11,7,0.6) 46%, rgba(10,11,7,0.25) 68%, rgba(10,11,7,0.5) 100%)",
          }}
        />
        {/* Thin gold frame for a finished, premium edge. */}
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1.5px solid rgba(199,169,107,0.55)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(249,246,242,0.96)",
              borderRadius: 999,
              padding: "14px 24px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoImage} alt="" width={210} height={84} style={{ objectFit: "contain" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 20,
              }}
            >
              <div style={{ width: 40, height: 1.5, background: "#c7a96b", display: "flex" }} />
              <div
                style={{
                  fontSize: 22,
                  letterSpacing: 6,
                  color: "#c7a96b",
                  textTransform: "uppercase",
                  display: "flex",
                }}
              >
                Gachibowli, Hyderabad
              </div>
            </div>

            <div
              style={{
                fontSize: 72,
                lineHeight: 1.08,
                color: "#f9f6f2",
                fontWeight: 600,
                display: "flex",
                maxWidth: 900,
              }}
            >
              Mind. Body. Balance.
            </div>

            <div
              style={{
                fontSize: 26,
                color: "#e4e2d8",
                marginTop: 20,
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              Swedish &middot; Thai &middot; Balinese &middot; Deep Tissue Massage
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 34,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 26px",
                  borderRadius: 999,
                  background: "#c7a96b",
                  color: "#20261a",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                Flat {siteConfig.promo.percent}% Off First Visit
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "#d9dbc3",
                  letterSpacing: 1,
                }}
              >
                my3wellnessspa.in
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
