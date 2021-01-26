import React from "react";
const Submit = ({ navigation, formData }) => {
    const { go } = navigation;
    console.log(formData);

    return (
        <div>
            <h3>Thank you for submitting. We will be in touch</h3>
      New Form  <button onClick={() => go("currency")}>New</button>
        </div>
    );
};

export default Submit;
