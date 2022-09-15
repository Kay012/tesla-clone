import React from 'react'
import './Section.css'

import Fade from 'react-reveal'

const Section = (props) => {
    return (
        <div className='wrap' >
            <Fade bottom>
                <div className='itemtext'>
                    <h1>Model S</h1>
                    <p>Order Online for Touchless Delivery</p>
                </div>
            </Fade>
            <div className="all_buttons">
                <Fade bottom>
                    <div className="buttons">
                        <div className="left_button">
                            CUSTOM ORDER
                        </div>

                        <div className="right_button">
                            EXISTING INVENTORY
                        </div>

                    </div>
                </Fade>
                <div className="down_arrow" >
                    \|/
                    {/* <img src= '../'src="../../assets/images/down-arrow.svg" alt=''/> */}
                </div>
            </div>
            
        </div>
    )
}

export default Section
