import { ReactNode } from "react";
import ProductCategoryAndBuyNow from "./product-card/category-and-buy";
import ProductDescription from "./product-card/description";
import ProductImage from "./product-card/image";
import ProductPrice from "./product-card/price";
import ProductTitle from "./product-card/title";

const ProductCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="max-w-[400px] border shadow-md"
      style={{
        border: true ? "1.2px solid gold" : "",
      }}
    >
      <div className="p-5">{children}</div>

      {/* <div className="flex justify-between">
        <p>{data.title}</p>
        <p>${data.price}</p>
      </div> */}
      {/* <div className="flex items-center justify-between">
        <div>
          <button className="bg-yellow-500 p-2 my-2 text-white">Buy now</button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          {data.category.map((category) => (
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
      </div> */}
      {/* 
      <div className="text-left my-4">
        <h3 className="line-clamp-4"> {data?.description}</h3>
      </div> */}
    </div>
  );
};

export default ProductCard;

ProductCard.Image = ProductImage;
ProductCard.Description = ProductDescription;
ProductCard.Title = ProductTitle;
ProductCard.Price = ProductPrice;
ProductCard.ProductCategoryAndBuyNow = ProductCategoryAndBuyNow;
