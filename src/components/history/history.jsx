import React from "react"; 
import './styles.css'
import {Route} from "react-router-dom"
import ListaMovimientos from './listaMovimientos'; 
import Menu from '../menu/menu'
function History(){
    return(
        <>
        <Menu/>
        <div className="content-move">
            <Route path="/history" component={ListaMovimientos} />      
        </div>
        </>
    )
}
export default History; 