import React, { useState, useEffect} from 'react'
import './App.css'
import ContactInfoService from './components/service/ContactInfo'
import UserCard from './components/UserCard'

//the letters array
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// the api from the /randomuser/ api
const apiService = new ContactInfoService();


export default function App () {

  const [contactsList, setContactsList] = useState([])
  const [contactNumberList, setContactNumberList] = useState([])
  const [selected, setSelected] = useState(0)
  const [userSelected, setUserSelected] = useState('')


  const closeClick = () => {
    setUserSelected('')
  }

  useEffect(() => {
    apiService.getMany()
    .then(res => {
      const newContactsList = res.results
      const newContactNumberList = alphabet.map(letter => newContactsList.filter(p => p.name.last[0].toLowerCase()===letter).length)
      setContactsList(newContactsList)
      setContactNumberList(newContactNumberList)
    })
  }, [])

    window.addEventListener('click',(e)=> {
      console.log('............',e.target.tagName)
      if(e.target.tagName==='HTML') {
        this.closeClick(e)
      }
      
    })

    return (
      <div className="App" onClick={(e) => { closeClick(e)}}>
        <div className='container-fluid'>
          <h5 className='text-center mb-3'>Contacts List</h5>
        {/* the tab nav part */}
          <div className='d-flex flex-wrap pt-1'>
            {alphabet.map((letter,i) => (<button 
                  className={selected===i ? "flex-fill letter-btn active" : "flex-fill letter-btn"} 
                  disabled={contactNumberList[i]===0} 
                  key={letter}
                  onClick={(e) => setSelected(i)}
                >
                {letter} <i className='d-none d-md-block'>{contactNumberList[i]}</i>
                </button>))}
          </div>
        {/* the contacts-list part */}
          <div className='d-flex flex-wrap justify-content-between pl-3 pr-3 pt-3 pb-5 contacts-list'>
          {contactsList
              .filter(p => p.name.last[0].toLowerCase()===alphabet[selected])
              .map(p => <div className='pt-3 pb-3 contact'
                        style={{position:'relative'}} 
                        key={p.login.uuid} 
                        onClick={(e)=> {
                          e.stopPropagation()
                          setUserSelected(p.login.uuid)
                          }}>
                        <div className='contact-name'>{p.name.first},  {p.name.last.toUpperCase()}</div>
          {/* show the detailed page or not */}
                        {p.login.uuid===userSelected ? <UserCard user={p} closeWindow={closeClick}></UserCard> : null}
                        </div>)}
          </div>
        </div>  
      </div>
    )
}
