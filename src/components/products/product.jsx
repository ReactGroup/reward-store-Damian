import React from "react"; 
import './styles.css'
function Product({articles}){
    return(
        <div className="content-product">
                    <div className="product-list">
        {articles.map ((product)=>{
               return(
                   <div className="product-card">
                       <img src={product.img.url} alt={product.name} />
                       <h5 className="category">{product.category}</h5>
                       <h6 className="item">{product.name}</h6> 
                       <h6 className="item">{product.cost}</h6> 
                   </div>  
               );
           })}
   </div>
        </div>

    )
}
export default Product; 