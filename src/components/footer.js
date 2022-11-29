import React, { useState } from "react";
import "./footer.css";
import logo from ".././assets/images/logo.png";

export default function Footer() {
  const [partners, setPartners] = useState([
    "https://digitalhub.fifa.com/transform/f8b15d10-2085-44dd-9874-82222d941b6b/Vector-Adidas-new-logo?io=transform:fill,height:57,width:114",
    "https://cloudinary.fifa.com/m/7b71c2f3185bddfb/original/fwc2022_fp_cocacola-co_lbgr.eps?tx=c_fill,x_57,y_28,g_xy_center,q_auto,w_114,h_57",
    "https://cloudinary.fifa.com/m/7ecf457666d9fb6c/original/fwc2022_fp_dalian-wanda-co_lbgr.eps?tx=c_fill,x_57,y_28,g_xy_center,q_auto,w_114,h_57",
    "https://cloudinary.fifa.com/m/6954f7d3fd116343/webimage-fwc2022_fp_hyundai-kia-co_lbgr.png?tx=c_fill,g_auto,q_auto,w_114,h_57",
    "https://cloudinary.fifa.com/m/6d3a4cc8e08eeb0f/webimage-fwc2022_fp_qatar-co_lbgr.png?tx=c_fill,g_auto,q_auto,w_114,h_57",
    "https://digitalhub.fifa.com/transform/aebad5a8-a4ff-467a-81d2-ab34c4843fbe/Vector-Qatar-Energy-logo?io=transform:fill,height:57,width:114",
    "https://digitalhub.fifa.com/transform/fdae2bc1-3678-4471-955d-20e4870b924f/visa_94x71?io=transform:fill,height:71,width:94",
  ]);

  return (
    <div id="footer-container">
      <div>
        <h4>FIFA PARTNERS</h4>
        <div id="fifa-partners-container">
          {partners.map((partner) => {
            return (
              <span id="fifa-partners">
                <img id="fifa-partner-img" src={partner}></img>
              </span>
            );
          })}
        </div>
      </div>

      <div id="fifa-explore">
        <img id="logo" src={logo} />
        <h5>Explore</h5>
        <text>Competitions</text>
        <text>About FIFA</text>
        <text>Women's football</text>
        <text>Social impact</text>
        <text>Football Development</text>
        <text>Technical</text>
        <text>Legal And Complience</text>
      </div>
      <div id="fifa-terms">
        <div>
          <text>Terms of Service</text>
          <text>Data protection portal</text>
          <text>Downloads</text>
          <text>Cookie Settings</text>
        </div>
        <div>
            <label>
                Copyright 1994 - 2022 FIFA. All rights reserved
            </label>
        </div>
      </div>
    </div>
  );
}
