import React, { useContext, useState } from "react";
import "./styles.css";
import Menu from "../../components/menu/menu";
import Select from "../../components/filters/select/select";
import ButtonLeft from "../../components/filters/button/left";
import ButtonRight from "../../components/filters/button/right";
import ButtonReset from "../../components/filters/button/clear";
import Product from "../../components/products/product";
import Footer from "../../components/footer/footer";
import { ProductContext } from "../../context/productContext";

function Home() {
  const { copiaItems, items, setCopiaItems } = useContext(ProductContext);
  const [page, setPage] = useState(false);
  const itemSlice = page ? copiaItems.slice(16, 32) : copiaItems.slice(0, 16);
  return (
    <>
      <Menu />
      <div className="content-home">
        <div className="content-img"></div>
        <div className="content-filter">
          <p className="pagination">{page ? "17 a 32" : "01 a 16"}</p>
          <div className="content-form">
            <p className="orderBy">Filter by: </p>
            <form action="" className="form-flex">
              <Select id={1} items={items} setCopiaItems={setCopiaItems} />
              <button className="btn-filter" >Highest</button>
              <button className="btn-filter">Lower</button>
              <ButtonReset />
            </form>
          </div>
        </div>
        <Product articles={itemSlice} />
        <div className="content-inf">
          <span className="pagination-inf"> {page ? "17 a 32" : "01 a 16"}</span>
          <div className="content-arrows inf-arrow">
            {itemSlice.length > 15 &&
              (page ? (
                <>
                <p>Prev</p>
                <ButtonLeft page={page} setPage={setPage} /></>
              ) : (
                <>
                <p>Next</p>
                <ButtonRight page={page} setPage={setPage} /></>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
