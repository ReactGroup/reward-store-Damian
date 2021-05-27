import React, {useState,useEffect} from "react"; 
import './styles.css';
import Menu from '../menu/menu'
import arrowleft from '../../icons/arrowleft.svg';
import arrowright from '../../icons/arrowright.svg'; 
import Select from '../filters/select/select'; 
import Product from '../products/product'; 
import Footer from '../footer/footer'
function Home(){
    let articles = ["All Categories", "Phones", "Laptops", "Audio", "Monitors", "Accesories", "Gaming", "Tables & E-readers", "Drones", "Phone Accesories"];
    let [items,setItems] = useState([]); //HOOK DE PRODUCTOS SELECCIONADOS
    let [arrayOri, setArrayOri] = useState([]); //HOOK PARA CONSERVAR ARRAY ORIGINAL
    useEffect(() => {
        let peticion = fetch("https://coding-challenge-api.aerolab.co/products",{
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        }
    }); 
        peticion
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setItems(data.slice(0,16));
            setArrayOri(data); 
          });
      }, []);
    return(
        <>
        <Menu/>
<div className="content-home"> 
        <div className="content-img"></div> 
    
           <div className="content-filter">
                <p className="pagination">16 de 32</p>
                <div className="content-form">
                       <p className="orderBy">Filter by: </p>
                <form action="" className="form-flex">
                    <Select/>
                    {/* <button className="btn-filter">Order By</button> */}
                    <button className="btn-filter">Clear</button>
                </form>  
                </div>   
            </div>
             <Product articles={items}/> 
            <div className="content-inf">
                <span className="pagination-inf">16 de 32</span>
                <div className="content-arrows inf-arrow">
                <img src={arrowleft} alt="icon-arrow" className="arrow-sup" />
                <img className="arrow-inf" src={arrowright} alt="icon-arrow" /> 
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home; 