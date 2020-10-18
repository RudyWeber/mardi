import React from "react";
import PropTypes from "prop-types";
import { VolunteerPageTemplate } from "../../templates/volunteer-page";

const VolunteerPagePreview = ({ entry, widgetFor }) => (
  <VolunteerPageTemplate
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
