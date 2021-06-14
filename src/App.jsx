import React from "react";
import Principal from "./pages/principal/principal";
import { ProductContextProvider } from "./context/productContext";
import { UserContextProvider } from "./context/userContex";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ProductContextProvider>
          <Principal />
        </ProductContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
