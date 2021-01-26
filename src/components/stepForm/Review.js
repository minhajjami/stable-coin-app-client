import React from "react";
import Container from "@material-ui/core/Container";
import { useId } from "react-id-generator";
import { useHistory } from 'react-router-dom';

const Review = ({ setForm, formData, navigation }) => {
    const history = useHistory();
    const {
        coin,
        quantity,
        address,
        bank
    } = formData;
    const { go } = navigation;

    const [htmlId] = useId();
    const IBAN = 'ABCDEFG1234567'

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
                // alert('Successfully added')
                history.replace("/buyFinal")
            })
            .catch(error => {
                alert('Error', error)
            })
    }

    return (
        //     <div className="form">
        //         <h3>Review your data</h3>
        //         <h4>
        //             Currency
        //     <button onClick={() => go("currency")}>Edit</button>
        //         </h4>
        //         <div>
        //             {" "}
        //     Coin: {`${coin}`},
        //     <br />
        //     Quanity: {`${quantity}`},
        //   </div>
        //         <h4>
        //             BSC Address
        //     <button onClick={() => go("address")}>Edit</button>
        //         </h4>
        //         <div>
        //             Address: {`${address}`},
        //   </div>
        //         <h4>
        //             Bank
        //     <button onClick={() => go("bank")}>Edit</button>
        //         </h4>
        //         <div>
        //             Bank: {`${bank}`},
        //   </div>
        //         <div>
        //             <button onClick={() => handleSubmit(formData)}>Submit</button>
        //         </div>
        //     </div>

        <div className="mt-5">
            <Container maxWidth="xs" style={{ border: '1px solid grey' }} className="p-5">
                <h6>Transfer funds to the following account</h6>
                <h6>IBAN: {IBAN}</h6>
                <h6>Swap Id : {htmlId}</h6>
                <br />
                <h6>As soon as the funds are received the transaction to your BSC wallet will be mode the following address</h6>
                <h6>Wallet Address</h6>
                <a href="#"> Doubts?Discord or Telegram</a>
                <br/>
                <div className="mt-2">
                     <button className="btn btn-success" onClick={() => handleSubmit(formData)}>Submit</button>
                </div>
            </Container>
            
        </div>
    );
};

export default Review;