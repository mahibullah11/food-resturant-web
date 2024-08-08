import React from 'react'
import pizaaImage from "../assets/pizaa.jpg"
import burgerImage from "../assets/burger.jpg"
import momoImage from "../assets/momo.jpg"
import ExploreFood from './ExploreFood'
function ExploreFoodList() {
    const foods = [
        {name: 'Pizza' , image:pizaaImage},
        {name: 'Burger' , image:burgerImage},
        {name: 'Momo' , image:momoImage}

    ]
  return (
  <ExploreFood foods={foods} />
)

}

export default ExploreFoodList
