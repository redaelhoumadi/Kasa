import '../styles/App.scss';
import Annonces from '../components/Annonces';
import Banner from '../components/Banner';
import plage from '../assets/plage.jpg';

function App() {
  return (
    
      <div className='container'>
        <Banner tittle='Chez vous, partout et ailleurs' url={plage} alt='plage'/>
        <Annonces />
      </div>
      

  );
}

export default App;
