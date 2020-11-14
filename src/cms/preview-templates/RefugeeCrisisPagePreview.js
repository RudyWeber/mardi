import React from "react";
import PropTypes from "prop-types";
import { RefugeeCrisisPageTemplate } from "../../templates/refugee-crisis-page";

const RefugeeCrisisPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]);
  const { title, body, slideshowImages } = data.toJS ? data.toJS() : data;

  return (
    <RefugeeCrisisPageTemplate
      title={title}
      content={body}
      slideshowImages={slideshowImages}
    />
  );
};

RefugeeCrisisPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RefugeeCrisisPagePreview;
