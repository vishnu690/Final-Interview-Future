import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";

const inputData = {
  username: "",
  password: "",
};

const errorMsg = {
  emailError: "",
  passError: "",
};

function Login() {
  const [input, setInput] = useState(inputData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();
  let username, pass;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");

    if (input.username === "") {
      setError({ emailError: "Email address must not be empty" });
      return;
    } else if (input.password === "") {
      setError({ passError: "Password must not be empty" });
      return;
    } else {
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:5000/api/v1/login/" +
            input.username +
            "/" +
            input.password
        );
        const data = await response.json();
        console.log(data);
        data.map((data) => {
          username = data.username;
          pass = data.password;
          localStorage.setItem("userID", username);
          localStorage.setItem("userpass", pass);
        });

        if (username == input.username && pass == input.password) {
          navigate("/Dashboard", { replace: true });
        } else {
          alert("Invalid username or password");
        }

        return console.log(username + "#" + pass);
      };

      fetchData();
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="form-container">
          <div className="animate-div">
            <span className="welcome">Welcome To</span>
            <h2>Login Form</h2>
            <span className="welcome-sub">
              Login to get in the moment updates on the things<br></br> that
              interest you.
            </span>
            <form method="POST" onSubmit={formSubmitHandler}>
              <div className="input-div">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, username: e.target.value };
                    })
                  }
                  value={input.email}
                />
                <span className="error-msg">{error.emailError}</span>
              </div>
              <div className="input-div">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  onChange={(e) =>
                    setInput((prevState) => {
                      return { ...prevState, password: e.target.value };
                    })
                  }
                  value={input.password}
                />
                <span className="error-msg">{error.passError}</span>
              </div>
              <div className="input-div-btn">
                <input type="submit" value="Sign In" />
              </div>
            </form>
            <span className="account-sub">
              Don't you have an account ?{" "}
              <Link to="/" className="red">
                Sign Up Now
              </Link>{" "}
            </span>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
}

export default Login;
