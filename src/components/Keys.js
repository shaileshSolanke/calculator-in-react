import React, { useContext } from "react";
import { keyContext } from "../App";
import styles from "../styles/Keys.module.css"

export const Keys = ({handleClick}) => {
  const keyData = useContext(keyContext);

  return (
    <React.Fragment>
      <div className={styles.keys}>
        {keyData.map((key, index) => (
          <button className={styles.key} key={index} onClick={() => handleClick(key)}>
            {key}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};
