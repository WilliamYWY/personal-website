import React from 'react'
import Typewriter from 'typewriter-effect'

const Typer_tb = () => {
  return (
    <Typewriter
        onInit={(typewriter) => {
        typewriter
            .typeString('<br>')
            .typeString('<h1 style="display:inline">Trading Bot <br> and </br> Trading Simulation</h1>')
            .typeString('<br></br>')
            .typeString('<p><i>#Python</i><p>')
            .typeString('<br>')
            .pasteString('<ul style="list-style-type: disc; text-align: justify"><li class="project">Designed bots and algorithms for trading cryptocurrency on Binance and sending notifications via Telegram</li><li class="project">Built a market simulator for testing trading strategies on historical data with the ability to simulate TP/SL</li></ul>')
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

export default Typer_tb
  