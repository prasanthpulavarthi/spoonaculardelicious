import React,{useState} from 'react'
import MealList from './MealList'
import styled from 'styled-components'


function MealPlan() {
    const [mealData,setMealData]=useState(null)
    const [calories,setCalories]=useState(2000)

    function handleChange(e){
        setCalories(e.target.value)

    }

    function getMealsData(){
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`)
        .then((response)=>response.json())
        .then((data)=>{
            setMealData(data)
            console.log(data)
        })
        .catch(()=>{
            console.log("err")
        })

         
    }
  return (
    <TextBox>
        <section >
            <Input type="number" placeholder='enter calories' onChange={handleChange}/>

        </section>
        <Button onClick={getMealsData}>get Daily meals</Button>
        {mealData && <MealList mealData={mealData}/>}
    </TextBox>
  )
}

const TextBox=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Button=styled.button`
background-color:Purple;
color:white;
font-size:1rem
border:none;

&:hover{
    cursor:pointer;
    background-color:#6a0fd3;
}

`
const Input=styled.input`
text-align:center;
padding:0.5rem;
margin-bottom:1rem;
`

export default MealPlan