import React, { useState } from "react";
import data from "../Data.json"

const Payment = () => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='paymentSection'>
     <div className="payments">
        <h1>Choose a plan</h1>
        <div className="paymentDiv">  
        {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div key={val.id} className="listHolder">
              <p>{val.name}</p>
                    <div className="imgboxing">
                      <img src={val.image} alt="" />
                    </div>
        
                  <div className="dete1">
                    
                    <p className="coloring">{val.price}</p>
                    <div className="achieve">
                    <h5>{val.achieve}</h5>
                    <h5>{val.achieve1}</h5>
                    <h5>{val.achieve2}</h5>
                    <h5>{val.achieve3}</h5>
                    <h5>{val.achieve4}</h5>
                    <h5>{val.achieve5}</h5>
                    </div>
                    <a href="https://flutterwave.com/pay/lpcbgdnu32yz">
                    <button
                      className="add_button"                
                    >
                      Add to cart
                    </button>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
     </div>
    </div>
  )
}

export default Payment