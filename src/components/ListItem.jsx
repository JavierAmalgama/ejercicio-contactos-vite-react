import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <li className="list-item">
      <p className="list-item__name">
        <img src={props.imgSrc} alt={props.name} className="image" />
        <span className="name">{props.name}</span>
      </p>
      <p className="list-item__number">
        <span className="number">{props.number}</span>
      </p>
      <p className="list-item__email">
        <span className="email">{props.email}</span>
      </p>
      <p className="list-item__village">
        <span className="village">{props.village}</span>
      </p>
      <Link to={props.link}>
        <EyeOutlined />
      </Link>
    </li>
  );
};

export default ListItem;
