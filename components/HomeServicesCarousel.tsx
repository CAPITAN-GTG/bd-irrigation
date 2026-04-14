"use client";

import Image from "next/image";
import {
  Leaf,
  Droplets,
  TreePine,
  Building2,
  Lamp,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const SERVICES: {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Landscaping",
    description: "Design and installs tuned to your soil, sun, and how you use the yard.",
    image: "/pic-3.webp",
    Icon: Leaf,
  },
  {
    title: "Irrigation",
    description: "Efficient systems, smart upgrades, and repairs that cut water waste.",
    image: "/pic-8.webp",
    Icon: Droplets,
  },
  {
    title: "Maintenance",
    description: "Year-round care so beds stay sharp and turf stays healthy.",
    image: "/pic-10.webp",
    Icon: TreePine,
  },
  {
    title: "Commercial",
    description: "Steady crews for retail, HOA, and office grounds—no chasing callbacks.",
    image: "/pic-12.webp",
    Icon: Building2,
  },
  {
    title: "Outdoor lighting",
    description: "Path, accent, and safety lighting with clean, lasting workmanship.",
    image: "/pic-15.webp",
    Icon: Lamp,
  },
  {
    title: "Holiday lighting",
    description: "Rooflines, trees, and displays—we handle install and takedown.",
    image: "/pic-4.webp",
    Icon: Sparkles,
  },
];

function ServiceCard({
  title,
  description,
  image,
  Icon,
}: {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
}) {
  return (
    <article
      className="svc-carousel__card"
      tabIndex={0}
      aria-label={`${title}. ${description}`}
    >
      <Image
        src={image}
        alt=""
        fill
        className="svc-carousel__img object-cover"
        sizes="300px"
        loading="lazy"
      />
      <div className="svc-carousel__tint" aria-hidden />
      <div className="svc-carousel__hover" aria-hidden>
        <div className="svc-carousel__tint svc-carousel__tint--deep" />
      </div>
      <div className="svc-carousel__content">
        <div className="svc-carousel__icon-cap">
          <Icon size={22} className="svc-carousel__icon" strokeWidth={2} aria-hidden />
        </div>
        <h3 className="svc-carousel__title">{title}</h3>
        <p className="svc-carousel__desc">{description}</p>
      </div>
    </article>
  );
}

export function HomeServicesCarousel() {
  const track = [...SERVICES, ...SERVICES];

  return (
    <div className="svc-carousel">
      <div className="svc-carousel__viewport">
        <div className="svc-carousel__track">
          {track.map((item, i) => (
            <ServiceCard
              key={`${item.title}-${i}`}
              title={item.title}
              description={item.description}
              image={item.image}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
