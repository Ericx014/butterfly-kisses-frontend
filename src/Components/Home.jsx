import Card from "../Components/Card";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Card
        activity="Meditation session"
        days="7th-9th May 2024"
        time="10:00a.m - 5:00p.m"
				location="Beside DKE"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
