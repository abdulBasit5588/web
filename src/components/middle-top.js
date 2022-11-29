import { Button } from "bootstrap";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import logo from ".././assets/images/logo.png";
import "./middle-top.css";

export default function MiddleTop() {
  const [cardList, setcardList] = useState([
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/0d99bb2e-51ed-4b02-aece-fc193afe9728/Spain-v-Japan-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022-Final?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '1'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/fa52e7b6-7b87-4dfa-bea2-dc9df5892707/FIFA-President-Gianni-Infantino-visits-FCRF-Headquarters-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '2'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '3'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/0d99bb2e-51ed-4b02-aece-fc193afe9728/Spain-v-Japan-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022-Final?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '4'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/fa52e7b6-7b87-4dfa-bea2-dc9df5892707/FIFA-President-Gianni-Infantino-visits-FCRF-Headquarters-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '5'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '6'
    ],
  ]);

  const [cardList1, setcardList1] = useState([
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/0d99bb2e-51ed-4b02-aece-fc193afe9728/Spain-v-Japan-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022-Final?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '1'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/fa52e7b6-7b87-4dfa-bea2-dc9df5892707/FIFA-President-Gianni-Infantino-visits-FCRF-Headquarters-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      
      '2'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
      '3'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
    '4'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
    '5'
    ],
    [
      "FIFA Forward",
      "Matuidi Football has thepower to create a better world",
      "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
    '6'
    ],
  ]);

  const handleDelete = (id) =>{
    const newList = cardList1.filter((e) => e[3] != id);
    setcardList1(newList);
  }
  return (
    <div id="middle-top">
      <div id="middle-left">
        <h5 style={{ color: "white" }}>Football Unites The World</h5>
        <text style={{ color: "black" }}>
          Football Unites the World is a global movement to inspire. unite and
          develop through football.
        </text>

        <a>
          <h6 style={{ color: "white" }}>More From this topic</h6>
        </a>
      </div>
      <div id="middle-right">
        <div id="right-top">
          {cardList.map((e) => {
            return (
              <span id="card-container">
                <Card>
                  <Card.Body>
                    <Card.Img src={e[2]}></Card.Img>
                    <Card.Title>{e[0]}</Card.Title>
                    <Card.Text>{e[1]}</Card.Text>
                    <Card.Footer>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </span>
            );
          })}
        </div>

        <div id="right-bottom">
          {cardList1.map((e) => {
            return (
              <span id="card-container-right-bottom">
                <div id="leading">
                  <img id="list-tile-img" src={e[2]}></img>
                  <label>{e[1]}</label>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e[3])}
                  >
                    Delete
                  </button>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
