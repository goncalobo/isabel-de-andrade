import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ProductCard from "./ProductCard";
import Footer from "../../components/sections/Footer";

const Products = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query ProductPrices {
            prices: allStripePrice(
              filter: { active: { eq: true } }
              sort: { fields: [unit_amount] }
            ) {
              edges {
                node {
                  id
                  active
                  currency
                  unit_amount
                  product {
                    id
                    name
                    description
                    images
                    default_price
                  }
                }
              }
            }
          }
        `}
        render={({ prices }) => {
          // Group prices by product
          const products = prices.edges.reduce((products, { node: price }) => {
            return price.id === price.product.default_price
              ? {
                  ...products,
                  [price.product.id]: {
                    ...price.product,
                    price,
                  },
                }
              : products;
          }, []);

          return (
            <div className="products">
              {Object.keys(products).map((key) => (
                <ProductCard key={products[key].id} product={products[key]} />
              ))}
              <Footer />
            </div>
          );
        }}
      />
    </>
  );
};

export default Products;
