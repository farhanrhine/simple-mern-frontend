// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [msg, setMsg] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/test')
//       .then((res) => setMsg(res.data.message))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>MERN App</h1>
//       <p>Backend says: {msg}</p>
//     </div>
//   );
// }

// export default App;


import Home from '../pages/Home';

function App() {
  return <Home />;
}

export default App;
