import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { withSlideshows } from "../utils/slideshow";

export const ContactUsPageTemplate = ({ title, content, contentComponent }) => {
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

ContactUsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactUsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactUsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ContactUsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactUsPage;

export const contactUsPageQuery = graphql`
  query ContactUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
