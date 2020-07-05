import React from 'react'
import styled from 'styled-components'
import '../App.css'

// style the custom input field and button 
const Input = styled.input`
    height:${props => props.button ? "40px" : "20px"};
    width:${props => props.button ? "60%" : "default"};
    border-radius: 10px;
    background: ${props => props.button ? "palevioletred" : "white"};
    padding:10px;
    margin-right:20px;
    margin-top:${props => props.button ? "20px" : "0px"};
`;

const GridLayout = () =>{
   
    return (
        <React.Fragment>
        <div className="container">
            <div className="first">
                <p>First Grid is Good</p>
            </div>
            <div className="second">
                <p>second Grid is Good</p>
            </div>
            <div className="third">
                <div>
                    <label> Amount</label><br/>
                    <Input type="text" placeholder="Enter Amount"></Input>
                </div>
                <div>
                    <label> From</label><br/>  
                    <Input type="text" placeholder="From Currency"></Input>
                </div>
                <div>
                    <label> To</label><br/>  
                    <Input type="text" placeholder="To Currency"></Input>
                </div>
                <div>
                     
                    <Input type="submit" placeholder="Submit" button></Input>
                </div>
            </div>
            <div className="fourth">
                <p>fourth Grid is Good</p>
            </div>
            <div className="fifth">
                <p>fifth Grid is Good</p>
            </div>
        </div>
            
        </React.Fragment>
    )
}

export default GridLayout
