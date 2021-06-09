import React from "react";
import Principal from "./pages/principal/principal";
import { ProductContextProvider } from "./context/productContext";
import { UserContextProvider } from "./context/userContex";
import { HistoryContextProvider } from "./context/historyContext";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ProductContextProvider>
          <HistoryContextProvider>
            <Principal />
          </HistoryContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
