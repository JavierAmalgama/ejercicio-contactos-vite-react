import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../actions";

const UserDetail = (props) => {
  const { user_id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    getSingleUser(user_id)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);
    
    console.log(user);

  return <div className="user-detail">User detail</div>;
};

export default UserDetail;
