import React from 'react'
import Typewriter from 'typewriter-effect'

const Typer_tri = () => {
  return (
    <Typewriter
        onInit={(typewriter) => {
        typewriter
            .typeString('<br>')
            .typeString('<h1 style="display:inline">Triplet Loss</h1>')
            .typeString('<br></br>')
            .typeString('<p><i>#Python #Pytorch</i><p>')
            .typeString('<br>')
            .pasteString('<ul style="list-style-type: disc; text-align: justify"><li class="project">Loss function that can be use to determine the similarity of arrays</li><li class="project">Widely used at speaker verification.</li></ul>')
            .pauseFor(6000)
            .deleteAll()
            .start();
    
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
    />
  )
}

export default Typer_tri