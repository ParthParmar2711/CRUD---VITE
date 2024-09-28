import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let [emp,setEmp] = useState({
        empname:"" , //!1st i/p
        empemail:"" //!2nd i/p
    })

    let { empname, empemail } = emp;//destructure state

   let navigate= useNavigate()
    
    //!event(onChange)--->SBE
    let handleInput = (event) => {
        let { name, value } = event.target
        setEmp({...emp,[name]:value})
    }

    //!event(onSubmit)--->SBE
    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(emp);
        try {
            let payload = { empname, empemail };
            axios.post("http://localhost:5000/employee", payload);
            toast.success("Successfully Posted!");
            navigate("/viewall");
        } catch (e) {
            console.log(e);
        }
        finally {
            setEmp({
                empname: "",
                empemail:""
            })
        }
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>WELCOME TO HOME PAGE</h1>
        <legend>ADD EMPLOYEE</legend>
        <div>
          <label htmlFor="ename">EMPLOYEE NAME:</label>
          <input
            type="text"
            id="ename"
            value={empname}
            name="empname"
            onChange={handleInput}
          required/>
        </div>
        <div>
          <label htmlFor="eemail">EMAPLOYEE EMAIL</label>
          <input
            type="text"
            id="eemail"
            value={empemail}
            name="empemail"
            onChange={handleInput}
           required/>
        </div>
        <div>
          <button>ADD</button>
        </div>
      </form>
    </>
  );
}
export default Home