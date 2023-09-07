import React from "react";
import an_bread from "../img/an_bread.jpg";
import bagel_sand from "../img/bagel_sand.jpg";
import bagel_sand2 from "../img/bagel_sand2.jpg";
import bagel_sand3 from "../img/bagel_sand3.jpg";
import bagel from "../img/bagel.jpg";
import bagel2 from "../img/bagel2.jpg";
import baguette from "../img/baguette.jpg";
import chabata from "../img/chabata.jpg";
import sandwich from "../img/sandwich.jpg";
import sandwich2 from "../img/sandwich2.jpg";
import sandwich3 from "../img/sandwich3.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <div className="container">
      <ul className="mene-ul">
        <li className="menu-img">
          <img src={bagel_sand} alt="" />
          <p>ベーグルサンド</p>
          <p>140円</p>
        </li>
        <li className="menu-img">
          <img src={bagel_sand2} alt="" />
          <p>ベーグルサンド</p>
          <p>160円</p>
        </li>
        <li className="menu-img">
          <img src={bagel_sand3} alt="" />
          <p>ベーグルサンド</p>
          <p>150円</p>
        </li>
        <li className="menu-img">
          <img src={baguette} alt="" />
          <p>バゲット</p>
          <p>120円</p>
        </li>
        <li className="menu-img">
          <img src={chabata} alt="" />
          <p>チャバタ</p>
          <p>120円</p>
        </li>
        <li className="menu-img">
          <img src={bagel} alt="" />
          <p>ベーグル</p>
          <p>130円</p>
        </li>
        <li className="menu-img">
          <img src={bagel2} alt="" />
          <p>ベーグル</p>
          <p>120円</p>
        </li>
        <li className="menu-img">
          <img src={sandwich} alt="" />
          <p>サンドウィッチ</p>
          <p>180円</p>
        </li>
        <li className="menu-img">
          <img src={sandwich2} alt="" />
          <p>サンドウィッチ</p>
          <p>170円</p>
        </li>
        <li className="menu-img">
          <img src={sandwich3} alt="" />
          <p>サンドウィッチ</p>
          <p>200円</p>
        </li>
        <li className="menu-img">
          <img src={an_bread} alt="" />
          <p>あんぱん</p>
          <p>140円</p>
        </li>
      </ul>
      <Link to="/reserve">
        <div className="d-grid gap-2 col-6 mx-auto">
          <Button className="primary mb-3" type="submit">
            注文をご希望の場合はこちらへ
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default MenuPage;
