import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Address = ({ formData, setForm, navigation }) => {
  const { address } = formData;
  return (
    <div className="mt-5">
      <Container maxWidth="xs" style={{border:'1px solid grey'}}className="p-5">
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

export default Address;