import React from 'react'
import {GiKnifeFork} from "react-icons/gi";
import styled from "styled-components";
import {Link,useNavigate} from 'react-router-dom'




function Navbar() {
  const navigate=useNavigate()

  function mealplanPage(){
    navigate("/mealPlan")
  }
  return (
    <Nav>
      <div>

        <GiKnifeFork/>
        <Logo to={"/"}>delicious</Logo>
      </div>
      <div>

        <Button onClick={mealplanPage}>get meal plan</Button>
      </div>
      </Nav>
  )
}

const Logo=styled(Link)`
text-decoration:n
font-size:1.5rem;
font-weight:400;
font-family:'Lobster Two',cursive;

`;
const Nav=styled.div`
padding:4rem 0rem;
display:flex;
justify-content:space-between;
align-items:center;
svg{
  font-size:2rem;
}
`;

const Button=styled.button`
background-color:blue;
color:white;
font-size:1rem;
border:none;
padding:1rem;

&:hover{
    cursor:pointer;
    background-color:#6a0fd3;
}

`

export default Navbar