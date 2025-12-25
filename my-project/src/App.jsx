import Card from './components/Card.jsx';
import Card2 from './components/Card2.jsx';
import Header from './components/Header.jsx';
import Oke from './components/Oke.jsx';


function App() {

  const users = [
    { id: 1, name: 'Soreyy', age: '22', job: 'Developer' },
    { id: 2, name: 'Pokey', age: '25', job: 'Designer' },
    { id: 3, name: 'Lontey', age: '29', job: 'Manager' },
  ];

  const article = [
    { id:1, title:'Lorem Judul', desc:'loremipsum Syalala', add:'addthis file' },
    { id:2, title:'Lorem Judul', desc:'loremipsum Syalala', add:'addthis file' },
  ];

  return (
    <>
     <h1>OKE</h1>
      <Header></Header>
      <Oke></Oke>

      <div className='flex gap-5'>
      {users.map(function(user) {
        return (
          <Card 
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        );
      })}
    </div>



    <div>
      {article.map(function(article){

        return (
          <Card2
          key={article.id}
          title={article.title}
          desc={article.desc}
          add={article.add}
          />
        );
      })};
      
    </div>





    </>
  );
}


export default App;