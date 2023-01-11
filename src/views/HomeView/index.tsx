import PageLayout from "../../components/Layout";
import Hero from "../../components/molecules/Hero";
import HowItWorks from "../../components/molecules/HowItWorks";

const PageHomeView = () => {
  return (
    <PageLayout title="Home">
      <Hero />
      <HowItWorks />
    </PageLayout>
  );
};

export default PageHomeView;
