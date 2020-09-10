import React, { Component } from 'react'
import './App.css'
import ContactInfoService from './components/service/ContactInfo'
import UserCard from './components/UserCard'


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      contactsList:[],
      alphabet,
      contactNumberList:[],
      selected:0,
      userSelected:0
    }
    this.service = new ContactInfoService()
  }

  btnClick = i => {
    console.log(i)
    this.setState({
      selected:i
    })
  }

  closeClick = () => {
    this.setState({
      userSelected:0
    })
  }

  componentDidMount() {
    this.service.getMany()
    .then(res => {
      let contactsList = res.results
      let contactNumberList = alphabet.map(letter => contactsList.filter(p => p.name.last[0].toLowerCase()===letter).length) 
      this.setState({
        contactsList,
        contactNumberList,
        selected:0
      })
    })
  }
  render() {

    return (
      <div className="App">
      <div className='container-fluid'>
      <h5 className='text-center'>Contacts List</h5>
      {/* the tab nav part */}
        <div className='d-flex flex-wrap pt-1'>
        {this.state.alphabet.map((letter,i) => (<button 
            className={this.state.selected===i ? "flex-fill letter-btn active" : "flex-fill letter-btn"} 
            disabled={this.state.contactNumberList[i]===0} 
            key={letter}
            onClick={(e) => this.btnClick(i)}
            >
              {letter}<i>{this.state.contactNumberList[i]}</i>
            </button>))}
        </div>
      {/* the contacts-list part */}
        <div className='d-flex flex-wrap justify-content-between pl-3 pr-3 pt-3 pb-5 contacts-list'>
        {this.state.contactsList
            .filter(p => p.name.last[0].toLowerCase()===this.state.alphabet[this.state.selected])
            .map(p => <div className='pt-4 pb-4 contact'
                      style={{position:'relative'}} 
                      key={p.login.uuid} 
                      onClick={(e)=> this.setState({userSelected:p.login.uuid})}>
                      {p.name.first},  {p.name.last.toUpperCase()}
        {/* show the detailed page or not */}
                      {p.login.uuid===this.state.userSelected ? <UserCard user={p} closeWindow={this.closeClick}></UserCard> : null}
                      </div>)}
        </div>
      </div>  
      </div>
    )
  }
}
