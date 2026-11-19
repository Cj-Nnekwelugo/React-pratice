
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";


import ProductList from "./components/ProductList";

import TransactionList from "./components/TransactionList";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  return (
    <>
      <WelcomeMessage />
      <TransactionList />
      <ContactForm />
      <Counter />
      

      <div className="">
        <h3>Products</h3>

       <ProductList />
      </div>
    </>
  );
}

export default App;
