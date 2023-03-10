import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        //button={IntroContent.button}
        icon="logo.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title="makina_2.png"
        content="makina_3.png"
        section={AboutContent.section}
        icon="makina_1.png"
        id="about"
      />
       <MiddleBlock
        title={MissionContent.title}
        content={MissionContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title="product1.png"
        content="product2.png"
        icon="product3.png"
        id="product"
      />
      <ContentBlock
        type="left"
        title="product4.png"
        content="product5.png"
        icon="product6.png"
        id="product"
      />
      <ContentBlock
        type="left"
        title="product7.png"
        content="product8.png"
        icon="product9.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
