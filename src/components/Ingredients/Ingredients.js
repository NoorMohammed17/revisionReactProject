import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from "./IngredientList";
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const ingredientsAddHandler = (ingredient) => {
    setUserIngredients(prevIngredients => 
      [...prevIngredients,
      {id:Math.random().toString(), ...ingredient}]
    )

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
