import CompanyOverview from "../components/aboutUs/CompanyOverview";
import ContactUs from "../components/aboutUs/ContuctUs";
import OurTeam from "../components/aboutUs/OurTeam";
import Testimonials from "../components/aboutUs/Testimonials";
import "../styles/style.aboutUs.css";

const AboutUsPage = () => {
  return (
    <div className="container ">
      <CompanyOverview />
      <OurTeam />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default AboutUsPage;
