import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Spot from '../components/Spotlight'
import Spider from '../components/Spider'
import Room from '../images/level3/Main.png'
import Bathtub from '../images/level3/Bathtub.png'
import Brush from '../images/level3/Brush.png'
import Bubbles from '../images/level3/Bubbles.gif'
import Duck from '../images/level3/Duck.gif'
import Handwash from '../images/level3/Handwash.png'
import Laundry from '../images/level3/Laundry.png'
import Seat from '../images/level3/Seat.png'
import Shampoo from '../images/level3/Shampoo.png'
import Towel from '../images/level3/Towel.png'
import Still from '../images/level3/StillBubbles.png'
import Ball from '../images/level3/Ball.png'
import Fan from '../images/level3/Fan.gif'
import Score from '../score/Score.js'
import Gameover1 from '../score/Gameover.js'
import {Link} from 'react-router-dom'
import ReactCountdownClock from 'react-countdown-clock'


export default class Level3 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			show: false,
			play: false
		}
		this.sound = "https://instaud.io/_/2vY6.mp3"
		this.audio = new Audio(this.sound)
	}
    
      onCompleteCallBack() {
    this.setState({show: true })
  }


	clicked(){
		  
		this.setState({count: this.state.count + 1, play: true })
		this.audio.play();
	}

	render() {
		return (
			<div>
				<Scene>
				 
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1495" />
					</Sobject>
					<Sobject name={'seat'} xPos={30} yPos={250}>
						<img src={Seat} height="475" />
					</Sobject>
					<Sobject name={'Bathtub'} xPos={920} yPos={400}>
						<img src={Bathtub} width="560"  />
					</Sobject>
					<Sobject name={'sbubbles'} xPos={995} yPos={340}>
						<img src={Still} height="180" width="180"  />
					</Sobject>
					<Sobject name={'bubbles'} xPos={1005} yPos={300}>
						<img src={Bubbles} height="200" width="200"  />
					</Sobject>
					<Sobject name={'sbubbles'} xPos={1200} yPos={360}>
						<img src={Still} height="180" width="180"  />
					</Sobject>
					<Sobject name={'bubbles'} xPos={1205} yPos={300}>
						<img src={Bubbles} height="200" width="200"  />
					</Sobject>
					<Sobject name={'duck'} xPos={1120} yPos={325}>
						<img src={Duck} height="200" width="200"  />
					</Sobject>
					<Sobject name={'towel'} xPos={750} yPos={200}>
						<img className={'towel'} src={Towel} height="200" width="200"/>
					</Sobject>
					<Sobject name={'ball'} xPos={550} yPos={580}>
						<img src={Ball} className={'ball'} height="130" width="130"/>
					</Sobject>
					<Sobject name={'laundry'} xPos={490} yPos={300}>
						<img src={Laundry} className={'laundry'} height="200" width="150"/>
					</Sobject>
					<Sobject name={'Handwash'} xPos={1100} yPos={280}>
						<img src={Handwash} className={'handwash'} height="120" width="90"/>
					</Sobject>
					<Sobject name={'fan'} xPos={55} yPos={30}>
						<img src={Fan} height="150" width="150"/>
					</Sobject>
					<Sobject name={'Shampoo'} xPos={1240} yPos={270}>
						<img src={Shampoo} className={'shampoo'} height="120" width="50" />
					</Sobject>
					<Sobject name={'brush'} xPos={1325} yPos={360}>
						<img src={Brush} height="40" width="120" />
					</Sobject>
					<Spider clicked={this.clicked.bind(this)}/>
					<Spot height={180} width={180} color={'rgba(0,0,0,0.95)'} />
                    	<Sobject name={'score'} xPos={1200} yPos={615}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={80} yPos={645}>
						<Link to="/"><button onClick={(e) => e.stopPropagation()} className={'quit'}><b>Quit</b></button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={700} yPos={630}>  
                       {!this.state.show ? (
                         <ReactCountdownClock
            seconds={270}
            color="white"
            alpha={1}
            size={90}
            showMilliseconds={false}
            onComplete={this.onCompleteCallBack.bind(this)}
            weight={10}
          />
        ) : (
         <Gameover1 score={this.state.count} />
        )}
                     </Sobject>
                    

                    </Scene>

				
				</div>
			)
	}
}


