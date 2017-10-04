import React from "react"
import Link from "gatsby-link"

export default () => 
    <div style={{ color: 'tomato' }}>
        <h1>Do you like my random picture</h1>
        <img src="https://lorempixel.com/400/200" alt="LoremPixel" />
        <Link to="/page-2">Page 2</Link>
    </div>
