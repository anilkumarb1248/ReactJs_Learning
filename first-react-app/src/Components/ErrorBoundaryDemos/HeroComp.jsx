
import React from 'react'

function HeroComp({heroName}) {
    if(heroName == 'Joker'){
        throw new Error('Joker is not a hero');
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default HeroComp;
