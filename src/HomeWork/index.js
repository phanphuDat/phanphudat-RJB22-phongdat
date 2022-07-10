import React from 'react'
import BoxProduct1 from './Basic1/BoxProduct1'
import BoxProduct2 from './Basic2/BoxProduct2'
import BoxProduct3 from './Basic3/BoxProduct3';

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

        
    </div>
  )
}
