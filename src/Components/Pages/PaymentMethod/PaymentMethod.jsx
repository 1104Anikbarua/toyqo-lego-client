import React, { useEffect } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import UseScroll from "../../UseScroll/UseScroll";
const PaymentMethod = () => {
  const location = useLocation();
  const { pathname } = location;
  UseScroll(pathname);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="my-32 w-full max-w-7xl mx-auto divide-y-8 divide-black px-5 lg:px-0">
      <PageTitle titles={"PaymentMethod"}></PageTitle>
      <p className="font-roboto text-xl">
        {" "}
        Toyqo.com accepts payment by credit card, debit card, visa card,
        PayPal.We don&apos;t accept purchase orders.
      </p>
      <h1 className="font-roboto font-bold text-3xl">Credit and Debit Card</h1>
      <p className="font-roboto text-xl mb-2">
        We accept MasterCard, Discover, Visa, American Express and Union Pay for
        payment. Your credit card won&apos;t be charged until your order is
        shipped. You can shop with confidence from Toyqo.com, knowing that
        transactions are protected by the highest level of security via SSL
        encryption. We&apos;ll authorize your credit card at the time of your
        order. As part of this authorization process, your bank will place a
        hold on your account for the purchase amount of your order. The hold
        will be removed after a number of days determined by your banking
        institution. Check with your bank for details. The credit card used for
        payment must be registered to the billing address on the order. The
        delivery address can be different from the billing address.
      </p>
      <h1 className="font-roboto font-bold text-3xl">PayPal</h1>
      <p className="font-roboto text-xl">
        We accept payment by PayPal. If you select PayPal as your payment
        method, you&apos;ll be taken to the PayPal website to complete your
        purchase. Our payment solution is based on the SSL standard, which means
        that your information submitted in connection with the payment
        transaction is protected by encryption.
      </p>
    </div>
  );
};

export default PaymentMethod;
