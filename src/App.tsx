import './App.css';
import { UserPage } from './pages/UserPage';
import { Provider } from 'react-redux'; 
import store from './redux/store';

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <div className='back'>
        <div className='maindiv'>
          <h3 className='usernam'>User Management</h3>
        </div>
        <UserPage />
        </div>
      </div>
    </Provider>
  );
}

export default App;
