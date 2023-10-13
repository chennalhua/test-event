import React, { useEffect, useState } from 'react';
const Index = () => {
    useEffect(() => {
        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof (url) != 'undefined') {
                    window.location = url;
                }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11287166203/71SgCJDn_MwYEPv5kYYq',
                'event_callback': callback
            });
            return false;
        }
    })
    return (
        <>
            {/* <button onClick={e=>gtag_report_conversion('')}>xxx</button> */}
        </>
    )
}
export default Index