import React from "react";
import PropTypes from "prop-types";
import { RefugeeCrisisPageTemplate } from "../../templates/refugee-crisis-page";

const RefugeeCrisisPagePreview = ({ entry, widgetFor }) => (
  <RefugeeCrisisPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

RefugeeCrisisPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RefugeeCrisisPagePreview;
