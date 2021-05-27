import React from "react"; 
import './styles.css'
const movimientos =[
    {
        id: "1",
        description: "Login"
    },
    {
        id: "2",
        description: "Canje"
    },
    {
        id: "3",
        description: "Gestión de Coins"
    },
    {
        id: "4",
        description: "Gestión de Gift Card"
    },
    {
        id: "5",
        description: "Bonus en Coins"
    },
    {
        id: "6",
        description: "Alta User"
    },
]; 

const ListaMovimientos = () => {
    return( 
        <div className="content-mov">
            <div className="content-title">
                <h3>Photo</h3>
                <h3>Product</h3>
                <h3>Price</h3> 
                <h3>Date</h3> 
            </div>
            <ul className="move-lista" >  
                {movimientos.map((movimiento) => (
                    <li key={movimiento.id}>{movimiento.description}</li>
                ))}
            </ul>  
       </div>
    ); 
}; 

export default ListaMovimientos; 