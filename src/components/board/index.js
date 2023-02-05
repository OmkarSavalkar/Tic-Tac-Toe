import React, { useEffect, useState } from "react";
import style from "../board/index.module.css";

const Board = () => {
  const winning = ["123", "456", "789", "159", "357", "147", "258", "369"];
  const [value, setValue] = useState(true);
  const [xArray, setXArray] = useState([]);
  const [oArray, setOArray] = useState([]);

  const clickArea = (id) => {
    document.getElementById(id).innerHTML = value ? "X" : "O";
    let x = xArray;
    let o = oArray;
    if (value) {
      x.push(id);
      setXArray(x);
    } else {
      o.push(id);
      setOArray(o);
    }
    if (x.length > 2 || o.length > 2) {
      console.log("greater");
      winning.forEach((item) => {
        if (x.join("").includes(item)) {
          console.log("win X");
        } else if (o.join("").includes(item)) {
          console.log("win O");
        }
      });
    }
  };

  return (
    <div className={style["main-div"]}>
      <div className={style["input-row"]}>
        <div
          className={style["input"]}
          id={1}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
        <div
          className={style["input"]}
          id={2}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
        <div
          className={style["input"]}
          id={3}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
      </div>
      <div className={style["input-row"]}>
        <div
          className={style["input"]}
          id={4}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
        <div
          className={style["input"]}
          id={5}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
        <div
          className={style["input"]}
          id={6}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
      </div>
      <div className={style["input-row"]}>
        <div
          className={style["input"]}
          id={7}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
        <div
          className={style["input"]}
          id={8}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
        <div
          className={style["input"]}
          id={9}
          onClick={(e) => {
            setValue(!value);
            clickArea(e.target.id);
          }}
        ></div>
      </div>
    </div>
  );
};
export default Board;
