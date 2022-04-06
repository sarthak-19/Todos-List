// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  let todo=[
    {
      id:1,
      title:'Todo 1',
      desc:"This is my 1st todo"
    },
    {
      id:2,
      title:'Todo 2',
      desc:"This is my 2nd todo"
    },
  ];

  return (
    <>
      <Header title="My-Todo List" searchBar={true}/>
      <Todos todos={todo}/>
      <Footer/>
    </>
    );
}

export default App;