import { useState} from 'react';
import jsonData from '../data.json';

function SearchBar() {
    const [searchInput, setSearchInput] = useState(jsonData);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          jsonData.filter((product) => {
          return product.name.match(searchInput);
      });
      }



return (
  <div>
    <h3>
      <span>Search Bar:</span>
    </h3>
    <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
   <label>
        <input
          type="checkbox"
          
        />
        Only show products in stock
      </label>
  </div>
);

}


export default SearchBar;


// //   const [productArr, setProductArray] = useState(jsonData);
// const [products, setProducts] = useState(jsonData);
// const [filteredProductArr, setFilteredProductArray] = useState(jsonData);

// const [name, setName] = useState("");
// const [price, setPrice] = useState(1);

// const updateName = event => setName(event.target.value)
// const updatePrice= event => setPrice(event.target.value)

// const ourNewProduct = {
//   name: name,
//   price: price
// };

// const copyProductsArray = [...products];
//   copyProductsArray.push(ourNewProduct);
//   setProducts(copyProductsArray);

// //   const handleRemove = (name) => {
// //     const updatedList = filteredProductArr.filter((item) => item.name !== name);
// //     console.log(updatedList);
// //     setFilteredProductArray(updatedList);
// //   };



//   return (
//     <div>
//       <h3>
//         <span>Search Bar:</span>
//       </h3>
//       <input onChange={(event) => {
//             const newSearch = products.filter ((singleFood) => {
//               return singleFood.name.toLowerCase().includes(event.target.value.toLowerCase())

//             })
//             console.log(newSearch)
//             setFilteredProductArray(newSearch)
//           }
          
//           }
//       />
//     </div>
//   );
// const [products, setProducts] = useState(jsonData);
// const [filteredProducts, setFilteredProducts] = useState(jsonData.items);
// const [searchTerm, setSearchTerm] = useState('');

// useEffect(() => {
//   const filteredList = products.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   setFilteredProducts(filteredList);
// }, [searchTerm, products]);

// const handleSearchInput = (event) => {
//   setSearchTerm(event.target.value);
// };