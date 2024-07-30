// // App.jsx
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Flights from './pages/Flights';
// import Layout from './components/Layout/Layout';

// const App = () => {
//   const book = {
//     price: 100,
//     review: 50
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="home" element={<Home />} />
//         <Route path="flights" element={<Flights book={book} />} />
//         {/* Add other routes as needed */}
//       </Route>
//     </Routes>
//   );
// };

// export default App;
// App.js or equivalent
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Flights from './pages/Flights';
// import CancelFlight from './pages/CancelFlight';
// import Update from './pages/Update';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/flights" element={<Flights />} />
//         <Route path="/cancel" element={<CancelFlight />} />
//         <Route path="/update" element={<Update />} />
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// App.js
import { useState } from 'react';
import Home from './pages/Home';
import Flights from './pages/Flights';
import CancelFlight from './pages/CancelFlight';
import Update from './pages/Update';
import Layout from './components/Layout/Layout'; // Assuming you have a Layout component

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'flights':
        return <Flights />;
      case 'cancel':
        return <CancelFlight />;
      case 'update':
        return <Update />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      <div>
        <nav>
          <ul>
            <li onClick={() => setCurrentPage('home')}>Home</li>
            <li onClick={() => setCurrentPage('flights')}>Flights</li>
            <li onClick={() => setCurrentPage('cancel')}>Cancel Flight</li>
            <li onClick={() => setCurrentPage('update')}>Update</li>
          </ul>
        </nav>
        {renderPage()}
      </div>
    </Layout>
  );
}

export default App;
