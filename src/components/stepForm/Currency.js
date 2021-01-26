import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CoinDrop from './CoinDrop';


const Currency = ({ formData, setForm, navigation }) => {

    const { coin,quantity } = formData;

    return (
        <div className="mt-5">          
            <Container maxWidth="xs" style={{border:'1px solid grey'}}className="p-5" >
            <h5>Stablecoin Gateway - Buy</h5>
            <CoinDrop label="Coin " name="coin" value={coin} onChange={setForm} />
            <TextField
                label="Quantity"
                name="quantity"
                value={quantity}
                type="number"
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
                required
            />
            <h6>Total cost @price AOA/TAOA</h6>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                style={{ marginTop: "1rem" }}
                onClick={() => navigation.next()}
            >
                Next
            </Button>
        </Container>
        </div>   
    );
};

export default Currency;