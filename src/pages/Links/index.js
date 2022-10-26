import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default function Links(){
  return(
    <div className="containerLinks">
      <div className="headerLinks">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff"/>
        </Link>
        <h1>Meus Links</h1>
      </div>
      <div className="itemLinks">
        <button className="link">
          <FiLink size={18} color="#fff"/>https://google.com.br
        </button>
        <button className="deletelink">
          <FiTrash size={24} color="#ff5454"/>
        </button>
      </div>
      <div className="itemLinks">
        <button className="link">
          <FiLink size={18} color="#fff"/>https://google.com.br
        </button>
        <button className="deletelink">
          <FiTrash size={24} color="#ff5454"/>
        </button>
      </div>
    </div>
  )

}