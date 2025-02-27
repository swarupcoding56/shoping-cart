import React from "react";
import './App.css';
import { LuSalad } from "react-icons/lu";
import { LiaIceCreamSolid } from "react-icons/lia";
import { PiOrangeDuotone } from "react-icons/pi";
import { GiKiwiFruit } from "react-icons/gi";
import { FaEgg } from "react-icons/fa";
import { GiRoastChicken } from "react-icons/gi";
import { ShoppingCart } from 'lucide-react';

const Store = ({ onClick }) => {  
  const items = [
    { name: "salad", icon: <LuSalad size={30} fill='darkgreen' /> ,price:"10"},
    { name: "ice cream", icon: <LiaIceCreamSolid size={30} fill='yellow' />, price:"15" },
    { name: "orange", icon: <PiOrangeDuotone size={30} fill='orange' />, price:"20" },
    { name: "kiwi", icon: <GiKiwiFruit size={30} fill='orange' color='yellow' />, price:"10" },
    { name: "egg", icon: <FaEgg size={30} fill='yellow' color='red' />, price:"10" },
    { name: "chicken", icon: <GiRoastChicken size={30} fill='orange' /> ,price:"100" }
  ];

  return (
    <div className="main">
      <div className="head">
        <h1>Welcome to Swarup's Store</h1>
      </div>
      <div className="items">
        {items.map((item, index) => (
          <div className="item2" key={index}>
            <span>{item.name}{item.icon}</span>
            <button type='button' onClick={() => onClick(item.name,item.icon,item.price)}>  
              <ShoppingCart fill='red' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
