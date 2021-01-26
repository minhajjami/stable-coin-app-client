import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import BankDrop from './BankDrop';

const Bank = ({ formData, setForm, navigation }) => {
    const { bank} = formData;
    return (
        <div className="mt-5">
        <Container maxWidth="xs"  style={{border:'1px solid grey'}}className="p-5">
        <BankDrop label="Bank " name="bank" value={bank} onChange={setForm} />
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
    );
};

export default Bank;