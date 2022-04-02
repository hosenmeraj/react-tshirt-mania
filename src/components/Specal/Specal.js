import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Specal = () => {
    const ring = useContext(RingContex)
    return (
        <div>
            <h3>Specal</h3>
            {/* <h3>Specal{home}</h3> */}
            {/* <p>{gift}</p> */}
            <p>{ring}</p>
        </div>
    );
};

export default Specal;