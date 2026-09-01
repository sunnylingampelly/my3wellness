import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#20261a",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(199,169,107,0.25), transparent 45%), radial-gradient(circle at 80% 85%, rgba(124,133,88,0.35), transparent 50%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #c7a96b",
            marginBottom: 36,
          }}
        >
          <div style={{ fontSize: 44 }}>&#10052;</div>
        </div>
        <div
          style={{
            fontSize: 30,
            letterSpacing: 10,
            color: "#c7a96b",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          MY3 Wellness Spa
        </div>
        <div
          style={{
            fontSize: 66,
            color: "#f9f6f2",
            fontWeight: 600,
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          Mind. Body. Balance.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#d9dbc3",
            marginTop: 22,
            letterSpacing: 2,
          }}
        >
          Luxury Spa &middot; Gachibowli, Hyderabad
        </div>
      </div>
    ),
    { ...size }
  );
}
