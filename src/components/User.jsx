import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div className="w-full flex items-center justify-center">User: {id}</div>;
}

export default User;
