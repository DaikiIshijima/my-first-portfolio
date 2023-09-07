import React from "react";
import bs from "../img/bread_store.jpg";
import bagel_sand3 from "../img/bagel_sand3.jpg";
import baguette from "../img/baguette.jpg";
import sandwich from "../img/sandwich.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BodyPage = () => {
  return (
    <div className="container text-center">
      <h2 className="fs-2 my-3">パンでみんなを笑顔に！</h2>
      <img src={bs} alt="bs" />
      <h2 className="fs-2 my-2">&lt; 当店のパンについて &gt;</h2>
      <p>ハード系パンを中心に取扱っています。</p>
      <p>
        甘い系や総菜系のパンもございますので、老若男女問わずお気軽にお越しください！
      </p>
      <h3 className="fs-3 my-2">&lt; 当店のパンをいくつか紹介します &gt;</h3>
      <ul className="d-flex justify-content-around">
        <li className="px-1">
          <img src={bagel_sand3} alt="bagel_sand3" />
        </li>
        <li className="px-1">
          <img src={baguette} alt="baguette" />
        </li>
        <li className="px-1">
          <img src={sandwich} alt="sandwich3" />
        </li>
      </ul>
      <Link to="/menu">
        <div className="d-grid gap-2 col-6 mx-auto mt-3">
          <Button className="primary mb-3" type="submit">
            更にメニューを見たい方はこちらへ
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default BodyPage;
