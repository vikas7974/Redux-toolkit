import React from "react";
import "./Display.css"
import { remove } from "../store/slices/UserSlice";

import { useSelector, useDispatch } from "react-redux";

function Display() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.poo;
  });
  const deleteUser = (payload) => {
    dispatch(remove(payload));
  };

  return (
    <div className="displaydata">
      {data.map((user, id) => {
        return (
          <div key={id} className="entry"> 
            <li>{user}</li>
            <button className="bt"
              onClick={() => {
                deleteUser(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
