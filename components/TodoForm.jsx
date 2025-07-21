// Form to add todo

import { useState } from 'react';
import axios from 'axios';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

  //   try {
  //     const res = await axios.post('http://localhost:5000/api/todos', { text });
  //     onAdd(res.data); // send new todo back to parent
  //     setText('');
  //   } catch (err) {
  //     console.error('Failed to add todo:', err);
  //   }
  // };
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/todos`,{ text });
        onAdd(res.data); // send new todo back to parent
        setText('');
      } catch (err) {
        console.error('Failed to add todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 18px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    },

};

export default TodoForm;
