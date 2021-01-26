import React from "react";

const Review = ({ setForm, formData, navigation }) => {
    const {
        coin,
        quantity,
        address,
        bank
    } = formData;
    const { go } = navigation;

    const baseUrl = 'https://mysterious-sands-05022.herokuapp.com';

    const handleSubmit = (data) => {
        const formData = new FormData();
        formData.append('coin', data.coin);
        formData.append('quantity', data.quantity);
        formData.append('address', data.address);
        formData.append('bank', data.bank);

        console.log(formData)

        fetch(`${baseUrl}/buySubmit`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                 alert('Successfully added')
            })
            .catch(error => {
                alert('Error', error)
            })
    }

    return (
        <div className="form">
            <h3>Review your data</h3>
            <h4>
                Currency
        <button onClick={() => go("currency")}>Edit</button>
            </h4>
            <div>
                {" "}
        Coin: {`${coin}`},
        <br />
        Quanity: {`${quantity}`},
      </div>
            <h4>
                BSC Address
        <button onClick={() => go("address")}>Edit</button>
            </h4>
            <div>
                Address: {`${address}`},
      </div>
            <h4>
                Bank
        <button onClick={() => go("bank")}>Edit</button>
            </h4>
            <div>
                Bank: {`${bank}`},
      </div>
            <div>
                <button onClick={() => handleSubmit(formData)}>Submit</button>
            </div>
        </div>
    );
};

export default Review;