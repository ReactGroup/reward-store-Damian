import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import "./styles.css";
import Menu from "../../components/menu/menu";
import SectionHeader from "../../components/sections/header";
import Product from "../../components/productList/product";
import SectionFooter from "../../components/sections/footer";
import Footer from "../../components/footer/footer";

function Home() {
  const { copiaItems } = useContext(ProductContext);
  const [page, setPage] = useState(false);
  const itemSlice = page ? copiaItems.slice(16, 32) : copiaItems.slice(0, 16);

  return (
    <>
      <Menu />
      <div className="content-home">
        <SectionHeader page={page} setPage={setPage} />
        <Product itemSlice={itemSlice} />
        <SectionFooter page={page} setPage={setPage} itemSlice={itemSlice} />
      </div>
      <Footer />
    </>
  );
}
export default Home;
