import React from 'react'
import { ALPHABET } from "../basicVariables"
import '../styles/NavTab.scss'

export default function NavTab(props) {
    return (
        <div className="nav d-flex flex-wrap pt-1">
        {ALPHABET.map((letter, i) => (
          <button
            className={
              props.selectedLetter === i
                ? "nav__btn nav__btn--active flex-fill"
                : "nav__btn flex-fill"
            }
            disabled={props.contactNumberList[i] === 0}
            key={letter}
            onClick={(e) => {
              e.stopPropagation();
              props.setSelectedLetter(i);
            }}
          >
            {letter}{" "}
            <i className="nav__num d-none d-md-block">{props.contactNumberList[i]}</i>
          </button>
        ))}
      </div>
    )
}
