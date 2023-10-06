import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useLocation } from "react-router-dom";
import UseScroll from "../../UseScroll/UseScroll";
const TermsAndCondition = () => {
  const location = useLocation();
  const { pathname } = location;
  UseScroll(pathname);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="my-32 w-full max-w-7xl mx-auto divide-y-8 divide-black px-5 lg:px-0">
      <PageTitle titles={"Terms&Conditions"}></PageTitle>
      <h1 className="font-roboto font-bold text-3xl">
        Why are these Terms and Conditions of Sale important to me?
      </h1>
      <p className="font-roboto text-xl mb-2">
        These Terms and Conditions are important to you because they apply to
        all orders that you place with Toyqo Brand Retail, Inc. through
        Toyqo.com for delivery in the world . Additional terms may apply to
        certain products, such as software. We strongly recommend that you read
        these Terms and Conditions carefully before submitting your order to us.
      </p>
      <h1 className="font-roboto font-bold text-3xl">1. How does it work?</h1>
      <h3 className="font-roboto font-medium text-xl">
        Who am I placing my order with?
      </h3>
      <p className="font-roboto text-xl mb-2">
        When you make a purchase through the Toyqo website, you are placing the
        order with Toyqo Brand Retail, Inc., 100 Print website Road, Enfield, CT
        06082. Any reference to "we", "us" or "our" means Toyqo Brand Retail,
        Inc., and any reference to "you" or "your" means you as a customer.
        References to "I" and "my" in the theme questions do also mean you as a
        customer. Please note that the Toyqo website is intended for consumers
        to purchase items for personal use, not for resale or commercial use.
        Toyqo and the Toyqo logo are trademarks of the Toyqo Group ©2022 The
        Toyqo Group.
      </p>
      <h1 className="font-roboto font-bold text-3xl">
        What if the ordered products are not in stock?
      </h1>
      <p className="text-xl mb-2 font-roboto">
        We cannot guarantee that all the ordered products are available in our
        inventory at all times. We may make partial deliveries of products
        included in the same order if the products can be used separately. We
        will bear any additional shipping costs in such circumstances, and you
        will not be charged any extra costs due to partial deliveries. We will
        inform you as quickly as possible if a product is not available or
        cannot be delivered on time. If the product will not be available in the
        foreseeable future, we reserve the right not to accept your offer. You
        won&apos;t be able to purchase any parts that are listed as temporarily
        unavailable in our Pick a Brick selection. Should your order include
        such a part, we will offer you to cancel the total order, or to only
        cancel the part that is temporarily unavailable.
      </p>
    </div>
  );
};

export default TermsAndCondition;
