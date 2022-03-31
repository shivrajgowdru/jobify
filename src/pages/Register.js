import {Logo,FormRow,Alert} from "../Components"
import {useEffect,useState} from 'react'
import Wrapper  from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"
 
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,

}

const Register = () => {
  const [values,setValues] = useState(initialState);
  
  //global state and use navigate
  const {isLoading , showAlert} = useAppContext()
  const toggleMember = () => {
  setValues({...values, isMember : !values.isMember})
  }

  const handleChange = (e) => {
    console.log(e)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }
  
  return (
       <Wrapper className="full-page">
         <form className="form" onSumbit={onSubmit}>
              <Logo/>
              <h3>{values.isMember ? "Login":"Register"}</h3>
              {showAlert && <Alert/>}
        {/* name input */}
        {
          !values.isMember && (
          <FormRow
            type="type"
            name="name"
            value={values.name}
            handleChange={handleChange}/>
          )
        }
  
        {/* email input */}
        <FormRow 
        type="email"
        labelText="E-mail"
        value={values.email}
        handleChange={handleChange}
        />
        {/* password input */}
        <FormRow 
        type="password"
        labelText="password"
        value={values.password}
        handleChange={handleChange}
        />
        <button className="btn btn-block" onSubmit={onSubmit}>Submit</button>
        <p>
          {values.isMember ? "not a Member yet?" : "Already a Member?"}
           <button type="button" className="member-btn" onClick={toggleMember}>
          {values.isMember ? "Register":"Login"}
        </button>
        </p>
       
        </form> 
       </Wrapper>
        
         )
}

export default Register