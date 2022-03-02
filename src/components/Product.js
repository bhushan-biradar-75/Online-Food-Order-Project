import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTothali} from "../redux/slice";
const Product = ({data}) => {
  const [quantity,setQuantity]=useState(1);

const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  item.quantity=quantity;
  item.totalPrice=Number(item.quantity)*Number(item.price)
  dispatch(addTothali(item));
console.log(addTothali(item))
}

const increment=()=>{
  setQuantity(quantity+1)

}

const decrement=()=>{
  if(quantity>1)
  {
    setQuantity(quantity-1)
  }
}

  return (
    
<div className='col-sm-12 col-lg-4 mt-5 text-center' >
    <div className='card img_tag' >
 <img width="100px" height="200px"  src={data.Image} className="card-img-top" alt="..."/>
  <hr/> 
  <div className="card-body my-0">
    <h6 className="card-title" style={{color:"white"}}>{data.name}</h6>
 
<p className='text-center' style={{color:"white"}}>₹ {data.price}</p>

<button className='buttons mx-5 mb-4 mt--5' onClick={()=>add(data)}> Add Cart
</button>
    <div className="input-group my-3">
        <span className="input-group-btn">
         <button type="button" className="quantity-left-minus btn btn-danger btn-number" 
          onClick={decrement} >
          <b><strong><span className="glyphicon glyphicon-minus">-</span></strong></b>
        </button>
        </span>
        <input type="text" id="quantity" name="quantity" className="form-control input-number quantity__input"
         value={quantity} min="1" max="10" />
         <span className="input-group-btn">
           <button type="button" className="quantity-right-plus btn btn-success btn-number" 
           onClick={increment}>
          <b><strong><span className="glyphicon glyphicon-plus">+</span></strong></b>
          </button>
         </span>
    </div>
  </div>
</div>


    </div>
  )
}

export default Product