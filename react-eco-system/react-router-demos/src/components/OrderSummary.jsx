
import React from 'react'
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
    const navigate = useNavigate()
    
  return (
    <div>
      <h2>Order Summary Component</h2>
      <h3>Order Confirmed </h3>
      <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}
export default OrderSummary;
