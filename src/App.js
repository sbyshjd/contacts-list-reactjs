import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { alphabet } from "./basicVariables";
import contactsListAPI from "./components/service/ApiService";
import UserCard from "./components/UserCard";

export default function App() {
  const [contactsList, setContactsList] = useState([]);
  const [contactNumberList, setContactNumberList] = useState([]);
  const [selected, setSelected] = useState(0);
  const [userSelected, setUserSelected] = useState("");

  const closeClick = () => {
    setUserSelected("");
  };

  useEffect(() => {
    contactsListAPI().then((res) => {
      const newContactsList = res.results;
      const newContactNumberList = alphabet.map(
        letter =>newContactsList.filter((p) => p.name.last[0].toLowerCase() === letter).length
      );
      setContactsList(newContactsList);
      setContactNumberList(newContactNumberList);
    });
    if(window) {
      window.addEventListener("click", closeClick,false);
    }
    return () => {
      window.addEventListener("click", closeClick,false);
    }
  }, []);

  

  // window.removeEventListener('click',(e) => {
  //   // e.stopPropagation()
  //   closeClick()
  //   console.log(e.target)
  //   // console.log(e.currentTarget)
  // },false)

  return (
    
    <div className="App">
      <h1 className="text-center mb-3" style={{ fontSize: "2rem" }}>
        Contacts List
      </h1>
      {/* the tab nav part */}
      <div className="nav d-flex flex-wrap pt-1">
        {alphabet.map((letter, i) => (
          <button
            className={
              selected === i
                ? "nav__btn nav__btn--active flex-fill"
                : "nav__btn flex-fill"
            }
            disabled={contactNumberList[i] === 0}
            key={letter}
            onClick={(e) => {
              e.stopPropagation()
              setSelected(i)}}
          >
            {letter}{" "}
            <i className="nav__num d-none d-md-block">{contactNumberList[i]}</i>
          </button>
        ))}
      </div>
      {/* the contacts-list part */}
      <div className="contacts-list d-flex flex-wrap justify-content-between pl-3 pr-3 pt-3 pb-5">
        {contactsList
          .filter((p) => p.name.last[0].toLowerCase() === alphabet[selected])
          .map((p) => (
            <div
              className="contacts-list__item pt-3 pb-3"
              style={{ position: "relative" }}
              key={p.login.uuid}
              onClick={(e) => {
                e.stopPropagation();
                setUserSelected(p.login.uuid);
              }}
            >
              <div className="contacts-list__name">
                {p.name.first}, {p.name.last.toUpperCase()}
              </div>
              {/* show the detailed page or not */}
              {p.login.uuid === userSelected ? (
                <UserCard user={p} closeWindow={closeClick} />
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
}
