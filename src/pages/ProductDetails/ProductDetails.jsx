import { useParams } from "react-router";
import ProductDetailsTabs from "../../components/ProductDetailsComponents/ProductDetailsTabs/ProductDetailsTabs";
import ProductInfo from "../../components/ProductDetailsComponents/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/ProductDetailsComponents/RelatedProducts/RelatedProducts";
import useProductDetails from "../../hooks/useProductDetails";
import RelatedProductsSkeleton from "../../components/Skeleton/RelatedProductsSkeleton";
import ProductInfoSkeleton from "../../components/Skeleton/ProductInfoSkeleton";
import ProductDetailsTabsSkeleton from "../../components/Skeleton/ProductDetailsTabsSkeleton";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function ProductDetails() {
  const { id } = useParams();
  const { productDetails, isLoading } = useProductDetails(id);
  useScrollTop();
  if (isLoading) {
    return (
      <>
        <ProductInfoSkeleton />
        <ProductDetailsTabsSkeleton />
        <RelatedProductsSkeleton />
      </>
    );
  }

  return (
    <>
      <PageMetaData title={productDetails.title} />
      <main className="bg-gray-50">
        <ProductInfo isLoading={isLoading} productDetails={productDetails} />
        <ProductDetailsTabs isLoading={isLoading} productDetails={productDetails} />
        <RelatedProducts productDetails={productDetails} />
      </main>
    </>
  );
}
