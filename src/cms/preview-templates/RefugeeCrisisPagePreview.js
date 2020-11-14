import React from "react";
import PropTypes from "prop-types";
import { RefugeeCrisisPageTemplate } from "../../templates/refugee-crisis-page";
import { HTMLContent } from "../../components/Content";

const RefugeeCrisisPagePreview = (props) => {
  console.log(Object.entries(props).map(([k, v]) => [k, v.toJS ? v.toJS() : v]));
  const data = props.entry.getIn(["data"]);
  const { title, body, slideshowImages } = data.toJS ? data.toJS() : data;

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
