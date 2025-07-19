import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts";
import HomeCategory from "../../components/HomeComponents/HomeCategory/HomeCategory";
import HomeDeals from "../../components/HomeComponents/HomeDeals/HomeDeals";
import HomeFeatures from "../../components/HomeComponents/HomeFeatures/HomeFeatures";
import HomeSlider from "../../components/HomeComponents/HomeSlider/HomeSlider";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeFeatures />
      <HomeCategory />
      <HomeDeals />
      <FeaturedProducts />
    </>
  );
}
