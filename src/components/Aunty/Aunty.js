import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [home, setHome] = useContext(RingContex)
    return (
        <div>
            <h3>Aunty: {home}</h3>
            <button onClick={() => setHome(home + 1)}> add count</button>
        </div>
    );
};

export default Aunty;