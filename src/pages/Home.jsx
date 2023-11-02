//styles
import "./Home.css"

//router
import { Link } from "react-router-dom"

//assets
import pic1 from '../assets/1690188464493.jpg'
import pic2 from '../assets/1690150138770.jpg'
import pic3 from '../assets/1690188464058.jpg'


export default function Home() {
	return (
		<div className='home-container'>
			<div className="hero">
				<div className="intro">
					<h1 className="intro-title">
						Lorem ipsum <span className="highlighted">dolor</span>
					</h1>
					<p className="intro-text">
						Lorem ipsum dolor sit amet <span className="highlighted">consectetur</span> adipisicing elit. Assumenda nostrum quidem ad, quia itaque nemo.
					</p>
					<Link to='/gallery'>
						<button className="cta">check</button>
					
					</Link>
				</div>
				<div className="wallpaper">
					<img className="wallpaper-pic pic1" src={pic1} alt="malta city" />
					<img className="wallpaper-pic pic2" src={pic2} alt="malta city" />
					<img className="wallpaper-pic pic3" src={pic3} alt="malta city" />
				</div>
			</div>
		</div>
	)
}
