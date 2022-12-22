import React,{Component} from 'react';
// import ReactDom from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {
    return <div className="maindiv_style">
            <h1>Hello {name}</h1>
            <p> welcome to the world :)</p>
        </div> 
}

export default Demo;