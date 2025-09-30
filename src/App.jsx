import { useState } from "react";

function Lista() {

  const [titulo, setTitulo] = useState(""); 
  const [descricao, setDescricao] = useState(""); 
  const [tarefas, setTarefas] = useState([]); 


  const addTask = () => {
    if (titulo.trim() === "" || descricao.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now(), titulo, descricao, done: false }]);
    setTitulo("");
    setDescricao("");
  };


  const toggleTask = (id) => {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };


  const removeTask = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: "450px", margin: "50px auto", textAlign: "center" }}>
      <h1>Lista de Tarefas</h1>


      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite um título..."
      />
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Digite uma descrição..."
      />
      <button onClick={addTask}>Adicionar</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tarefas.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 0",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <span
              style={{
                textDecoration: t.done ? "line-through" : "none",
                flex: 1,
                textAlign: "left",
              }}
            >
              <strong>{t.titulo}</strong> - {t.descricao}
            </span>

            <button
              onClick={() => toggleTask(t.id)}
              style={{
                marginRight: "8px",
                background: t.done ? "green" : "gray",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {t.done ? "Concluído" : "Desfazer"}
            </button>

            <button
              onClick={() => removeTask(t.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
