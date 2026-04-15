/** Project photos in /public (webp). Keep in sync with files on disk. */
export const GALLERY_COUNT = 42;

export const GALLERY_IMAGE_PATHS: readonly string[] = Array.from(
  { length: GALLERY_COUNT },
  (_, i) => `/pic-${i + 1}.webp`,
);

export const GALLERY_ALT =
  "Landscaping and irrigation project by Big Dawg Irrigation in the Dallas–Fort Worth area";
