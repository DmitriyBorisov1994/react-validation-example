import React, { useState } from "react";
import Register from "./Register";

const RegisterContainer = () => {

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = (values) => {
    const { username, password } = values;
    setUser(username)
    setPwd(password)
    setSuccess(true)
  };

  return (
    <Register
      user={user}
      success={success}
      submitHandler={submitHandler}
    />
  );
};

export default RegisterContainer;
