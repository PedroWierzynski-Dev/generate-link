import { FiLink, FiArrowDownCircle } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';


export default function Home(){
  return(
    <div className="containerHome">
      <div className="logo">
        <img src="/logo.png" alt="Logo Generate Link"/>
        <h1>Encurte seu link para compartilhar</h1>
        <span>Cole seu link aqui <FiArrowDownCircle size={24} color="#fff"/></span>
      </div>
      <div className="areaInput">
        <div>
          <FiLink size={25} color="#fff"/>
          <input placeholder="Cole seu link aqui..." />
        </div>
        <button>Encurtar Link</button>
      </div>
      <Menu/>
    </div>

 
  )

}