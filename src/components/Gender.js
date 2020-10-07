import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import "../styles/Style.css"

export default function Gender(gender) {
  let isMale = false;
  if (gender.gender === "male") {
    isMale = true;
  }
  return (
<>
      { isMale
        ? <FontAwesomeIcon icon={faMale} className="male" />
        : <FontAwesomeIcon icon={faFemale} className="female" />
      }
   </>
  )
}