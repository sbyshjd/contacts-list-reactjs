import React from "react";
import { ALPHABET } from "../basicVariables";
import UserCard from "./UserCard";
import '../styles/ContactsList.scss';

export default function ContactsList(props) {
  return (
    <div className="contacts-list d-flex flex-wrap justify-content-between pl-3 pr-3 pt-3 pb-5">
      {props.contactsList
        .filter(
          (person) =>
            person.name.last[0].toLowerCase() === ALPHABET[props.selectedLetter]
        )
        .map((person) => (
          <div
            className="contacts-list__item pt-3 pb-3"
            style={{ position: "relative" }}
            key={person.login.uuid}
            onClick={(e) => {
              e.stopPropagation();
              props.setUserSelected(person.login.uuid);
            }}
          >
            <div className="contacts-list__name">
              {person.name.first}, {person.name.last.toUpperCase()}
            </div>
            {/* show the detailed page or not */}
            {person.login.uuid === props.userSelected ? (
              <UserCard user={person} closeWindow={props.closeClick} />
            ) : null}
          </div>
        ))}
    </div>
  );
}
