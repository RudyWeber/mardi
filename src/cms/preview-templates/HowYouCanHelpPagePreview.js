import React from "react";
import PropTypes from "prop-types";
import { HowYouCanHelpPageTemplate } from "../../templates/how-you-can-help-page";

const VolunteerPagePreview = ({ entry, widgetFor }) => (
  <HowYouCanHelpPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

VolunteerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default VolunteerPagePreview;
