//styles
import "./Navbar.css"

//router
import { NavLink } from "react-router-dom"

export default function Navbar() {
	return (
		<nav className='navigation'>
			<span>
				<NavLink className='nav-link logo' to='/'>logo</NavLink>
			</span>
			<ul className='nav-list'>
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
		</nav>
	)
}
