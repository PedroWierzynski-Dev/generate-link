import './menu.css';
import {BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu(){
	return (
		<div className="menu">
			<a className="social" href="https://www.instagram.com/pedrowserra/">
				<BsInstagram color="#fff" size={24}/>
			</a>
			<a className="social" href="https://www.facebook.com/kojbvng">
				<BsFacebook color="#fff" size={24}/>
			</a>
			<a className="social" href="https://github.com/PedroWierzynski-Dev">
				<BsGithub color="#fff" size={24}/>
			</a>
			<Link className="itemMenu" to="/links">Meus Links</Link>
		</div>
	)
}