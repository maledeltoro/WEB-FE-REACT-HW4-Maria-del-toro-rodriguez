import Header from './components/Header';
import Introducion from './components/Introducion';
import Diagnostico from './components/Diagnostico';
import Organizacion from './components/Organizacion';
import Objetivos from './components/Objetivos';
import Footer from './components/Footer';


const App = () => {
  const diagnosisData = [];
  const objectivesData = [];

  return (
    <div>
      <Header />
      <Introducion />
      <Diagnostico data={diagnosisData} />
      <Organizacion/>
      <Objetivos objectives={objectivesData} />
      <Footer />
    </div>
  );
};

export default App;

