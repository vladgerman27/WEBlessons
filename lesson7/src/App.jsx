import './App.css';

function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Vlad',
    lastName: 'Vodopad'
  };

  return (
    <div >
      <h1>
      Hello, {formatName(user)}!
    </h1>
    <Welcome name="Алиса" />
      <Welcome name="Базилио" />
      <Welcome name="Буратино" />
    </div>
    
  );
}

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

export default App;