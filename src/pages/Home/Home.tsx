import React from "react";
import "./Home.css";
import usdt from "../../assets/usdt.jpg";
import persone from "../../assets/personel.png";
import recharge from "../../assets/recharge.png";
import desist from "../../assets/desist.png";
import invest from "../../assets/invest.png";
import retrait from "../../assets/retrait.png";
import detaill from "../../assets/details.png";
import logout from "../../assets/logout.png";
import vip from "../../assets/vip.png";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <div>
      <div className="header__dashbord">
        <div className="header__top">
          <div className="header__left">
            <span className="user__"> user_6rA254135 | 653306</span>
          </div>
          <div className="header__right"></div>
        </div>
        <div className="header__bottom">
          <div className="group_vip">
            <img src={vip} alt="vip" width={60} />
            <div className="vip">
              <div className="vip__background"> VIP 1</div>
              <div className="vip__number">21696223086</div>
            </div>
          </div>
          <div>
            <span> Solde(TND)</span>
            <span> 72.00</span>
          </div>
          <div>
            <span> Solde(USDT)</span>
            <span> 22.29</span>
          </div>
        </div>
      </div>
      <div className="global__dashboard">
        <div className="dashboard__section __blue">
          <span className="dashboard__text">Todays Earnings(TND)</span>
          <span className="dashobard__amount">18.00</span>
        </div>
        <div className="dashboard__section __violet">
          <span className="dashboard__text">Yesterday Earnings(TND)</span>
          <span className="dashobard__amount">18.00</span>
        </div>
        <div className="dashboard__section __orange">
          <span className="dashboard__text">Earnings of this month(TND)</span>
          <span className="dashobard__amount">90.00</span>
        </div>

        <div className="dashboard__section __blue">
          <span className="dashboard__text">Total income(TND)</span>
          <span className="dashobard__amount">0</span>
        </div>
        <div className="dashboard__section __violet">
          <span className="dashboard__text">Last month income(TND)</span>
          <span className="dashobard__amount">90.00</span>
        </div>
        <div className="dashboard__section __orange">
          <span className="dashboard__text">Complete task today</span>
          <span className="dashobard__amount">6/6</span>
        </div>
      </div>
      <div className="dashbord__white" >
        <div className="photo__" onClick={()=> history.push("/profile")}>
          <img src={persone} width={30} alt="usdt" />
          <span className="text__dashboard"> Renseignements Personel</span>
        </div>

        <div className="photo__" onClick={() => history.push("/Recharge")}>
          <img src={recharge} width={30} alt="usdt" />
          <span className="text__dashboard">Recharger</span>
        </div>

        <div className="photo__" onClick={() => history.push("/Withdraw")}>
          <img src={desist} width={30} alt="usdt" />
          <span className="text__dashboard"> Se desister</span>
        </div>

        <div className="photo__">
          <img src={invest} width={30} alt="usdt" />
          <span className="text__dashboard"> Investissement</span>
        </div>

        <div className="photo__" onClick={() => history.push("/Address")}>
          <img src={usdt} width={30} alt="usdt" />
          <span className="text__dashboard"> Adresse USDT</span>
        </div>

        <div className="photo__" onClick={() => history.push("/Retrait")} >
          <img src={retrait} width={30} alt="usdt" />
          <span className="text__dashboard">
            Recharge et releve de retrait
          </span>
        </div>

        <div className="photo__">
          <img src={detaill} width={30} alt="usdt" />
          <span className="text__dashboard"> Details fu financement</span>
        </div>

        <div className="photo__">
          <img src={logout} width={30} alt="usdt" />
          <span className="text__dashboard"> Quitter la connexion</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
