import React from "react";
import PropTypes from "prop-types";
import { RefugeeCrisisPageTemplate } from "../../templates/refugee-crisis-page";
import { HTMLContent } from "../../components/Content";

const RefugeeCrisisPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]);
  const { title, slideshowImages } = data.toJS ? data.toJS() : data;
  const body = widgetFor("body");

  return (
    <RefugeeCrisisPageTemplate
      title={title}
      content={body}
      slideshowImages={slideshowImages}
      contentComponent={HTMLContent}
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
