export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  span?: "row" | "col" | "both";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-04.png",
    alt: "Rolled white spa towels with frangipani flowers, warm candlelight, and natural oils at MY3 Wellness Spa",
    width: 800,
    height: 800,
    span: "both",
  },
  {
    src: "/images/gallery/gallery-01.png",
    alt: "Close-up of a therapist performing foot reflexology by candlelight at MY3 Wellness Spa Gachibowli",
    width: 800,
    height: 900,
  },
  {
    src: "/images/gallery/gallery-06.png",
    alt: "Therapist performing a deep shoulder massage in a private treatment suite",
    width: 800,
    height: 800,
  },
  {
    src: "/images/gallery/gallery-02.png",
    alt: "Traditional herbal compress balls, essential oils, and frangipani flowers used in Balinese and Thai therapies",
    width: 800,
    height: 800,
    span: "col",
  },
  {
    src: "/images/gallery/gallery-09.jpg",
    alt: "Therapist performing a calming facial massage with essential oils and candlelight",
    width: 800,
    height: 800,
  },
  {
    src: "/images/gallery/gallery-03.png",
    alt: "Aromatic massage oils and natural elements arranged in a treatment room at MY3 Wellness Spa",
    width: 800,
    height: 900,
  },
  {
    src: "/images/gallery/gallery-05.png",
    alt: "Tranquil spa treatment room setting with warm ambient lighting",
    width: 800,
    height: 800,
  },
  {
    src: "/images/gallery/gallery-07.png",
    alt: "Natural stone and wellness elements used in MY3 Wellness Spa treatments",
    width: 800,
    height: 800,
  },
  {
    src: "/images/gallery/gallery-08.png",
    alt: "Relaxation ambience at MY3 Wellness Spa Gachibowli with candles and natural textures",
    width: 800,
    height: 800,
    span: "col",
  },
];
