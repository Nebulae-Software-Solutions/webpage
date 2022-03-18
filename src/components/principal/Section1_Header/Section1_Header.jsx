import React from 'react'
import './Section1_Header.module.css'

function Section1_Header() {
    return (
        <header id='Section1_Header'>
            <div className="container header_container">
                <h1>Nebulae Software Solutions</h1>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, fugiat facere impedit ad ullam quia aspernatur nobis
                    optio deleniti nostrum quas recusandae dolor quaerat porro,
                    non blanditiis explicabo? Distinctio, aliquid.
                </h3>

                <a href="#Section4_Contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Section1_Header