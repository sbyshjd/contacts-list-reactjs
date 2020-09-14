import React from 'react'
import './UserCard.css'
import { VscChromeClose } from "react-icons/vsc"


export default function UserCard(props) {
    return (
        <div className='user-card d-md-flex align-items-start' style={{position:'absolute',zIndex:10}}
            onClick={(e)=> {}}
            >
                <div className='user-card-img'>
                    <button className='d-block'
                    onClick={(e) => { 
                        e.stopPropagation()
                        props.closeWindow(e)}}>
                    <VscChromeClose/>
                    </button>
                    <img src={props.user.picture.large} alt='profile'></img>
                </div>   
                <div className='user-card-info'> 
                    <h2>{props.user.name.last.toUpperCase()}, {props.user.name.first.toLowerCase()}</h2>
                    <div className='d-flex'>
                        <div className='mr-3'>
                        <p><strong>e mail</strong></p> 
                        <p><strong>phone</strong></p> 
                        <p><strong>street</strong></p> 
                        <p><strong>state</strong></p> 
                        <p><strong>postcode</strong></p> 
                        </div>
                        <div>
                        <p>{props.user.email}</p> 
                        <p>{props.user.phone}</p> 
                        <p>{props.user.location.street.name} {props.user.location.street.number}</p> 
                        <p>{props.user.location.state}</p> 
                        <p>{props.user.location.postcode}</p> 
                        </div>
                    </div>     
                </div>
            <p className='vertical-rl' style={{position:'absolute',top:'-10px',right:'0px'}}><strong>USRNAME</strong> {props.user.login.username}</p>
                
            </div>
    )
}

