import React from "react";
import "../styles/UserCard.scss";
import { VscChromeClose } from "react-icons/vsc";

export default function UserCard(props) {
  return (
    <div
      className="user-card d-md-flex align-items-start"
      style={{ position: "absolute", zIndex: 10 }}
    >
      <button
        className="user-card__button d-block"
        onClick={(e) => {
          e.stopPropagation();
          props.closeWindow();
        }}
      >
        <VscChromeClose />
      </button>
      <img className="user-card__img" src={props.user.picture.large} alt="profile"></img>
      <div className="user-card__info">
        <h2 className="user-card__info__name">
          {props.user.name.last.toUpperCase()},{" "}
          {props.user.name.first.toLowerCase()}
        </h2>
        <div className="d-flex">
          <div className="mr-3">
            <p className="user-card__info__detail">
              <strong>e mail</strong>
            </p>
            <p className="user-card__info__detail">
              <strong>phone</strong>
            </p>
            <p className="user-card__info__detail">
              <strong>street</strong>
            </p>
            <p className="user-card__info__detail">
              <strong>state</strong>
            </p>
            <p className="user-card__info__detail">
              <strong>postcode</strong>
            </p>
          </div>
          <div>
            <p className="user-card__info__detail">{props.user.email}</p>
            <p className="user-card__info__detail">{props.user.phone}</p>
            <p className="user-card__info__detail">
              {props.user.location.street.name}{" "}
              {props.user.location.street.number}
            </p>
            <p className="user-card__info__detail">{props.user.location.state}</p>
            <p className="user-card__info__detail">{props.user.location.postcode}</p>
          </div>
        </div>
      </div>
      <p
        className="user-card__vertical-rl"
        style={{ position: "absolute", top: "-10px", right: "0px" }}
      >
        <strong>USRNAME</strong> {props.user.login.username}
      </p>
    </div>
  );
}
