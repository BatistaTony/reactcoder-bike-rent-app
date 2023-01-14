import PageLayout from "../../components/Layout";
import BikesGallery from "../../components/molecules/BikesGallery";
import Hero from "../../components/molecules/Hero";
import HowItWorks from "../../components/molecules/HowItWorks";
import NewBikes from "../../components/molecules/NewBikes";

const PageHomeView = () => {
  return (
    <PageLayout title="Home">
      <Hero />
      <HowItWorks />
      <NewBikes />
      <BikesGallery />
    </PageLayout>
  );
};

export default PageHomeView;
