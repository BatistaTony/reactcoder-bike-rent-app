import Head from "next/head";
import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";
import { PageLayoutContainer } from "./styles";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}
const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <PageLayoutContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar title={title} />
      {children}
      <Footer />
    </PageLayoutContainer>
  );
};

export default PageLayout;
