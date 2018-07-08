import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level4/Room.png'
import Clock from '../images/level4/Clock.gif'
import Dustbin from '../images/level4/Dustbin.png'
import Oven from '../images/level4/Oven.png'
import Sticker from '../images/level4/Sticker.png'
import Table from '../images/level4/Table.png'
import Refrigerator from '../images/level4/Refrigerator.png'
import Cup from '../images/level4/Cup.gif'
import Spot from './Spotlight.js'
import Food from '../images/level4/Food.png'
import Spoon from '../images/level4/Spoon.png'
import Score from '../score/Score.js'
import Countdown from 'react-countdown-now';
import Gameover1 from '../score/Gameover.js'





export default class Level4 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	render() {
		return (
				<Scene>
				  
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1536" />
					</Sobject>
					<Sobject name={'Refrigerator'} xPos={30} yPos={140}>
						<img src={Refrigerator} height="580" width="300" />
					</Sobject>
					<Sobject name={'tabel'} xPos={350} yPos={205}>
						<img src={Table} height="530" width="530"/>
					</Sobject>
					<Sobject name={'teapot'} xPos={950} yPos={235}>
						<img src={Cup} height="150" width="150"/>
					</Sobject>
					<Sobject name={'oven'} xPos={1200} yPos={220}>
						<img src={Oven} height="190"width="290" />
					</Sobject>
					<Sobject name={'dustbin'} xPos={1300} yPos={520}>
						<img src={Dustbin} className={'dustbin'} height="190"width="200" />
					</Sobject>
					<Sobject name={'clock'} xPos={750} yPos={30}>
						<img src={Clock} height="180" width="180" />
					</Sobject>
					<Sobject name={'sticker'} xPos={180} yPos={210}>
						<img src={Sticker} height="100" width="100" />
					</Sobject>
					<Sobject name={'teapot'} xPos={1090} yPos={285}>
						<img src={Food} height="90" width="130"/>
					</Sobject>
					<Sobject name={'spoon'} xPos={1125} yPos={248}>
						<img src={Spoon} className={'spoon'} height="70" width="100"/>
					</Sobject>
					<Spot height={200} width={200} color={'rgba(0,0,0,0.97)'} />
					<Sobject name={'score'} xPos={1360} yPos={640}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'score'} xPos={40} yPos={640}>
						<h1  className={'score'}>Timer-</h1>
					</Sobject>
					<Sobject name={'score'} xPos={150} yPos={678}>
						<Countdown date={Date.now() + 276000}>
                         <Gameover1 score={this.state.count} />
                         </Countdown>

					</Sobject>
					
				    



				</Scene>
			)
	}
}
