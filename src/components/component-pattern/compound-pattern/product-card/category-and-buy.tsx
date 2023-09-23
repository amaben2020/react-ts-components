const ProductCategoryAndBuyNow = ({
  category,
  buyNowText,
}: {
  category: string[];
  buyNowText: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <button className="bg-yellow-500 p-2 my-2 text-white">
          {buyNowText}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        {category.map((category: string) => (
          <div
            style={{
              color: "white",
              margin: "10px 0 0 0",
              padding: 8,
              background:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryAndBuyNow;
