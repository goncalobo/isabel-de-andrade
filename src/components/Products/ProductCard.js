import React, { useState } from "react";
import getStripe from "../../utils/stripejs";
import GridGallery from "react-grid-gallery";
import Loader from "../loader";
import { useTranslateContext, useTranslations } from "gatsby-plugin-translate";

import separator from "../../images/separator.png";

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { language } = useTranslateContext();
  const t = useTranslations();

  const handleSubmit = async (event, price) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      shippingAddressCollection: {
        allowedCountries: ["PT"],
      },
      locale: language,
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/shop`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="product-container">
      <div className="product-card">
        <form
          onSubmit={(e) => handleSubmit(e, product.default_price)}
          className="product-form"
        >
          <fieldset style={{ border: "none" }}>
            <legend>
              <h3>{product.name}</h3>
            </legend>
            <GridGallery
              images={[
                { src: product.images[0], thumbnail: product.images[0] },
              ]}
              enableImageSelection={false}
            />
            <label className="product-description">
              <h6>
                {product.description.split(" - ").map((d, index) => (
                  <div key={`description-${index}`}>{d}</div>
                ))}
              </h6>
            </label>
            {/* <label>
              <h2 name="priceSelect">
                -
                {formatPrice(product.price.unit_amount, product.price.currency)}
              </h2>
            </label> */}
          </fieldset>
          {/* <button
            disabled={loading}
            type="submit"
            className={`button${loading ? " loading" : ""}`}
          >
            {loading ? <Loader /> : t`COMPRAR`}
          </button> */}
          <button disabled={true} type="submit" className="button disabled">
            {loading ? <Loader /> : t`INDISPONÍVEL`}
          </button>
        </form>
      </div>
      <img className="separator" src={separator} alt="separator" />
    </div>
  );
};

export default ProductCard;
