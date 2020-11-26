import React from "react";
import PropTypes from "prop-types";
import { CustomRefugeeCrisisPageTemplate } from "./customPreviews/CustomRefugeeCrisisTemplate";

const RefugeeCrisisPagePreview = ({ entry, widgetFor }) => (
  <CustomRefugeeCrisisPageTemplate
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
