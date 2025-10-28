
import './App.css'
import ProductList from './components/ProductList'
import type { ProductCardType } from './types/ProductCardType'

function App() {

  const ListOfProducts:ProductCardType[] = [{
    id:1,
        name: 'T-shirt',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 750,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
  },
  {
    id:2,
        name: 'Pent',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 1050,
        image: "https://d1fufvy4xao6k9.cloudfront.net/images/landings/43/shirts-mob-1.jpg"
  },
  {
    id:3,
        name: 'T-shirt',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 1000,
        image: "https://www.sclothers.com/cdn/shop/products/2_6ae000de-8be6-47c1-a755-4bcbf84e1947.jpg?v=1666995988&width=1080"
  },{
    id:4,
        name: 'T-shirt',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 750,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
  },
  {
    id:5,
        name: 'T-shirt',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 1050,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaAW2znk3P2s7ifEydg8BtaWAp4UDhwh8kw&s"
  },
  {
    id:6,
        name: 'Polo Shirt',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 1000,
        image: "https://images.unsplash.com/photo-1724627561744-6350067436ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
  },{
    id:7,
        name: 'T-shirt',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 1050,
        image: "https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
  },
  {
    id:8,
        name: 'Pent',
        description: 'Pure Cotton, Amazing Comfort lorem Ut minima cum quo illum similique atque dolor, accusantium architecto ',
        price: 1000,
        image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
  }
]
  

  return (
    <>
      <ProductList list = {ListOfProducts}/>
    </>
  )
}

export default App
