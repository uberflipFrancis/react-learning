import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        console.log("this is the person", person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => {
                removeItem(id);
              }}
            >
              clear items
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
