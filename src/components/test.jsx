import Script from 'next/script';
import React, { useState } from 'react';
const Test = () => {

    let [isClick, setIsClick] = useState(false)
    return (
        <>
            {isClick && <Script>{
                `   
                fbq('track', 'testButton');
            `}</Script>}
            <button type='button' onClick={e => setIsClick(true)}>click</button>
        </>
    )
}
export default Test