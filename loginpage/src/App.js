
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const[values, setValues] = useState({
    username:"",
    emil:"",
    birthday:"",
    password:"", 
    confirmPassword:"", 
  });
  const inputs=[
    {
      id:1, 
      name:"username", 
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be longer than 3 and shorter than 16", 
      label:"Username"
    },
    {
      id:2, 
      name:"email", 
      type:"text",
      placeholder:"Email",
      errorMessage:"It should be a valid email address ", 
      label:"Email"
    },
    {
      id:3, 
      name:"birthday", 
      type:"date",
      placeholder:"Birthday",
      
      label:"Birthday"
    },
    {
      id:4, 
      name:"password", 
      type:"password",
      placeholder:"password",
      errorMessage:"Password should be 8-20 characters ", 
      label:"password"
    },
    {
      id:5, 
      name:"confirmPAssword", 
      type:"password",
      placeholder:"confirmPAssword",
      errorMessage:"Passwords do not match! ", 
      label:"confirmPAssword"
    },
  ]

  // const usernameRef = useRef()
  const handleSubmit=(e)=>{
    e.preventDefault() ;    
  }
  const onChange=(e)=>{
    setValues({...values, [e.target.name]: e.target.value}); 
  }
  console.log(values)
  return (
    <div className= "app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]}
          onChange={onChange}
          sex = "23"
          
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
