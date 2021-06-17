import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';



function App() {




  return (
    <div className='food'>
      <Sidebar />
      <div className="food__header__titles">
        <div className="header__title">
          <h3 className='food-title'>Food</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
