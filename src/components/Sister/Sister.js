import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Sister = () => {
    const [home, setHome] = useContext(RingContex)
    const hanIncreaseBtn = () => {
        const newIncrease = home + 1;
        setHome(newIncrease)
    }
    return (
        <div>
            <p>Sister: {home}</p>
            <button onClick={hanIncreaseBtn}>gift</button>
        </div>
    );
};

export default Sister;