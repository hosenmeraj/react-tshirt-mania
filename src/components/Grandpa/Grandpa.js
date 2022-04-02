import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContex = React.createContext('sonar anti')
const Grandpa = () => {
    const [home, setHome] = useState(1)
    const handleBuyHome = () => {
        const newHome = home + 1
        setHome(newHome)
    }
    const gift = 'dimond ring';
    return (
        <RingContex.Provider value={[home, setHome]}>
            <div className='grandpa' >
                <h4>Grandpa</h4>
                <button onClick={handleBuyHome}>Buy a Home</button>
                <p>Home: {home}</p>
                <section style={{ display: 'flex' }}>
                    <Father home={home} ></Father>
                    <Uncle home={home}></Uncle>
                    <Aunty home={home}></Aunty>
                </section>
            </div>
        </RingContex.Provider>
    );
};

export default Grandpa;