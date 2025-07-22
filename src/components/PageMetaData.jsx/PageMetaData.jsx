export default function PageMetaData({
  title = "FreshCart",
  description = "FreshCart Description ",
  keywords = "fresh, cart, ecommerce",
  author = "FreshCart Team",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
