import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { withSlideshows } from "../utils/slideshow";

export const HowYouCanHelpPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  const actualContent = withSlideshows(content, PageContent);

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {actualContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HowYouCanHelpPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HowYouCanHelpPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HowYouCanHelpPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

HowYouCanHelpPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HowYouCanHelpPage;

export const howYouCanHelpPageQuery = graphql`
  query HowYouCanHelpPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;