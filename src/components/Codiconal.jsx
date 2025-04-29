import React, {useState}from "react";

/* function Item({ isCheck, name }) {
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

export default Conditonal; */

function Item({ isCheck, name, onClick, onDelete }) {
  return (
    <li className="item" style={{ display: "flex", alignItems: "center" }}>
      <span
        onClick={onClick}
        style={{ cursor: "pointer", flex: 1 }}
      >
        {isCheck ? name + " ✅" : name + '❌'}
      </span>
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>🗑️</button>
    </li>
  );
}

const Conditonal = () => {
  const [tareas, setTareas] = useState([
    { id: 1, name: "Tarea 1", isCheck: true },
    { id: 2, name: "Tarea 2", isCheck: false },
    { id: 3, name: "Tarea 3", isCheck: false },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  const toggleCheck = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, isCheck: !t.isCheck } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const agregarTarea = (e) => {
    e.preventDefault();// se usa para eliminar lo que tiene por defaul form
    if (nuevaTarea.trim() === "") return;

    const nueva = {
      id: Date.now(),
      name: nuevaTarea,
      isCheck: false
    };
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  return (
    <>
      <h1>Lista de tareas</h1>

      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {tareas.map((t) => (
          <Item
            key={t.id}
            name={t.name}
            isCheck={t.isCheck}
            onClick={() => toggleCheck(t.id)}
            onDelete={() => eliminarTarea(t.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Conditonal; 
