import React from 'react'
import  { useState } from "react";

import { Card } from "react-bootstrap";
import './left-sidebar.css'



export default function LeftSidebar() {


const [cardList, setcardList] = useState([
  [
    "FIFA Forward",
    "Matuidi Football has thepower to create a better world",
    "https://digitalhub.fifa.com/transform/0d99bb2e-51ed-4b02-aece-fc193afe9728/Spain-v-Japan-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022-Final?io=transform:fill,aspectratio:4x3,width:471&quality=100",
  ],
  [
    "FIFA Forward",
    "Matuidi Football has thepower to create a better world",
    "https://digitalhub.fifa.com/transform/fa52e7b6-7b87-4dfa-bea2-dc9df5892707/FIFA-President-Gianni-Infantino-visits-FCRF-Headquarters-FIFA-U-20-Women-s-World-Cup-Costa-Rica-2022?io=transform:fill,aspectratio:4x3,width:471&quality=100",
  ],
  [
    "FIFA Forward",
    "Matuidi Football has thepower to create a better world",
    "https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:4x3,width:471&quality=100",
  ],
]);


  return (
    <div>
      {cardList.map((e) => {
        return (
          <span id="card-container">
            <Card>
              <Card.Body>
                <Card.Img src={e[2]}></Card.Img>
                <Card.Title>{e[0]}</Card.Title>
                <Card.Text>{e[1]}</Card.Text>
              </Card.Body>
            </Card>
          </span>
        );
      })}
    </div>
  );
}
