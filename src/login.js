import { useState, useEffect } from 'react';
function Mylogin() {
  const initialValues = {username:"",password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const[formValue, setFormErrors] = useState({});
  const[isSubmit, setSubmit] = useState(false);
  const handleChange = (e)=>{
    console.log(e.target);
    const{name,value} = e.target;
    setFormValues({...formValues,[name]:value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };
  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  })
  const  validate = (values)=>{
    const errors = {};
    const regex = /^[^s@]+@[^\s@]+.[?^\s@]{2,}$/i;
    if(values.username){
      errors.username = "user name is required";
    }
    if(values.password){
      errors.password = "password is required";
    }
    return errors;
  };

return (
  <div className='container'>
    <form onSubmit={handleSubmit}>
      <h1>  Login Form</h1>
      <div className='ui divider'></div>
      <div className='ui form'>
        <div className='field'>
          <label>user name</label>
          <input type="text" name='username' placeholder='username'
          value={formValue.username}
          onChange={handleChange}/>
        </div>
        <p>{formErrors.username}</p>
        <div className='field'>
          <label>user name</label>
          <input type="password" name='password' placeholder='password'
          value={formValue.password}
          onChange={handleChange}/>
        </div>
        <p>{formErrors.password}</p>
        <button className='fluid ui button blue'>Login</button>
      </div>
    </form>  
  </div>

   
  );
}

export default Mylogin;