import Script from 'next/script';
import React, { useState } from 'react';
const Test = () => {

    let [isClick, setIsClick] = useState(false)
    return (
        <>
            {isClick && <Script>{
                `   
                fbq('track', 'testButton2');
            `}</Script>}
            <button type='button' id='xxx'>click</button>
        </>
    )
}
export default Test