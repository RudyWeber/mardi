import React from "react";
import PropTypes from "prop-types";
import { RefugeeCrisisPageTemplate } from "../../templates/refugee-crisis-page";

const RefugeeCrisisPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]);
  const dataJs = data.toJS ? data.toJS() : data;
  const content = entry.getIn(["data", "content"]);

  console.log(data);
  console.log(dataJs);
  console.log(content);

  return (
  <RefugeeCrisisPageTemplate
    title={entry.getIn(["data", "title"])}
    content={entry.getIn(["data", "content"])}
    slideshowImages={entry.getIn(["data", "slideshowImages"]).toJS()}
  />
)};

RefugeeCrisisPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RefugeeCrisisPagePreview;
