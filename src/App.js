import { BrowserRouter as Router } from 'react-router-dom';
import ConfigRoutes from './ConfigRoutes';
import Footer from './components/Footer/index'
import Header from './components/Header/index'


function App() {
  return (
    <Router>
      <Header />
      <ConfigRoutes />
      <Footer />
    </Router>
  );
}

export default App;
