import React from "react"; 
import './styles.css'
import coin from '../../icons/coin.svg'
function Product({articles}){
    return(
        <div className="content-product">
            <div className="product-list">
                {articles.map ((product)=>{
                 return(
                    <div className="product-card">
                        <img className="product-card-img" src={product.img.url} alt={product.name} />
                        <h3 className="category">{product.category}</h3>
                        <h4 className="item">{product.name}</h4> 
                        <div className="item-price">
                        <img src={coin} alt="" />
                        <h4>{product.cost}</h4> 
                        </div>
                    </div>  
                    );
            })}
            </div>
        </div>
    )
}
export default Product; 