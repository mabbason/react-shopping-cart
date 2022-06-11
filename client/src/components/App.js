import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ProductAddForm from "./ProductAddForm"

const App = () => {

  return (
    <div id="app">
      <Header />
      <main>
        <ProductList />
        <ProductAddForm />
      </main>
    </div>
  );
};

export default App;
