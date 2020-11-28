import React from 'react'
import PropTypes from 'prop-types'
import { BasicPreviewTemplate } from './customPreviewTemplates/BasicPreviewTemplate'

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BasicPreviewTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
