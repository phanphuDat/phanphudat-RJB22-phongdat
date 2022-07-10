import React from 'react'
import img3 from '../asset/image/3.jpg'
import './BoxPd3.css'

const spanStyle='drfurion'

const product = {
    image: img3,
    prof: 'Technology',
    name: 'Harman Kadon Onys Studio Mini, Reviews & Experiences',
    day: 'Feb 21, 2021 By' 
}

function render(pr) {
    return (
        <>
            <div className="card2">
                <div className="card1-descriptions">
                    <div className="img1-des">
                        <img src={pr.image} className="imageBS3" alt="error"></img>
                    </div>
                    <div className="prof1-des">
                        <p className="shop-name">{pr.prof}</p>
                        <p className="name-tivi">{pr.name}</p>
                        <p className="opDay">{pr.day}</p>
                        <span> {spanStyle}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function BoxProduct3() {
  return (
    <div>{render(product)}</div>
  )
}
