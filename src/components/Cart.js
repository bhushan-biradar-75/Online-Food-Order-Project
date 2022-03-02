import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'; 
import { RemoveItem } from '../redux/slice';
const Cart = () => {
  const thali=useSelector(state=>state.counter.thali)
  console.log(thali)
  const despatch=useDispatch()
  const Remove=(id)=>{
    despatch(RemoveItem(id))

  }
var sum=0
for(const item of thali){
  sum=sum+item.totalPrice
}
  return (
    <div className='container' style={{marginleft:"50px"}}>
<h5 className='text-center summary-headline' >Order Summary</h5>
<div className='row'>
{
    thali.map((ele,ind)=>(
        <div id="cart-main-container" className='col-sm-12 col-lg-4 mt-3 text-center'>
            <div className="card img_tag " key={ind} >
  <img src={ele.Image} className="card-img-top" alt="..." width="100px" height="200px"/>
  <hr/>
  <div className="card-body">
    <h5 className="card-title" style={{color:"white"}}>{ele.name}</h5>
    <p className="card-text" style={{color:"white"}}>Quantity: {ele.quantity}</p>
    <p>Price: ₹{ele.price}</p>
    <p style={{color:"white"}}>TotalPrice: ₹ {ele.totalPrice}</p>
    <button onClick={()=>Remove(ind)} className="btn btn-primary" style={{color:"black" ,fontWeight:"bold"}}>Remove</button>
        
  </div>
  </div>
</div>
    

        
    )
    )
}
<h3 className='button text-center' style={{marginBottom:"50px",marginTop:"80px" , background:"white",fontFamily:"fantasy"}}>Total price of the Thali : ₹ {sum}</h3>
</div>
    </div>
  )
}

export default Cart