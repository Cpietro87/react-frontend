import React from "react";

function Item({ isCheck, name }) {
  return (
      <li className="item"> 
        {isCheck ? name + ' ✅' : name + '❌'}
      </li>
    );
}

const Conditonal = () => {
  return (
    <>
      <h1>Lista de tareas</h1>
      <ul>
        <Item isCheck={true} name="Tarea 1" />
        <Item isCheck={false} name="Tarea 2" />
        <Item isCheck={false} name="Tarea 3" />
      </ul>
    </>
  );
};

export default Conditonal;
