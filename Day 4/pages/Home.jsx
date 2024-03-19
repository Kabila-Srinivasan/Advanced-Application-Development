
import HomeHero from "../pages/HomeHero";
import Trip from "../pages/Trip";
import "../assets/css/Home.css";
import Booking from "./Booking";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import FeedbackForm from "./FeedbackForm";


function Home() {

  return (
    <>
      <HomeHero
        cName="hero"
        title={<h1>Explore The World<br /><br/></h1>}
        text={<h1><b>Choose Journey</b><br/><br/><br/></h1>}
        btnClass="show"
        buttonText="Our Destinations"
        url="/trip"
      />
      <Trip />
      <Booking/>
      <Testimonials/>
      <Aboutus/>
      <Contact/>
      <Faq/>
      <FeedbackForm/>
    </>
  );
}

export default Home;
