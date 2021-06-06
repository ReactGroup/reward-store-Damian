import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import "./styles.css";
import Menu from "../../components/menu/menu";
import SectionHigh from "../../components/sections/higher";
import Product from "../../components/productList/product";
import SectionLow from "../../components/sections/lower";
import Footer from "../../components/footer/footer";

function Home() {
  const { copiaItems } = useContext(ProductContext);
  const [page, setPage] = useState(false);
  const itemSlice = page ? copiaItems.slice(16, 32) : copiaItems.slice(0, 16);

  return (
    <>
      <Menu />
      <div className="content-home">
        <SectionHigh page={page} />
        <Product articles={itemSlice} />
        <SectionLow page={page} setPage={setPage} itemSlice={itemSlice} />
      </div>
      <Footer />
    </>
  );
}
export default Home;
