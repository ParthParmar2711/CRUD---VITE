
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const ViewAll = () => {
  let [emp, setEmp] = useState([]);

  //resolve promise-->async and await
  let fetchData = async () => {
    let { data } = await axios.get("http://localhost:5000/employee");
    setEmp(data);
  };

  console.log("state emp-->", emp);

  //!fetching data from server-->sideeffect-->useEffect
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []); //?[]-->componentDidMount()-->"only once"

  //! **** delete emp*******
  let deleteEmp = (id) => {
    console.log("id to delete",id);
    axios.delete("http://localhost:5000/employee/" + id);
    window.location.assign("/viewall");
  }

  return (
    <>
      <h1>INFORMATION OF ALL EMPLOYEE</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>EMPNAME</th>
            <th>EMPEMAIL</th>
            <th>OPERATIONS</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((val) => {
            // console.log("array val",val);
            return (
              <Fragment key={val.id}>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.empname}</td>
                  <td>{val.empemail}</td>
                  <td>
                    <NavLink to={`/edit/${val.id}`}>
                      <button>UPDATE</button>
                    </NavLink>
                    <button onClick={()=>{deleteEmp(val.id)}}>DELETE</button>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ViewAll



//todo   Slug:  Extra extention/parameter given to path. Slug value will change dynamically.
//!      Ex:  /edit/:id     Above code Slug ---> /:id

//todo   useParams()---> HOOK --> react-router-dom
//?      using this hook we can access the particular paramter(slug) from url by destructuring particular slug.