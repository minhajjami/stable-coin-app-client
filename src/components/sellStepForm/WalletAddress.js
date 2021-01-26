import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import WAValidator from "wallet-address-validator";
import { useHistory } from "react-router-dom";

const WalletAddress = ({ formData, setForm, navigation }) => {
  const { address } = formData;

  const inWallet = '1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck';

  let history = useHistory();

  // const validWallet = () => {
  //   const valid = WAValidator.validate(inWallet, "BTC");
  //   console.log(valid)
  //   if (valid) {
  //     history.push("/thirdPage");
  //     setWallet(inWallet);
  //   } else {
  //     alert("Address INVALID");
  //   }
  // };

  return (
    <div className="mt-5">
      <Container maxWidth="xs" style={{ border: '1px solid grey' }} className="p-5">
        <TextField
          label="Enter Your BSC Address"
          name="address"
          value={address}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <p>If for some reason we can not procced with your sale (which is rare) we will completely return your assests. Please Provide a BSC Valid Wallet Address that you have to access to.Pay Close Attention to not input any incorrect information</p>
        <a className="anchor" text-align="center" href="https://www.binance.org/en/smartChain" target="_blank" >Don't have a BC wallet yet?</a>
        <div style={{ marginTop: "1rem" }}>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => navigation.previous()}
          >
            Back
            </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigation.next()}
          >
            Next
            </Button>
        </div>
      </Container>
    </div>

  )
};

export default WalletAddress;