import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Oke from './components/Oke.jsx';

function App() {

  return (
    <>
     <h1>OKE</h1>
      <Header></Header>
      <Oke></Oke>
      <div className='p-5 flex gap-5 bg-slate-700' >
        <Card name='Soreyy' year='22' job='lolo'></Card>
        <Card name='Pokey' year='25' job='lolo'></Card>
        <Card name='Lontey' year='29' job='lolo'></Card>
      </div>
    </>
  );
}


export default App;