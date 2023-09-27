import React from 'react'
import Typewriter from 'typewriter-effect'

const Typer_mintmatch = () => {
  return (
    <Typewriter
        onInit={(typewriter) => {
        typewriter
            .typeString('<br>')
            .typeString('<h1 style="display:inline">MintMatch</h1>')
            .typeString('<br></br>')
            .typeString('<p><i>#Python #NextJS #Solidity #firebase #Web3</i><p>')
            .typeString('<br>')
            .pasteString('<ul style="list-style-type: disc; text-align: justify"><li class="project">A Web3 social application enables users to connect based shared NFT</li><li class="project">In-app NFT trading and NFT minting</li><li class="project">Smart contract deployed on Polygon Mumbai network</li><li class="project">Utilized XMTP to direct wallet-to-wallet communication</li></ul>')
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

export default Typer_mintmatch
  