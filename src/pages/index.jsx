import '../styles/App.scss';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Annonces from '../components/Annonces';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Banner />
        <Annonces />
      </div>
      <Footer />
    </>
  );
}

export default App;
