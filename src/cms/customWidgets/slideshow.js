import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default {
  // Internal id of the component
  id: "slideshow",
  // Visible label
  label: "Slideshow",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "pictures",
      label: "Pictures",
      widget: "list",
      allow_add: true,
      label_singular: "a picture",
      default: [],
      summary: "{{fields.image}}",
      field: {
        label: "Picture",
        name: "picture",
        widget: "image",
        allow_multiple: true,
        media_library: {
          config: {
            multiple: true,
          },
        },
      },
    },
  ],
  pattern: /^\[\[slideshow \((\S+)\)\]\]$/,
  fromBlock: function ([, pictures]) {
    return {
      pictures: pictures.split(","),
    };
  },
  toBlock: function ({ pictures }) {
    return `[[slideshow (${pictures})]]`;
  },
  toPreview: function ({ pictures }) {
    return (
      <Carousel dynamicHeight={true} infiniteLoop={true}>
        {pictures.map((picturePath, index) => (
          <img
            key={`${picturePath}-${index}`}
            src={picturePath}
            alt={`slide ${index + 1}`}
          />
        ))}
      </Carousel>
    );
  },
};
