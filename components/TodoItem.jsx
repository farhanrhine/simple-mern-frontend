// Display each todo

import axios from 'axios';

function TodoItem({ todo, onDelete, onToggle }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      onDelete(todo._id);
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  };

  const handleToggle = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${todo._id}`);
      onToggle(res.data);
    } catch (err) {
      console.error('Failed to toggle todo:', err);
    }
  };

  return (
    <div style={styles.item}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleToggle}
      />
      <span style={{
        ...styles.text,
        textDecoration: todo.isCompleted ? 'line-through' : 'none',
        color: todo.isCompleted ? 'gray' : 'black'
      }}>
        {todo.text}
      </span>
      <button onClick={handleDelete} style={styles.delete}>❌</button>
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  text: {
    flex: 1,
    marginLeft: '12px',
    fontSize: '16px',
  },
  delete: {
    background: 'none',
    border: 'none',
    color: '#dc3545',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default TodoItem;
