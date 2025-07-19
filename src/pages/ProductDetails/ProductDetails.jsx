import { useParams } from "react-router";
import ProductDetailsTabs from "../../components/ProductDetailsComponents/ProductDetailsTabs/ProductDetailsTabs";
import ProductInfo from "../../components/ProductDetailsComponents/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/ProductDetailsComponents/RelatedProducts/RelatedProducts";
import useProductDetails from "../../hooks/useProductDetails";
import Loading from "../../components/Loading/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const { productDetails, isLoading } = useProductDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="bg-gray-50">
        <ProductInfo productDetails={productDetails} />
        <ProductDetailsTabs productDetails={productDetails} />
        <RelatedProducts productDetails={productDetails} />
      </main>
    </>
  );
}
