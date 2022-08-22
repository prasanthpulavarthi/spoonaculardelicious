import React,{useState,useEffect} from 'react'
import MealList from './MealList'
import styled from 'styled-components'

function Meal({meal}) {
    const [imageUrl,setImageUrl]=useState("")
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response)=>response.json())
        .then((data)=>{
            setImageUrl(data.image)
        })
        .catch(()=>{
            console.log("error")
        })

    },[meal.id])

  return (
    <Article>
        <h1>{MealList.title}</h1>
        <img src={imageUrl} alt="recipe"/>
        <ul>
            <li>Preparation time:{meal.readyInMinutes}minutes</li>
            <li>Number of sarvings:{meal.servings}</li>

        </ul>
        <A href={meal.sourceUrl}>Go to recipe</A>
    </Article>
  )
}

const Article=styled.article`
display:flex;
flex-direction:column;
padding:2rem;
margin:0 1rem;
max-width:18rem;
box-shadow:0 4px 8px 2px rgba(77,77,77,0.15);

ul{
    font-size:0.9rem;
    margin-bottom:1rem;
}
img{
    margin-bottom:2rem;
}
`

const  A=styled.a`
text-decoration:none;
background-color:#7f21eb;
color:white;
text-align:center;
padding:1rem;
margin-top:2rem;

&:hover{
    background-color:#6a0fd3;
}

`

export default Meal