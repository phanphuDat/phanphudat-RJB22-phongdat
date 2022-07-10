import React from 'react'
import img from '../asset/image/1.jpg'
import './BoxPd.css'

const shirt = {
    image: img,
    name: "Clothing & Apparel",
    info1: "Accessories",
    info2: "Bags",
    info3: "kid's fashions",
    info4: "Mens"
}

function render(user) {
    return (
        <>
            <div className="card">
                <div className="card-descriptions">
                    <div className="img-des">
                        <img src={user.image} className="imageBS1" alt="error"></img>
                    </div>
                    <div className="prof-des">
                        <span className="info-title">{user.name}</span>
                        <span>{user.info1}</span>
                        <span>{user.info2}</span>
                        <span>{user.info3}</span>
                        <span>{user.info4}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function BoxProduct1() {
  return (
    <>
        <div>{render(shirt)}</div>
    </>
  )
}
