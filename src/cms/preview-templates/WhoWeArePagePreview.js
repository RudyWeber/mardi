import React from "react";
import PropTypes from "prop-types";
import { WhoWeArePageTemplate } from "../../templates/who-we-are-page";

const WhoWeArePagePreview = ({ entry, widgetFor }) => (
  <WhoWeArePageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

WhoWeArePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WhoWeArePagePreview;
