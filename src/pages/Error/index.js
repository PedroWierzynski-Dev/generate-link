import './error.css';
import {Link} from 'react-router-dom';

export default function Error(){
	return (

		<div className="containerError">
			<img src="./error.jpg"/>
			<h1>ERROR 404</h1>
			<h3>Página não encontrada</h3>
			<Link to="/">
				Voltar para home
			</Link>
		</div>

	)

}