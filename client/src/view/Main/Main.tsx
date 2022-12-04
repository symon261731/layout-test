import React from 'react'
import Section from './Section/Section';
import Slider from './Slider/Slider';


const Main : React.FC = () => {
  return (
    <main className='app__main main'>
      <Section firstPhoto={'/content/hands.jpg'} secondPhoto={'/content/women-sand.jpg'} />
      <Slider/>
      <Section firstPhoto={'/content/dance.jpg'} secondPhoto={'/content/flower.jpg'}/>
    </main>
  
  )
}

export default Main;