import Form from './Form';
import MessagesList from './MessagesList';

import FakeData from '../../data/Message';

import './App.scss';

function App() {
  const [FakeMessages] = FakeData.message;

  return (
    <div className="App">
      <MessagesList />
      <Form />
    </div>
  );
}

export default App;
