import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import { GalleryView } from "@/components/GalleryView";
import { GALLERY_IMAGE_PATHS } from "@/lib/gallery-images";

export const metadata = createPageMetadata({
  description:
    "Photo gallery of landscaping, irrigation, and outdoor projects by Big Dawg Irrigation across the Dallas–Fort Worth area.",
});

export default function GalleryPage() {
  const featured = GALLERY_IMAGE_PATHS.slice(0, 10);
  const irrigation = GALLERY_IMAGE_PATHS.slice(10, 18);
  const landscaping = GALLERY_IMAGE_PATHS.slice(18, 26);
  const lightingSeasonal = GALLERY_IMAGE_PATHS.slice(26);

  return (
    <>
      <section
        className="page-section page-section--lg page-section--surface gallery-page"
        aria-labelledby="gallery-heading"
      >
        <div className="container container--wide">
          <Reveal>
            <h1 id="gallery-heading" className="gallery-page__heading">
              Gallery
            </h1>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="gallery-section" aria-labelledby="featured-heading">
              <header className="gallery-section__head">
                <div>
                  <h2 id="featured-heading" className="gallery-section__title">
                    Featured
                  </h2>
                </div>
              </header>
              <GalleryView
                layout="rail"
                images={featured}
                thumbAspect="landscape"
                thumbSizes="(max-width: 640px) 78vw, (max-width: 1100px) 44vw, 520px"
                label="Featured project photos carousel."
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="gallery-section gallery-section--split" aria-labelledby="irrigation-heading">
              <header className="gallery-section__head">
                <div>
                  <h2 id="irrigation-heading" className="gallery-section__title">
                    Irrigation
                  </h2>
                </div>
              </header>
              <GalleryView
                layout="rail"
                images={irrigation}
                thumbAspect="square"
                thumbSizes="(max-width: 640px) 46vw, (max-width: 1100px) 28vw, 240px"
                label="Irrigation photos carousel."
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="gallery-section" aria-labelledby="landscaping-heading">
              <header className="gallery-section__head">
                <div>
                  <h2 id="landscaping-heading" className="gallery-section__title">
                    Landscaping
                  </h2>
                </div>
              </header>
              <GalleryView
                layout="rail"
                images={landscaping}
                thumbAspect="landscape"
                thumbSizes="(max-width: 640px) 78vw, (max-width: 1100px) 44vw, 520px"
                label="Landscaping and stone photos carousel."
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="gallery-section" aria-labelledby="lighting-heading">
              <header className="gallery-section__head">
                <div>
                  <h2 id="lighting-heading" className="gallery-section__title">
                    Lighting
                  </h2>
                </div>
              </header>
              <GalleryView
                layout="rail"
                images={lightingSeasonal}
                thumbAspect="square"
                thumbSizes="(max-width: 640px) 46vw, (max-width: 1100px) 28vw, 240px"
                label="Lighting and seasonal photos carousel."
              />
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="gallery-section gallery-section--full" aria-labelledby="all-photos-heading">
              <header className="gallery-section__head">
                <div>
                  <h2 id="all-photos-heading" className="gallery-section__title">
                    All
                  </h2>
                </div>
              </header>
              <GalleryView label="All project photo thumbnails." />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
