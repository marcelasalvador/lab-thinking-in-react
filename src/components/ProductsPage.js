// import { useState } from 'react';
// import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </div>    
  )
}

export default ProductsPage