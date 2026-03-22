import type { Metadata } from "next";

export const SITE_NAME = "Big Dawg Irrigation";

const DEFAULT_DESCRIPTION =
  "Licensed irrigation and custom landscaping in the Dallas-Fort Worth area. Residential and commercial. Free estimates. 10+ years experience.";

export function createPageMetadata({
  description,
  noIndex = false,
}: {
  description: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title: SITE_NAME,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title: SITE_NAME,
      description,
    },
  };
}

export { DEFAULT_DESCRIPTION };
