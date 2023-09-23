import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import ProductCategoryAndBuyNow from "./product-card/category-and-buy";
import ProductDescription from "./product-card/description";
import ProductImage from "./product-card/image";
import ProductPrice from "./product-card/price";
import ProductTitle from "./product-card/title";
 export const ProductContext = createContext<{
    setIsActive: Dispatch<SetStateAction<boolean>>;
  }>({
    setIsActive: () => {},
  });

const ProductCard = ({ children }: { children: ReactNode }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="max-w-[400px] border shadow-md"
      style={{
        border: isActive ? "1.2px solid gold" : "",
      }}
    >
      <div className="p-5">
        <ProductContext.Provider value={{ setIsActive }}>
          {children}
        </ProductContext.Provider>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.Image = ProductImage;
ProductCard.Description = ProductDescription;
ProductCard.Title = ProductTitle;
ProductCard.Price = ProductPrice;
ProductCard.ProductCategoryAndBuyNow = ProductCategoryAndBuyNow;
