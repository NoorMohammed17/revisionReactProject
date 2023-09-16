import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from "./IngredientList";
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const ingredientsAddHandler = (ingredient) => {
    fetch('https://react-backend-81972-default-rtdb.firebaseio.com/ingredients.json',{
      method:'POST',
      body:JSON.stringify(ingredient),
      headers :{'Content-Type':'application/json'}
    }).then(response => {
      return response.json()
    })
    .then(responseData => {
      setUserIngredients(prevIngredients => 
        [...prevIngredients,
          //firebase will return id with key as 'name'
        // {id:Math.random().toString(), ...ingredient}
        {id:responseData.name, ...ingredient}
      ]
      )
    })
   

  }

  const removeIngredientHandler = (ingredientID) => {
    setUserIngredients(prevIngredients => {
      return prevIngredients.filter((ingredient) => ingredient.id!==ingredientID)
    })
    // const newList = userIngredients.filter((item) => item.id !== ingredientID);

    // setUserIngredients(newList);
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={ingredientsAddHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem = {removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
