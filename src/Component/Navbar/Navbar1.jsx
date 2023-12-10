// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar1Mobile from './Navbar1Mobile.jsx';
import Navbar1Web from './Navbar1Web.jsx';


function Navbar1() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {width >= 768 ? (
                <Navbar1Web />
            ) : (
                <Navbar1Mobile />
            )}
        </div>
    );
}

export default Navbar1;