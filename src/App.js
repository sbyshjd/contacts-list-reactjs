import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { ALPHABET } from "./basicVariables";
import contactsListAPI from "./components/service/ApiService";
import NavTab from "./components/NavTab";
import ContactsList from "./components/ContactsList";

export default function App() {
  const [contactsList, setContactsList] = useState([]);
  const [contactNumberList, setContactNumberList] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(0);
  const [userSelected, setUserSelected] = useState("");

  const closeClick = () => {
    setUserSelected("");
  };

  useEffect(() => {
    contactsListAPI().then((res) => {
      //get the contacts list data from the API
      const newContactsList = res.results;
      //sort the number of each letter as the fist character of the last name
      const newContactNumberList = ALPHABET.map(
        (letter) =>
          newContactsList.filter(
            (person) => person.name.last[0].toLowerCase() === letter
          ).length
      );
      setContactsList(newContactsList);
      setContactNumberList(newContactNumberList);
    });
    //add the event listener to the whole browser window to close the UserCard if you click on the screen
    if (window) {
      window.addEventListener("click", closeClick, false);
    }
    return () => {
      //remove the event listener if the component unmounted
      window.removeEventListener("click", closeClick, false);
    };
  }, []);

  return (
    <div className="App">
      <h1 className="text-center mb-3" style={{ fontSize: "2rem" }}>
        Contacts List
      </h1>
      <NavTab
        selected={selectedLetter}
        contactNumberList={contactNumberList}
        setSelectedLetter={setSelectedLetter}
      />
      <ContactsList
        contactsList={contactsList}
        selectedLetter={selectedLetter}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        closeClick={closeClick}
      />
    </div>
  );
}
