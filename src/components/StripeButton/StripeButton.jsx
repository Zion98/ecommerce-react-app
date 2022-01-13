import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey =
    "pk_test_51KHNybB3QIDvWOmVSAaVlWTCueq6pNTOCyNp68nPPo8ti3Xt2eAoHNl0vZWn3IAk2mX4P771UhbYM5OhTOAJh4t100cL4hHwN8";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Travel Clothings Ltd."
      billingAddress
      shippingAddress
      image={
        "https://thumbs.dreamstime.com/b/magnetic-compass-world-map-travel-geography-navigation-tou-magnetic-compass-world-map-travel-geography-navigation-tourism-121970937.jpg"
      }
      description={`Your Total ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      bitcoin={true}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
