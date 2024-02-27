import '../styles/App.scss';
import Header from './Header';
import Banner from './Banner';
import Annonces from './Annonces';
import Footer from './Footer';

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
