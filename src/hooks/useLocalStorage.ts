import {useState, useEffect} from "react"

export const useLocalStorage = (key: string, initialValue: string) => {
  const dataInStorage = localStorage.getItem(key)
const INITIAL_VALUE = !dataInStorage?.length ? initialValue : dataInStorage
 
  const [storageValue, setStorageValue] = useState(INITIAL_VALUE)
   useEffect(() => {
        setStorageValue(INITIAL_VALUE) 
   }, [dataInStorage])

  return {
    value: storageValue,
    setValue: (text: string) => setStorageValue(localStorage.setItem(key, text))
  };
};

 //usage:   const {value, setValue} = useLocalStorage('inputValue', '');

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };