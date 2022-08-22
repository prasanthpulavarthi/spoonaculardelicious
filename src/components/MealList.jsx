import React from 'react'
import styled from 'styled-components';
import Meal from './Meal'

function MealList({mealData}) {
    const nutrients=mealData.nutrients;
    console.log(mealData)
  return (
    <div>
        <section>
            <h1>Macros</h1>
            <Ul>
                <li>Calories:{nutrients.calories.toFixed(0)}</li>
                <li>Carbohydates:{nutrients.carbohydrates.toFixed(0)}</li>
                <li>Fat:{nutrients.fat.toFixed(0)}</li>
                <li>Protein:{nutrients.protein.toFixed(0)}</li>




            </Ul>
        </section>
        <MealBox>
            {mealData.meals.map((meal)=>{
                return <Meal key={meal.id} meal={meal}/>
            })}
        </MealBox>
    </div>
  )
}
const MealBox=styled.section`
display:flex;
`
const Ul=styled.ul`
display:flex;
width:35rem;
justify-content:space-evenly;
list-style:none;
margin:2rem 0
`

export default MealList