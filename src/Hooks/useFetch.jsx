import React, { useEffect, useState } from 'react'

function useFetch(url) {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setProducts (data.products));
    }, [products])
  return {products}
    
  
}
export { useFetch };