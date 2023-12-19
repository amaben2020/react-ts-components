import useToggle from "./hook/useToggle";

const TestPage = () => {
  const products = [
    { id: "1", title: "Iphone", price: 300 },
    { id: "2", title: "Oraimo watch", price: 800 },
    { id: "3", title: "Megido", price: 1300 },
  ]
  
  const { handleToggle, selectedProducts } = useToggle()
  
  return (
    <div>
      <div className="border p-10 flex justify-around">
        {products.map((product) => {
          const isSelected = selectedProducts.includes(product.id);
          return (
            <button
              
              key={product.id} /* Use the unique ID as the key */
              className={`border p-8 rounded-lg cursor-pointer ${
                isSelected ? "border-3" : ""
              }`}
              style={{
                border: isSelected ? "3px solid red" : "",
              }}
              onClick={() => handleToggle(product.id)}
            >
              <h3>{product.title}</h3>

              <h5>{product.price}</h5>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TestPage;
