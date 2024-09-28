
//!we willupdate only one emp at a time
//?Based on SingleEmp details we have to navigate to this page

import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  let [emp, setEmp] = useState({
    empname: "", //!1st i/p
    empemail: "", //!2nd i/p
  });

  let { empname, empemail } = emp; //destructure state

  let navigate = useNavigate();

    //!  ***** FETCHING DATA OF PARTICULAR EMP FROM SERVER BASED ON ID(to display it on input)******
    let { id } = useParams()
    console.log("slug",id);
    
    //?handle promise-->async and await
    let fetchData = async () => {
        let {data} =await axios.get("http://localhost:5000/employee/" + id); 
        // console.log(data);//obj
        setEmp(data)
    }
    
    useEffect(() => {
        try {
          fetchData()
        } catch (e) {
            console.log(e);  
      } 
    },[])
  //!  ***** FETCHING DATA OF PARTICULAR EMP FROM SERVER BASED ON ID(to display it on input)******

  //!event(onChange)--->SBE
  let handleInput = event => {
    let { name, value } = event.target;
    setEmp({ ...emp, [name]: value });
  };

  //!event(onSubmit)--->SBE
  let handleSubmit = event => {
    event.preventDefault();
    console.log(emp);
    try {
      let payload = { empname, empemail };
      axios.put("http://localhost:5000/employee/"+id, payload);
      navigate("/viewall");
    } catch (e) {
      console.log(e);
    } finally {
      setEmp({
        empname: "",
        empemail: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>WELCOME TO UPDATION PAGE</h1>
        <div>
          <label htmlFor="ename">EMPLOYEE NAME : </label>
          <input
            type="text"
            id="ename"
            value={empname}
            name="empname"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="eemail">EMAPLOYEE EMAIL : </label>
          <input
            type="text"
            id="eemail"
            value={empemail}
            name="empemail"
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <button>UPDATE</button>
        </div>
      </form>
    </>
  );
};
export default Home;