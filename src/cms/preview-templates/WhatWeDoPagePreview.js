import React from "react";
import PropTypes from "prop-types";
import { WhatWeDoPageTemplate } from "../../templates/what-we-do-page";

const WhatWeDoPagePreview = ({ entry, widgetFor }) => (
  <WhatWeDoPageTemplate
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
