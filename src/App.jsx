
import Card from "./assets/components/Card"
import Intro from "./assets/components/Intro"
import OrderButton from "./assets/components/OrderButton"
import ProductCard from "./assets/components/ProductCard"
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
    </>      
  )
}

export default App
