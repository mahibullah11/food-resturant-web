import React from 'react'
import pizaa from "../assets/pizaa.jpg"
import burger from "../assets/burger.jpg"
import momo from "../assets/momos.jpeg"
import samosa from "../assets/samosa.jpg"
import sandwich from "../assets/sandwich.jpg"
import risotto from "../assets/risotto.jpg"
import FoodMenu from './FoodMenu'




function FoodMenuList() {
const foodNames = [
    {name: 'Pizza', image: pizaa, price:"20" , ingredients:"Made with souce, chicken and vegetables"},
    {name: 'Burger', image: burger, price:"12" , ingredients:"Made with souce, chicken and vegetables"},
    {name: 'Momo', image: momo, price:"22" , ingredients:"Made with souce, chicken and vegetables"},
    {name: 'Samosa', image: samosa, price:"25" , ingredients:"Made with souce, chicken and vegetables"},
    {name: 'Sandwich', image: sandwich, price:"8" , ingredients:"Made with souce, chicken and vegetables"},
    {name: 'Risotto', image: risotto, price:"30" , ingredients:"Made with souce, chicken and vegetables"}

]
  return (
  <FoodMenu foodNames={foodNames}/>
  )
}

export default FoodMenuList
