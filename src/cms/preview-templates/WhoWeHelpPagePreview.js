import React from "react";
import PropTypes from "prop-types";
import { WhoWeHelpPageTemplate } from "../../templates/who-we-help-page";

const WhoWeHelpPagePreview = ({ entry, widgetFor }) => (
  <WhoWeHelpPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

WhoWeHelpPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WhoWeHelpPagePreview;
