import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { RiVipCrown2Fill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { useHistory } from "react-router-dom";

import "./Style/Stlyle.css";

function Footer() {
    const history = useHistory();

  return (
    <div className="app__footer">
      <div className="footer__menu" onClick={()=> history.push("/")}>
        <AiTwotoneHome color="#555" size={20} />
        <span>Home</span>
      </div>
      <div className="footer__menu" onClick={()=> history.push("/tasks")}>
        <BiTask color="#555" size={20} />
        <span>Tasks</span>
      </div>
      <div className="footer__menu" onClick={()=> history.push("/vip")}>
        <RiVipCrown2Fill color="#555" size={20} />
        <span>VIP</span>
      </div>
      <div className="footer__menu" onClick={()=> history.push("/team")}>
        <RiTeamFill color="#555" size={20} />
        <span>Team</span>
      </div>
      <div className="footer__menu" onClick={()=> history.push("/home")}>
        <VscAccount color="#555" size={20} />
        <span>Account</span>
      </div>
    </div>
  );
}

export default Footer;
