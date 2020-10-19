import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 718, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
              onHoverImage {
                url
                sizes(maxWidth: 718, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}

    render={data => (
      <Layout site={data.site}>
        <div className="Catalogue">
          {
            data.products.edges.map(({ node: product }) => (
              <div className="Catalogue__item" key={product.id}>
                <div
                  className="Product snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                  data-item-url={`/`}
                >
                  <div className="Product__image">
                    <div className="Product__image_normal">
                      <Img sizes={product.image.sizes} />
                    </div>
                    <div className="Product__image_alt">
                      <Img sizes={product.onHoverImage.sizes} />
                    </div>
                  </div>

                  <div className="Product__details">
                    <div className="Product__name">
                      {product.name}
                      <div className="Product__price">
                        £{product.price}
                      </div>
                    </div>
                    <span className="Product__buy">Add</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Layout>
    )}
  />
)
