import Password_custom from './custom_password';
import Password from './password';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Password Validator(Cutom Method)</h1>
      
      <Password_custom />
      <h1>Password Validator(Validator Method)</h1>
      <Password/>
      
    </div>
  );
}

export default App;
