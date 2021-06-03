import React, {useState,useEffect} from "react"; 
import './styles.css';
import Menu from '../../components/menu/menu'
import Select from '../../components/filters/select/select'; 
import ButtonLeft from '../../components/filters/button/left';
import ButtonRight from '../../components/filters/button/right'
import ButtonReset from '../../components/filters/button/clear'
import Product from '../../components/products/product'; 
import Footer from '../../components/footer/footer'; 
//import {usePagination as Pagination} from '../pagination/pagination';

function Home(){
let [items,setItems] = useState([]); //HOOK DE PRODUCTOS SELECCIONADOS
let [copiaItems, setCopiaItems] = useState([]); //HOOK PARA CONSERVAR ARRAY ORIGINAL


//VER PAGINACION!
// let [page, setPage] = useState(1);
// const PER_PAGE = 16; 
// const count = Math.ceil(items.length / PER_PAGE);
// const _DATA = Pagination(items, PER_PAGE); 
// const handleChange =(value)=>{
//     setPage(value)
// }


//VER .ENV  + HEADERS
// const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;
// const headers = {
//   "Content-Type": "application/json",
//    Authorization: `Bearer ${API_KEY}`
// }

    useEffect(() => {
        let peticion = fetch("https://coding-challenge-api.aerolab.co/products",{
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c"
        }
    }); 
        peticion
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            setItems(data.slice(0,16));
            setCopiaItems(data); 
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
                        <Select
                            id={1}
                            copiaItems={copiaItems}
                            filter={filterArticle}
                        />
                        <ButtonReset/>
                    </form>  
                </div>   
            </div>
            <Product articles={items}/> 
            <div className="content-inf">
                <span className="pagination-inf">16 de 32</span>
                <div className="content-arrows inf-arrow">
                    <ButtonLeft/>   
                    <ButtonRight/>

                    {/* <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                    > */}                         
                    {/* </Pagination> */}  

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
    
    function filterArticle(selected){
            setItems(selected.splice(0,16)); 
        }
   
    }
export default Home; 