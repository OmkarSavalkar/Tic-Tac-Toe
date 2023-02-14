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
      document.getElementById(id).disabled = true;
      let x = xArray;
      let o = oArray;
      if (value) {
        x.push(id);
        document.getElementById(id).disabled = true;
        setXArray(x);
      } else {
        o.push(id);
        document.getElementById(id).disabled = true;
        setOArray(o);
      }
      if (x.length > 2 || o.length > 2) {
        winning.forEach((item) => {
          if (
            document.getElementById(item[0]).innerHTML === "X" &&
            document.getElementById(item[1]).innerHTML === "X" &&
            document.getElementById(item[2]).innerHTML === "X"
          ) {
            document.getElementById(item[0]).style.backgroundColor = "yellow";
            document.getElementById(item[1]).style.backgroundColor = "yellow";
            document.getElementById(item[2]).style.backgroundColor = "yellow";
            setWinner("X");
          } else if (
            document.getElementById(item[0]).innerHTML === "O" &&
            document.getElementById(item[1]).innerHTML === "O" &&
            document.getElementById(item[2]).innerHTML === "O"
          ) {
            document.getElementById(item[0]).style.backgroundColor = "yellow";
            document.getElementById(item[1]).style.backgroundColor = "yellow";
            document.getElementById(item[2]).style.backgroundColor = "yellow";
            setWinner("O");
          }
        });
      }
      if (x.length + o.length === 9 && winner === "") {
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
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
          <div
            className={style["input"]}
            id={2}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
          <div
            className={style["input"]}
            id={3}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
        </div>
        <div className={style["input-row"]}>
          <div
            className={style["input"]}
            id={4}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
          <div
            className={style["input"]}
            id={5}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
          <div
            className={style["input"]}
            id={6}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
        </div>
        <div className={style["input-row"]}>
          <div
            className={style["input"]}
            id={7}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
          <div
            className={style["input"]}
            id={8}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
          <div
            className={style["input"]}
            id={9}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).innerHTML !== "X" &&
                document.getElementById(e.target.id).innerHTML !== "O"
              ) {
                setValue(!value);
                clickArea(e.target.id);
              }
            }}
          ></div>
        </div>
        <div className={style["input-row"]}>
          <div className={style["madeby"]}> ©️ Made By Omkar Savalkar</div>
        </div>

        {winner !== "" && !draw ? (
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
        {draw && winner === "" ? (
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
        <div style={{ margin: "5% 15px 5px 15px" }}>
          You probably already know how to play Tic-Tac-Toe. It's a really
          simple game, right? That's what most people think.
          <br />
          <br />
          RULES FOR TIC-TAC-TOE <br />
          <br />
          1. The game is played on a grid that's 3 squares by 3 squares. <br />
          2. You are X, your friend (or the computer in this case) is O. Players
          take turns putting their marks in empty squares.
          <br /> 3. The first player to get 3 of her marks in a row (up, down,
          across, or diagonally) is the winner.
          <br /> 4. When all 9 squares are full, the game is over. <br />
          If no player has 3 marks in a row, the game ends in a tie. <br />
          <br />
          HOW CAN I WIN AT TIC-TAC-TOE? <br />
          <br /> Part of your strategy is trying to figure out how to get three
          Xs in a row. The other part is trying to figure out how to stop the
          other player from getting three Os in a row. After you put an X in a
          square, you start looking ahead. Where's the best place for your next
          X? You look at the empty squares and decide which ones are good
          choices—which ones might let you make three Xs in a row. You also have
          to watch where the other player puts its O. That could change what you
          do next. If the player gets two Os in a row, you have to put your next
          X in the last empty square in that row, or the other player will win.
          If you always pay attention and look ahead, you'll never lose a game
          of Tic-Tac-Toe. You may not win, but at least you'll tie.
        </div>
        <div style={{ color: "yellow" }}> ©️ Made By Omkar Savalkar</div>
      </div>
    </div>
  );
};
export default Board;
