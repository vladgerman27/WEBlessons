import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/Greeting';
import NumberList from './components/Numbers';
import NameForm from './components/Forms';
import Calculator from './components/Calculator';

function App() {
    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };

    const user = {
        firstName: 'Vlad',
        lastName: 'Vodopad',
    };

    const numbers = [1, 2, 3, 4, 5];


    return (
        <div className="App-header">
            <Welcome name={formatName(user)} />
            <Clock />
            <Toggle />
            <LoginControl />
            <NumberList numbers={numbers} />
            <NameForm />
            <Calculator />
        </div>
    );
}

export default App;