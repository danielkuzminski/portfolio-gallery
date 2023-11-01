//styles
import { useState } from "react"
import "./Navbar.css"

//router
import { NavLink } from "react-router-dom"

export default function Navbar() {

	const [ham, setHam] = useState(false)

	const handleBurger = () => {
		setHam(!ham)
	}

	return (
		<nav className='navigation'>
			<div className="logo-container">
				<NavLink className='logo' to='/'>logo</NavLink>
			</div>
			<div className="nav-links-container">
				<ul className={ham ? 'nav-list' : 'hidden'}>
					<li>
						<NavLink className='nav-link' to='/'>Domowa</NavLink>
					</li>
					<li>
						<NavLink className='nav-link' to='/gallery'>Galeria</NavLink>
					</li>
					<li>
						<NavLink className='nav-link' to='/about'>O Mnie</NavLink>
					</li>
					<li>
						<NavLink className='nav-link' to='/add'>dodaj</NavLink>
					</li>
				</ul>
			</div>
			<div className={ham ? "hamburger2" : "hamburger"} onClick={handleBurger}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	)
}
