import Card from "../Components/Card";
import MakeUpForm from "../Components/MakeUpForm";
import Footer from "../Components/Footer";

const Makeup = () => {
  return (
    <div>
      <Card
        activity="Make up & Cleaning for Deceased Body"
        days="7th-9th May 2024"
        location="Photography Studio 1"
      />
      <MakeUpForm />
      <Footer />
    </div>
  );
};

export default Makeup;
