import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';


function Home() {
  const [todos, setTodos] = useState([]);

  // Fetch all todos from backend
  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/todos');
      setTodos(res.data);
    } catch (err) {
      console.error('Failed to fetch todos:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo (from form)
  const handleAdd = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  // Delete todo (by id)
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  // Toggle todo (from PUT)
  const handleToggle = (updatedTodo) => {
    setTodos(todos.map(todo =>
      todo._id === updatedTodo._id ? updatedTodo : todo
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 My To-Do List</h1>
      <TodoForm onAdd={handleAdd} />
      {todos.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '60px auto',
    padding: '25px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default Home;
