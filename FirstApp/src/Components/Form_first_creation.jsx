import { useState } from "react";
import "./Form_first.css";

function Form_first() {
  let [Data, SetData] = useState("");
  let [flag, SetFlag] = useState(true);
  let [Arr_Data, SetArr_Data] = useState([]);
  let [Ind, SetArr_Ind] = useState(-1);

  let Add = () => {
    if (Data.length === 0) {
      alert("Enter Data");
      return;
    }
    SetArr_Data([...Arr_Data, Data]);
    SetData("");
  };

  let Edit = (ind) => {
    SetFlag(false);
    SetArr_Ind(ind);
    SetData(Arr_Data[ind]);
  };

  let Upd = () => {
    Arr_Data[Ind] = Data;
    SetArr_Data([...Arr_Data]);
    SetData("");
    SetFlag(true);
  };

  let Del = (ind) => {
    Arr_Data.splice(ind, 1);
    SetArr_Data([...Arr_Data]);
  };

  return (
    <>
      <div className="todo-container">
        <h2 className="todo-title">My Todo List</h2>

        <div className="todo-input-box">
          <input
            type="text"
            placeholder="Enter the text"
            onChange={(e) => SetData(e.target.value)}
            value={Data}
            className="todo-input"
          />

          <button
            onClick={flag ? Add : Upd}
            className={`todo-btn ${flag ? "add-btn" : "update-btn"}`}
          >
            {flag ? "Add" : "Update"}
          </button>
        </div>

        <ul className="todo-list">
          {Arr_Data.map((item, ind) => {
            return (
              <li className="todo-item" key={ind}>
                <span>{item}</span>

                <div className="todo-actions">
                  <button className="edit-btn" onClick={() => Edit(ind)}>Edit</button>
                  <button className="delete-btn" onClick={() => Del(ind)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Form_first;
