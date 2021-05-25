import React, {useState,useEffect} from "react"; 
import './styles.css';
import shop from '../../images/shop.png';
import arrowleft from '../../icons/arrowleft.svg';
import arrowright from '../../icons/arrowright.svg'; 
import Select from '../filters/select/select'; 
import Product from '../products/product'
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
<div className="content-home"> 
        <div className="content-img">
                <img  className="img" src={shop} alt="" />
            </div> 
    
           <div className="content-filter">
                <span className="pagination">16 de 32</span>
                <hr />
                <span className="orderBy">Filter by: </span>
                <form action="" className="form-flex">
                    <Select/>
                    <Select/>
                    <button className="btn-filter">Clear</button>
                </form>
                <div className="content-arrows sup">
                <img src={arrowleft} alt="icon-arrow" className="arrow-sup" />
                <img src={arrowright} alt="icon-arrow" className="arrow-sup" /> 
                </div>

            </div>
                 <div className="line sup"></div>
             <Product articles={items}/> 
            <div className="line inf"></div>
            <div className="content-inf">
                <span className="pagination-inf">16 de 32</span>
                <div className="content-arrows inf-arrow">
                <img src={arrowleft} alt="icon-arrow" className="arrow-sup" />
                <img className="arrow-inf" src={arrowright} alt="icon-arrow" /> 
                </div>
            </div>
        </div>
    )
}
export default Home; 