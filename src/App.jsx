
import Card from "./assets/components/Card"
import Intro from "./assets/components/Intro"
import OrderButton from "./assets/components/OrderButton"
import ProductCard from "./assets/components/ProductCard"
import ProductList from "./assets/components/ProductList"
import SayHello from "./assets/components/SayHello"
import WelcomeBanner from "./assets/components/WelcomeBanner"

function App() {
  

  return (
    <>
     <SayHello />
     <ProductCard />
     <WelcomeBanner />
     <OrderButton />
     <Card />
     <Intro />

      <div className="flex flex-col items-center w-full border bg-amber-500">
        <h2 className="font-bold text-5xl">Our Products</h2>

        <ProductList />
      </div>
    </>      
  )
}

export default App
