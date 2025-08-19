import React, { useState } from "react";
import Store from "./store";

function App() {
  const [cartItems, setCartItems] = useState({}); 
  const [totalbill,setTotalBill]=useState(0);

  const clickhandler = (name, icon,price) => {
    setTotalBill(Number(totalbill)+Number(price));
    setCartItems((prevCart) => ({
      ...prevCart,
      [name]: prevCart[name]
        ? { ...prevCart[name], count: prevCart[name].count + 1,totalprice:Number(prevCart[name].totalprice)+Number(price) }
        : { icon, count: 1,totalprice:Number(price)}, 
    }));
  };

  return (
    <div className="App">
      <Store onClick={clickhandler} />
      <div className="itembuy">
        <div className="head2">
          <h2>MY CART</h2>
        </div>
        <div className="items2">
          <ul>
            {Object.entries(cartItems).map(([name, item]) => (
              <li key={name}>
                {item.icon} {name} - <strong>{item.count}</strong> ------ <strong>totalprice: {item.totalprice}$</strong>
              </li>
            ))}
          </ul>
          <h1>Total Bill: {totalbill}$</h1>
          {totalbill > 1000 && <h1>Your bill is so high</h1>}
          {totalbill < 1000 && <h1>Your bill is ok</h1>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
