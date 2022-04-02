import React from 'react';
import Sister from '../Sister/Sister';
import MySelf from '../MySelf/MySelf';

const Father = ({ home }) => {
    return (
        <div>
            <h3>Father: {home}</h3>

            <Sister home={home}></Sister>
            <MySelf home={home}></MySelf>
        </div>
    );
};

export default Father;