import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TokenDrop from './TokenDrop';

const Token = ({ formData, setForm, navigation }) => {
    const { token,quantity } = formData;
    return (
        <div className="mt-5">
            <Container maxWidth="xs" style={{border:'1px solid grey'}}className="p-5" >
            <TokenDrop label="Token " name="token" value={token} onChange={setForm} />
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
            />
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

export default Token;