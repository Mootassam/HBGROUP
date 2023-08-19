import React from "react";
import "./Dashboard.css";
import recharge from "../../assets/recharge.png";

function Dashboard() {
  return (
    <div className="app__dashboard">
      <div className="header">
        <div className="header__title"> HB GROUP </div>
        <div> Functions tranlate </div>
      </div>
      <div className="dashboard__top">
        <div className="top__ads">
          <img src="/ads.png" alt="" />
        </div>
        <div className="top__detail">
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>Company profile</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>Description of the pay system</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>educational video</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>the lottery</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>recharge</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>Retreat</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>Investment</span>
          </div>
          <div>
            <img src={recharge} width={30} alt="usdt" />
            <span>FAQ</span>
          </div>
        </div>
      </div>

      <div className="sall__task">
        <span className="title__task">Salles des taches</span>
        <div className="task__hall">
          <div className="app__amazon">
            <img src="/amazon.png" alt="" width={90} />
          </div>
          <div className="app__amazon">
            <img src="/Netflix.svg" alt="" width={90} />
          </div>
          <div className="app__amazon">
            <img src="/takealot.png" alt="" width={90} />
          </div>
          <div className="app__amazon">
            <img src="/amazon.png" alt="" width={90} />
          </div>
        </div>
      </div>

      <div className="task__products">
        <div className="product__vip">
          <div className="task__vip">VIP 1</div>
          <img src="porducts/image.jpg" alt="" />
          <h3> Title of the product</h3>
          <span> Price of the task</span>
        </div>
        <div className="product__vip">
          <div className="task__vip">VIP 0</div>
          <img src="porducts/iphone.png" alt="" />
          <h3> Title of the product</h3>
          <span> Price of the task</span>
        </div>
        <div className="product__vip">
          <div className="task__vip">VIP 3</div>
          <img src="porducts/frizor.png" alt="" />
          <h3> Title of the product</h3>
          <span> Price of the task</span>
        </div>
        <div className="product__vip">
          <div className="task__vip">VIP 4</div>
          <img src="porducts/tv.jpg" alt="" />
          <h3> Title of the product</h3>
          <span> Price of the task</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
