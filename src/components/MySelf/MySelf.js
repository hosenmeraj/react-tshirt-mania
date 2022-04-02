import React from 'react';
import Specal from '../Specal/Specal';

const MySelf = ({ home }) => {
    return (
        <div>
            <p>Myself: {home}</p>
            <Specal ></Specal>
        </div>
    );
};

export default MySelf;