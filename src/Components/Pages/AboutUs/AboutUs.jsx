import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useLocation } from "react-router-dom";
import UseScroll from "../../UseScroll/UseScroll";
const AboutUs = () => {
  const location = useLocation();
  const { pathname } = location;
  UseScroll(pathname);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="my-32 w-full max-w-7xl mx-auto divide-y-8 divide-black px-5 lg:px-0">
      <PageTitle titles={"About us"}></PageTitle>
      <p className="font-roboto text-xl mb-2">
        It has come a long way over the past 90 years - from a small
        carpenter&apos;s workshop to a modern, global enterprise that is now one
        of the world&apos;s largest toy selling website.
      </p>
      <p className="font-roboto text-xl mb-2">
        The Toyqo lego brick is our most important product. We are proud to have
        been named “Toy of the Century” twice. Our products have undergone
        extensive development over the years but the foundation remains the
        traditional Toyqo lego brick.
      </p>
      <p className="font-roboto text-xl mb-2">
        At the Toyqo, we&apos;re playing our part in building a sustainable
        future and creating a better world for our children to inherit. Find out
        how we&apos;re joining forces with others to have a lasting impact and
        inspire the children of today to become the builders of tomorrow.
      </p>
      <p className="font-roboto text-xl mb-2">
        When children play they can build valuable life skills while having fun.
        Learning through play enables children to solve problems creatively,
        boosting confidence and resilience.
      </p>
      <p className="font-roboto text-xl mb-2">
        To help the millions of vulnerable children affected by crises, we
        launched the Emergency Relief Response Policy along with the lego
        Foundation to provide support for families in armed conflict and natural
        disaster zones.
      </p>
    </div>
  );
};

export default AboutUs;
