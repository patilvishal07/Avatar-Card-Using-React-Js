import React from 'react';
import './Avatar.css'
import Avatarlist from './Avatarlist';
import 'tachyons';


const Avatar = (props) => {

    const avatarlistarray = [
        {
            id:1,
            name:'Vishal',
            work:'Full Stack developer'
        },
        {
            id:2,
            name:'Patil',
            work:'Front-end developer'
        },
        {
            id:3,
            name:'Vicky',
            work:'Data base'
        },
        {
            id:4,
            name:'Patil',
            work:'Bakend Developer'
        }
    ]

    const arrayavatarcard =  avatarlistarray.map( (avatarcard, i) => {
        return <Avatarlist id={avatarlistarray[i].name} 
        name={avatarlistarray[i].name} 
        work={avatarlistarray[i].work}/>


    })

    return ( 
        <div className='mainpage'>
            <h1>Welcome To Avatar World</h1>
            {arrayavatarcard}
           <button>Subscribe</button></div>
        ) 
         
}

// return(
//     <div className='mainpage'>
//         <h1>{this.state.name}</h1>
//         {arrayavatarcard}
//         <button onClick={ () => this.namechange }>Subscribe</button>
//     </div>


export default Avatar;