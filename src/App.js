import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div>
      <AddPhoto/>
      <Search/>
      <Delete/>
      <View/>
    </div>
  );
}

export default App;
