
import React, { useEffect, useState } from 'react';

const CoinDrop = ({ label, ...others }) => {

  const baseUrl = 'https://mysterious-sands-05022.herokuapp.com';
  const[coins,setCoins]=useState([]);

  useEffect(()=>{
    fetch(`${baseUrl}/getAllCoin`)
    .then(res=>res.json())
    .then(data=>{
      const newList =[];
      data.map((d)=>newList.push([d.country,d.coinName]))
      console.log(newList)
      setCoins(newList)
    })

  },[])

  return (
    <div>
      <h6  className="d-inline-flex p-2">{label}</h6>
      <select {...others}>
        {coins.map(([value, name]) => (
          <option value={name}>{name}</option>
        ))}     
      </select>
    </div>
  );
};

export default CoinDrop;