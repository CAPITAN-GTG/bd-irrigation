import type { Metadata } from "next";

const SITE_URL = "https://bdilandscape.com";
const SITE_NAME = "BDI Landscape | Irrigation";
const DEFAULT_DESCRIPTION =
  "Licensed irrigation and custom landscaping in the Dallas-Fort Worth area. Residential and commercial. Free estimates. 10+ years experience.";

export interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSEOProps): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonical = path ? `${SITE_URL}/${path.replace(/^\//, "")}` : SITE_URL;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
