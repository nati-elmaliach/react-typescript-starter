import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
//import GuestList from './state/GuestList';
//import UserSearch from './state/UserSearch';


const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
