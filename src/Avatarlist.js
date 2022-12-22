import React from 'react';

const Avatarlist = (props) => {
    return(
        <div className='avatarstyle ma4 bg-light-purple dib pa3 grow shadow-5 tc '> 
            <img src='/assets/download.jpg' alt="Avatar"/>
            <h1 > {props.name} </h1>
            <p> {props.work}</p>
           </div>
    )

}

export default Avatarlist;