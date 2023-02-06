import React, { useState } from "react";
import style from "../board/index.module.css";
import resetImage from "../board/reset.png";

const Board = () => {
  const winning = ["123", "456", "789", "159", "357", "147", "258", "369"];
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);
  const [value, setValue] = useState(true);
  const [xArray, setXArray] = useState([]);
  const [oArray, setOArray] = useState([]);

  const clickArea = (id) => {
    if (winner === "") {
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
        winning.forEach((item) => {
          if (x.join("").includes(item)) {
            document.getElementById(item[0]).style.backgroundColor = "yellow";
            document.getElementById(item[1]).style.backgroundColor = "yellow";
            document.getElementById(item[2]).style.backgroundColor = "yellow";
            setWinner("X");
          } else if (o.join("").includes(item)) {
            document.getElementById(item[0]).style.backgroundColor = "yellow";
            document.getElementById(item[1]).style.backgroundColor = "yellow";
            document.getElementById(item[2]).style.backgroundColor = "yellow";
            setWinner("O");
          }
        });
      }
      if (x.length + o.length >= 8) {
        setDraw(true);
      }
    }
  };

  const handleReset = () => {
    setWinner("");
    setDraw(false);
    setValue(true);
    setXArray([]);
    setOArray([]);
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i).innerHTML = "";
      document.getElementById(i).style.backgroundColor = "rgb(234, 243, 252)";
    }
  };

  const handleInfo = () => {
    document.getElementById("info").style.display === "block"
      ? (document.getElementById("info").style.display = "none")
      : (document.getElementById("info").style.display = "block");
  };

  return (
    <div className={style["screen-main"]} style={{ width: "100%" }}>
      <div className={style["main-div"]}>
        {winner === "" && draw === false ? (
          <>
            <img
              src={resetImage}
              alt="reset logo"
              style={{ width: "50px" }}
              className={style["reset-buttonTop"]}
              onClick={handleReset}
            />
            <br />
            <h2 className={style["h-color"]}>
              <span className={style["player-turn"]}>{value ? "X" : "O"}</span>{" "}
              Player's turn now!
            </h2>
          </>
        ) : (
          <></>
        )}
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
        {winner !== "" ? (
          <>
            <h2 className={style["w-color"]}>
              <span className={style["player-win"]}>{winner}</span> Wins the
              Battle !
            </h2>
            <img
              src={resetImage}
              alt="reset logo"
              style={{ width: "50px" }}
              className={style["reset-buttonBottom"]}
              onClick={handleReset}
            />
          </>
        ) : (
          <></>
        )}
        {draw ? (
          <>
            <h2 style={{ color: "orange" }}>
              <span style={{ color: "red" }}>Draw !</span> Both Played Well !
            </h2>
            <img
              src={resetImage}
              alt="reset logo"
              style={{ width: "50px" }}
              className={style["reset-buttonBottom"]}
              onClick={handleReset}
            />
          </>
        ) : (
          <></>
        )}
        <img
          src="https://cdn-icons-png.flaticon.com/512/6348/6348248.png"
          alt="user guide"
          width={50}
          title={"This is Game of "}
          style={{
            float: "right",
            marginTop: "-50%",
            marginRight: "-15%",
            cursor: "pointer",
          }}
          onClick={handleInfo}
        />
      </div>
      <div id={"info"} className={style["instruction-div"]}>
        njjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      </div>
    </div>
  );
};
export default Board;
