const ProductImage = ({ image, title }: { image: string; title: string }) => {
  return <img src={image} alt={title} />;
};

export default ProductImage;
