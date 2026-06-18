import {useState} from 'react'
import { useFetch } from './Hooks/useFetch'
 function App() {
  let [url,setUrl] = useState("https://dummyjson.com/product")
  let {products} = useFetch(url);
  return (
    <div>
      <h1>Custom hook</h1>
      <div>
        <button>All</button>
        <button>Beauty</button>
        <button>fragrances</button>
      </div>
      <div className="cards">
      {products && products.map((item) => {
        return(
          <div key={item.id}>
            <img src={item.thumbail} alt="" />
            <h1>{item.title.slice(0,15)}</h1>
            <p>{item.description.slice(0,80)}</p>
            <p>{item.price}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}
export default App;