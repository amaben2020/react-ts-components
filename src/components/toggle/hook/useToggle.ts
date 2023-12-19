import { useState } from 'react';

const useToggle = () => {
  const [selectedProducts, setSelectedProducts] = useState<Array<string>>([]);

 


  const handleToggle = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      const updatedSelectedProducts = selectedProducts.filter(elem => elem !== productId)
      setSelectedProducts(updatedSelectedProducts)
    } else {
      setSelectedProducts((prev) => [...prev, productId] )
    }
  }

  return {handleToggle, selectedProducts}  
}

export default useToggle