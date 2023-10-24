//styles
import "./Home.css"

//router
import { Link } from "react-router-dom"



export default function Home() {
	return (
		<div className='home-container'>
			<div className='home-container-box box-1'>
				<Link className="box-title" to='/gallery'>
					<h2>galeria</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ex?</p>
				</Link>
			</div>
			<div className='home-container-box box-2'>
				<Link className="box-title">
					<h2>miejsca</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ex?</p>
				</Link>
			</div>
			<div className='home-container-box box-3'>
				<Link className="box-title" to='/about'>
					<h2>o mnie</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ex?</p>
				</Link>
			</div>
		</div>
	)
}
