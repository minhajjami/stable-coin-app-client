// import React from "react";

// const banks = [
//   ["1", "Sonali Bank"],
//   ["2", "Rupali Bank"],
//   ["3", "Western Union"]
// ];

// const BankDrop = ({ label, ...others }) => (
//   <>
//     <label>{label}</label>
//     <select {...others}>
//       {banks.map(([value, name]) => (
//         <option value={value}>{name}</option>
//       ))}
//     </select>
//   </>
// );

// export default BankDrop;



import React, { useEffect, useState } from 'react';

const BankDrop = ({ label, ...others }) => {

  const baseUrl = 'https://mysterious-sands-05022.herokuapp.com';
  const[banks,setBanks]=useState([]);

  useEffect(()=>{
    fetch(`${baseUrl}/getBankByCoin/?coin=Paisa`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>{
      const newList =[];
      data.map((d)=>newList.push([d.Country,d.bankName]))
      console.log(newList)
      setBanks(newList)
    })

  },[])

  return (
    <div>
      <h6  className="d-inline-flex p-2">{label}</h6>
      <select {...others}>
        {banks.map(([value, name]) => (
          <option value={name}>{name}</option>
        ))}     
      </select>
    </div>
  );
};

export default BankDrop;