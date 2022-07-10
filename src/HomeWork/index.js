import React from 'react'
import BoxProduct1 from './Basic1/BoxProduct1'
import BoxProduct2 from './Basic2/BoxProduct2'
import BoxProduct3 from './Basic3/BoxProduct3';
import ChartBar1 from './BlockUI1/ChartBar1';

const styleLine = {
    marginTop: '20px',
    marginBottom: '20px',
};

export default function index() {
  return (
    <div>
        <BoxProduct1/>

        <div style={styleLine}> <hr/></div>

        <BoxProduct2/>

        <div style={styleLine}> <hr/></div>

        <BoxProduct3></BoxProduct3>

        <div style={styleLine}> <hr/></div>

        <ChartBar1 text='BANDWIDTH' color1='#e54d4c' color='#f45456' percentage={20}/>
        <ChartBar1 text='STORAGE' color1='#2db8cd' color='#31c8dd' percentage={50}/>
        <ChartBar1 text='USERS' color1='#4ac25e' color='#51d567' percentage={70}/>
        <ChartBar1 text='VISITORS' color1='#e9c318' color='#fcd518' percentage={30}/>
        <ChartBar1 text='EMAILS' color1='#bb70d5' color='#cb79e7' percentage={45}/>
        <ChartBar1 text='BASIC' color1='#eb59d6' color='#fe60e8' percentage={50}/>
        <ChartBar1 text='OTHERS' color1='#5890da' color='#619cec' percentage={37}/>
    </div>
  )
}
