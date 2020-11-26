import React from 'react'
import PropTypes from 'prop-types'
import { CustomBlogPostTemplate } from './customPreviews/CustomBlogPostTemplate'

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <CustomBlogPostTemplate
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
