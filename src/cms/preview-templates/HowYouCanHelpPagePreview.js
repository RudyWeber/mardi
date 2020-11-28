import React from "react";
import PropTypes from "prop-types";
import { BasicPreviewTemplate } from "./customPreviewTemplates/BasicPreviewTemplate";

const VolunteerPagePreview = ({ entry, widgetFor }) => (
  <BasicPreviewTemplate
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
