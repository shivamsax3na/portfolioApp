import React from 'react'
import '../css/home.css'

export default function ImgCompOne() {
    return (
        <div style={{
            position:'relative'
        }}>
                    

            <div className="container">
                <br /><br />
                <img 
                    id="avtarImage" 
                    src="https://lh3.google.com/u/0/d/1nSR-l2ofTlzJ_VuMc_hnTOi_Ub2cLsLW=w958-h910-iv1" 
                    alt="pic" 
                    style = {{
                        height:'18rem',
                        width:'12rem',
                        borderRight: '1px solid #FFFFFF',
                        paddingRight:'2rem',
                         position: 'absolute'
                        
                    }}/>

                    <p style={{
                        position: 'relative',
                        left : '15rem'
                    }}>Hi there! I'm Shivam so if you're reading <br />this look at the picture at your right, <br />it's me and I am glad you're here</p>
            </div>



        </div>
    )
}
