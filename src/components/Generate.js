import React from "react";
import "../App.css"
import { fake } from "../api/Fakedata";
import { useDispatch } from "react-redux";
import { add, clearAll } from "../store/slices/UserSlice";

function Generate() {
  const dispatch = useDispatch();
  const AddUser = (payload) => {
    dispatch(add(payload));
  };
  const DelAllUser = (payload) => {
    payload.preventDefault();
    dispatch(clearAll(payload));
  };
  return (
    <div>
      <button className="btn" onClick={() => AddUser(fake())}>
        Add data
      </button>
      <button className="btn" onClick={DelAllUser}>
        Remove All
      </button>
    </div>
  );
}

export default Generate;
