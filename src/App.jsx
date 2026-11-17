
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import TransactionList from "./components/TransactionList";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  return (
    <>
      <WelcomeMessage />
      <TransactionList />
      <ContactForm />
      <Counter />
    </>
  );
}

export default App;
