import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function FeaturedProductsPage() {
  useScrollTop();
  return (
    <>
      <PageMetaData title="Featured Products" />
      <FeaturedProducts />
    </>
  );
}
