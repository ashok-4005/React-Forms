import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () =>{

  const signUp = (event) =>{
   
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.mot = formData.getAll("mot");
    console.log(data);
    
  }


  return(
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>
        
        <fieldset>
          <legend>Employment Status</legend>
          <label>
              <input type="radio" name="employmentStatus" defaultChecked={true} value="unemployed"/>
              Unemployed
          </label>
            <label>
              <input type="radio" name="employmentStatus" value="part-time"/>
              Part-time
          </label>
            <label>
              <input type="radio" name="employmentStatus" value="full-time"/>
              Full-time
          </label>
        </fieldset>


        <fieldset>
          <legend>Mode of Transport</legend>
          <label>
              <input type="checkbox" name="mot" value="bus"/>
              BUS
          </label>
            <label>
              <input type="checkbox" name="mot" value="car"/>
              CAR
          </label>
            <label>
              <input type="checkbox" name="mot" value="bike"/>
              BIKE
          </label>
        </fieldset>
    
        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default App
