import { useState } from 'react';
import jsonData from '../data.json';




function ProductRow() {
    
    const [products] = useState(jsonData);
        return (
            <div>
                <h3>Product Row</h3>
                <table>
                    <thread>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thread>
                    <body>
                        {products.map(product =>(
                            <tr key={product.id} style={!product.inStock ? { color: 'red' } : {}}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            </tr>
                        ))}
                        
                    </body>
                </table>
            </div>
        );
    
}

export default ProductRow