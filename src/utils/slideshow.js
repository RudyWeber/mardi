import React from "react";
import { Carousel } from "react-responsive-carousel";

const intersperseBy = (xs, f) => xs.flatMap((x, i) => [x, f(i)]);

export const withSlideshows = (content, PageContent) => {
  const slideshows = [...content.matchAll(/\[\[slideshow \((\S+)\)\]\]/g)].map(
    ([, imagesPathsString], index) => (
      <Carousel
        key={`slideshow-${index}`}
        dynamicHeight={true}
        infiniteLoop={true}
      >
        {imagesPathsString.split(",").map((imagePath, index) => (
          <img
            key={`${imagePath}-${index}`}
            src={imagePath}
            alt={`slide-${index + 1}`}
          />
        ))}
      </Carousel>
    )
  );

  const regularContent = content
    .split(/\[\[slideshow \(\S+\)\]\]/)
    .map((content, index) => (
      <PageContent
        key={`content-${index}`}
        className="content"
        content={content}
      />
    ));

  return intersperseBy(regularContent, (index) => slideshows[index]);
};
