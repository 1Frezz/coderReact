import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer message="Bienvenido a mi tienda Online" />
    </div>
  )
}

export default App
