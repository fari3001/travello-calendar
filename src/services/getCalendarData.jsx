import React from 'react'
const axios = require('axios')

import("./x-component")
    .then(({ default: XComponent }) =>
    customElements.define("trav-calendar", XComponent)
)
    .catch((error) => {
    console.log("Failed to import the component!");
    console.error(error);
});

export async function getCalenderData() {
    return (
        <div>
            
        </div>
    )
}
