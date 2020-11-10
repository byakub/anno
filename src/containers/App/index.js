import './styles.css';
import Announcements from '../Announcements';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

function App() {
  return (
    <div className="App container">
      <Header />
      <Announcements />
      <Footer />
    </div>
  );
}

export default App;
