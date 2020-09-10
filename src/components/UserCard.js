import React, { Component } from 'react'
import './UserCard.css'
import { VscChromeClose } from "react-icons/vsc"

export default class UserCard extends Component {

    render() {
        return (
            <div className='user-card d-flex align-items-start' style={{position:'absolute',zIndex:10}}>
                <div className='user-card-img'>
                    <button className='d-block'
                    onClick={(e) => { 
                        e.stopPropagation()
                    this.props.closeWindow(e)}}>
                    <VscChromeClose/>
                    </button>
                    <img src={this.props.user.picture.large} alt='profile'></img>
                </div>   
                <div className='user-card-info'> 
                    <h2>{this.props.user.name.last.toUpperCase()}, {this.props.user.name.first}</h2>
                    <div className='d-flex'>
                        <div className='mr-3'>
                        <p><strong>e mail</strong></p> 
                        <p><strong>phone</strong></p> 
                        <p><strong>street</strong></p> 
                        <p><strong>state</strong></p> 
                        <p><strong>postcode</strong></p> 
                        </div>
                        <div>
                        <p>{this.props.user.email}</p> 
                        <p>{this.props.user.phone}</p> 
                        <p>{this.props.user.location.street.name} {this.props.user.location.street.number}</p> 
                        <p>{this.props.user.location.state}</p> 
                        <p>{this.props.user.location.postcode}</p> 
                        </div>
                    </div>     
                </div>
            <p className='vertical-rl' style={{position:'absolute',top:'-10px',right:'0px'}}><strong>USRNAME</strong> {this.props.user.login.username}</p>
                
            </div>
        )
    }
}
