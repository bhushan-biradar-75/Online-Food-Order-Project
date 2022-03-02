import React from 'react';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Menu() {

  const productData=useSelector(state=>state.counter.products)

  return(
    <div className='container' >
      
<h1 className='menulist text-center' style={{background:"black" , color:"white"}}>Menu List</h1>
    <div className='row my-3'> 

      {
        productData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Menu;  