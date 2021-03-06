import React from "react";
import PropTypes from "prop-types";
import { BasicPreviewTemplate } from "./customPreviewTemplates/BasicPreviewTemplate";

const WhatWeDoPagePreview = ({ entry, widgetFor }) => (
  <BasicPreviewTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

WhatWeDoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WhatWeDoPagePreview;
