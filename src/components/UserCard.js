import React, { Component } from 'react'

export default class UserCard extends Component {

    render() {
        return (
            <div style={{position:'absolute',zIndex:10}}>
                {this.props.user.email}
                <button onClick={(e) => { 
                    e.stopPropagation()
                this.props.closeWindow(e)}}>X</button>
            </div>
        )
    }
}
