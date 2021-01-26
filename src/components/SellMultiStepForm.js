import React from 'react';
import { useForm, useStep } from "react-hooks-helper";
import Token from './sellStepForm/Token';
import WalletAddress from './sellStepForm/WalletAddress';

const defaultData = {
    token: "token one",
    quantity: "",
    address: "",
    bank: "EBL",
};

const steps = [
    { id: "token" },
    { id: "address" },
    { id: "bank" },
    { id: "review" },
    { id: "submit" },
    { id: "fundTransfer" },
];

const SellMultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation };

    switch (step.id) {
        case "token":
            return <Token {...props} />;
        case "address":
            return <WalletAddress {...props} />;
    }

    return (
        <div>

        </div>
    );
};

export default SellMultiStepForm;