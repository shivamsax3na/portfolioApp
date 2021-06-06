import React from 'react'

export default function BackVideo() {
    return (
        <div>
            <video autoplay muted loop id="myVideo" style-={{ position:'fixed', top:0, bottom:0, minHeight:'100%', minWidth:'100%'}}>
                <source src="https://www.youtube.com/embed/WZw__FMN0bo" type="video/mp4" />
                {/* <iframe width="956" height="538" src= title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </video>

        </div>
    )
}
