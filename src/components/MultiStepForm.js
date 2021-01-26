import React from 'react';
import { useForm, useStep } from "react-hooks-helper";
import Currency from './stepForm/Currency';
import Address from './stepForm/Address';
import Bank from './stepForm/Bank';
import FundTransfer from './stepForm/FundTransfer';
import Review from './stepForm/Review';
import Submit from './stepForm/Submit';

const defaultData = {
    coin: "5",
    quantity: "",
    address: "",
    bank: "EBL",
};

const steps = [
    { id: "currency" },
    { id: "address" },
    { id: "bank" },
    { id: "review" },
    { id: "submit" },
    { id: "fundTransfer" },
];

const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation };

    switch (step.id) {
        case "currency":
            return <Currency {...props} />;
        case "address":
            return <Address {...props} />;
        case "bank":
            return <Bank {...props} />;
        case "fundTransfer":
            return <FundTransfer {...props} />
        case "review":
            return <Review {...props} />
        case "submit":
            return <Submit {...props} />
    }

    return (
        <div>

        </div>
    );
};

export default MultiStepForm;