import React, { useState } from 'react';

function Form() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <h1>CRUD - CREATE</h1>
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formState.name}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formState.password}
        onChange={handleInputChange}
      />

      <button class = "submit" type="submit">Submit</button>
    </form>
    <style>
        {`
          button {
            margin-bottom: 0px;
          }

          form {
            margin-top: 100px;
            margin-left: -500px;
          }

          h1 {
            margin-left: 230px;
            margin-top: -300px;
          }
        `}
      </style>
    </>
  );
}

export default Form;
