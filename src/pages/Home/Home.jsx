import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts";
import HomeCategory from "../../components/HomeComponents/HomeCategory/HomeCategory";
import HomeDeals from "../../components/HomeComponents/HomeDeals/HomeDeals";
import HomeFeatures from "../../components/HomeComponents/HomeFeatures/HomeFeatures";
import HomeSlider from "../../components/HomeComponents/HomeSlider/HomeSlider";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";

export default function Home() {
  return (
    <>
      <PageMetaData title="FreshCart" />
      <HomeSlider />
      <HomeFeatures />
      <HomeCategory />
      <HomeDeals />
      <FeaturedProducts />
    </>
  );
}
