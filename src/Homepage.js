import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arslan from "./arslan.jpeg";
import dramas from "./data.json";
import college from "./college.jpeg";
import Address from "./address.js";
import Myfile from "./Myfile.js";
import Mobiledata from "./Mobiledata.json";
import Drama from "./Drama.js";
import axios from "axios";
import "./App.css";
var students = [
  {
    name: "ali",
    gender: "Male",
    marks: 75
  },
  {
    name: "salman",
    gender: "Male",
    marks: 86
  },
  {
    name: "arslan",
    gender: "Male",
    marks: 90
  },
  {
    name: "anaya",
    gender: "Female",
    marks: 100
  }
];

function Homepage(props) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [selectedfruit, setselectedfruit] = useState("");
  const [selectedgender, setselectedgender] = useState("");
  const [count, setCount] = useState(0);
  const [ApiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(Response => {
      setApiResponse(Response.data);
      console.log("hi anaya khan", Response);
    });
    console.log("hi how are you");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {ApiResponse.map(every => (
          <div>
            <h1>{every.name}</h1>
          </div>
        ))}
        <Link to="/registration">
          <h3>Go to Registration Page</h3>
        </Link>
        <img src={arslan} className="App-logo" alt="logo" />
        <h1 className="shan">Khadija Noor Software Engineer</h1>
        <h2 className="anaya">I Love You React</h2>
        <tittle className="ks">Anaya Khan</tittle>
        <h2 className="arslan">Works sheet</h2>
        <table border="7">
          <tr>
            <th className="shan">Physics</th>
            <th className="anaya">English</th>
            <th className="ks">Math</th>
            <th className="khadija">Computer</th>
          </tr>
          <tr>
            <td className="arslan">90</td>
            <td className="arslan">80</td>
            <td className="arslan">70</td>
            <td className="arslan">75</td>
          </tr>
          <tr>
            <td className="arslan">100</td>
            <td className="arslan">90</td>
            <td className="arslan">95</td>
            <td className="arslan">85</td>
          </tr>
        </table>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <h2>Your Clicked Button{count}times</h2>
        <h2 className="arslan">Registration Form</h2>
        <form className="imgclass">
          FirstName :
          <input
            type="text"
            onChange={event => setFirstName(event.target.value)}
          />
          LastName :
          <input
            type="text"
            onChange={event => setLastName(event.target.value)}
          />
          MobileNo :
          <input
            type="MobileNo"
            onChange={event => setMobileNo(event.target.value)}
          />
          <br />
          email :
          <input
            type="email"
            onChange={event => setemail(event.target.value)}
          />
          Password :
          <input
            type="Password"
            onChange={event => setpassword(event.target.value)}
          />
          <input type="submit" value="Press me" />
          <select onChange={event => setselectedfruit(event.target.value)}>
            <option value="">select your favorite fruit</option>
            <option value="Mango">Mango</option>
            <option value="Grapes">Grapes</option>
            <option value="Banana">Banana</option>
            <option value="Strewbery">Strewbery</option>
            <option value="Orange">Orange</option>
          </select>
          <select onChange={event => setselectedgender(event.target.value)}>
            <option value="">select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          Select Gender :<input type="radio" name="gender" />
          Male
          <input type="radio" name="gender" />
          Female
        </form>
        {dramas.shows.map(every => (
          <Drama heart={every} />
        ))}

        <img src={college} className="App-logo" alt="logo" />
        <Address />
        <Myfile />
        {students.map(every => (
          <div>
            <h1 style={{ color: "green" }}>{every.name}</h1>
            <h2 style={{ color: "red" }}>{every.marks}</h2>
            <h3 style={{ color: "blue" }}>{every.gender}</h3>
          </div>
        ))}
        {Mobiledata.Mobiles.map(every => (
          <div
            style={{
              border: "2px solid black",
              width: "500px",
              background: "green"
            }}
          >
            <h1 style={{ color: "black" }}>{every.year}</h1>
            <h2 style={{ color: "black" }}>{every.name}</h2>
            <h3 style={{ color: "black" }}>{every.released}</h3>
            <h4 style={{ color: "black" }}>{every.pic}</h4>
            <img src={`/img/mobiles/${every.pic}`} />
            <h5 style={{ color: "black" }}>Rs.{every.price}</h5>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Homepage;
