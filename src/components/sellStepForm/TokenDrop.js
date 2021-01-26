import React, { useEffect, useState } from 'react';

const TokenDrop = ({ label, ...others }) => {
    const baseUrl = 'https://mysterious-sands-05022.herokuapp.com';
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/getAllToken`)
            .then(res => res.json())
            .then(data => {
                const newList = [];
                data.map((d) => newList.push([d.country, d.tokenName]))
                setTokens(newList)
            })

    }, [])

    return (
        <div>
            <h6 className="d-inline-flex p-2">{label}</h6>
            <select {...others}>
                {tokens.map(([value, name]) => (
                    <option value={name}>{name}</option>
                ))}
            </select>
        </div>
    );
};

export default TokenDrop;