
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import Input from "./components/Input"

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
      

      <div className="w-full flex flex-col items-center gap-11 ">
        <h3 className="font-bold text-4xl">Products</h3>

       <ProductList />
      </div>

      <Input />
    </>
  );
}

export default App;
