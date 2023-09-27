import React from 'react'
import Typewriter from 'typewriter-effect'

const Typer_hair = () => {
  return (
    <Typewriter
        onInit={(typewriter) => {
        typewriter
            .typeString('<br>')
            .typeString('<h1 style="display:inline">hAIr</h1>')
            .typeString('<br></br>')
            .typeString('<p><i>#Python #SwiftUI #MySQL #FlaskRESTful</i><p>')
            .typeString('<br>')
            .pasteString('<ul style="list-style-type: disc; text-align: justify"><li class="project">Use Scikit-Image to analyze photos</li><li class="project">Use Flask RESTful to contract backend server</li><li class="project">Use PyMySQL to manage data storage</li><li class="project">Build IOS app with SwiftUI</li></ul>')
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

export default Typer_hair
  