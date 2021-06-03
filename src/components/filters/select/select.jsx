import React from "react"; 
import './styles.css';

function Select({copiaItems, filter}){
    
    let repeat = {};
    let result = copiaItems.filter(function(value) {
    let exists = !repeat[value.category];
    repeat[value.category] = true;
    return exists ;
    });
    return(
      
        <select onChange={filterByArticle} name="categories" id="" > 
            <option value="All Categories">All Categories</option>
            {result.map((value,index)=>{
            return <option key={index}>{value.category}</option>
            })}
        </select>
    )
    
    function filterByArticle(e){
        let filterUpdate = copiaItems.filter((value)=>{
            return e.target.value === "All Categories" ? value : value.category === e.target.value;

    })
        filter(filterUpdate,e.target.value);  
    }
}
export default Select; 