import { useContext } from "react";
import { ProductContext } from "..";

const ProductCategoryAndBuyNow = ({
  category,
  buyNowText,
}: {
  category: string[];
  buyNowText: string;
}) => {
  const { setIsActive } = useContext(ProductContext);
  const handleIsActive = () => setIsActive((p) => !p);

  return (
    <div className="flex items-center justify-between">
      <div>
        <button
          onClick={handleIsActive}
          className="p-2 my-2 text-white bg-yellow-500"
        >
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
            key={category}
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
