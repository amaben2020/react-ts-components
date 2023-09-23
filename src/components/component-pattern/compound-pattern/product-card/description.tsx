const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="text-left my-4">
      <h3 className="line-clamp-4"> {description}</h3>
    </div>
  );
};

export default ProductDescription;
