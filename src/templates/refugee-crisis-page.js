import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const intersperseBy = (xs, f) => xs.flatMap((x, i) => [x, f(i)]);

export const RefugeeCrisisPageTemplate = ({
  title,
  content,
  contentComponent,
  slideshowImages,
}) => {
  const PageContent = contentComponent || Content;
  const slideshows = [slideshowImages]; // TODO: remove when I add multi sliders support

  const slideshowComponents = slideshows.map((slideshowImages, index) => (
    <Carousel key={`carousel-${index}`}>
      {slideshowImages.map((image, index) => {
        const src = !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image;

        return <img key={src} src={src} alt={`slide ${index + 1}`} />;
      })}
    </Carousel>
  ));

  const splitContent = content.split("[slideshow]");

  const contentComponents = splitContent.map((content, index) => (
    <PageContent className="content" content={content} key={`coponent-${index}`} />
  ));

  const components = intersperseBy(
    contentComponents,
    (index) => slideshowComponents[index]
  );

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {components}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RefugeeCrisisPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const RefugeeCrisisPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RefugeeCrisisPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        slideshowImages={post.frontmatter.slideshowImages}
      />
    </Layout>
  );
};

RefugeeCrisisPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RefugeeCrisisPage;

export const refugeeCrisisPageQuery = graphql`
  query RefugeeCrisisPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slideshowImages {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
