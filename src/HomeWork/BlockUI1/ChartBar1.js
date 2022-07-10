import React from 'react'
import './Chart1.css';
import { AiFillStar } from "react-icons/ai"

const align = {alignItems: 'center'}

export default function ChartBar1({ text = 'TEXT', color1 = 'violet', color = 'pink', percentage = 50 }) {
  return (
    <>
        <div className="chart_Container">
        {/* <div className="text1"> <AiFillStar/> </div> */}
            <div className="column_left" style={{backgroundColor: color1}}>
                <span className="text">{text}</span>
            </div>
            <div className="column_right">
                <div className="column_percentage_left" style={{backgroundColor: color, width: `${percentage}%`}}>
                    <span className="text">{percentage}%</span>
                </div>
                <div className="column_percentage_right"></div>
            </div>
        </div>
    </>
  )
}
