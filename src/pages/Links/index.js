import './links.css';
import {useState, useEffect } from 'react';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {getLinksSave} from '../../services/storeLinks'
import Modal from '../../components/Modal';
import Modal from '../../components/Modal';


export default function Links(){
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink')
      
       if(result.length === 0){

        alert('Lista vazia');
       }
        setMyLinks(result);
      
    }
    getLinks();
   }, [])

  function handleOpenLink(Link){
    setData(Link)

  }

  return(
    <div className="containerLinks">
      <div className="headerLinks">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff"/>
        </Link>
        <h1>Meus Links</h1>
      </div>
      {myLinks.map(Link => (
          <div key={Link.id} className="itemLinks">
            <button className="link" onClick={ () => handleOpenLink(Link)}>
              <FiLink size={18} color="#fff"/>{Link.long_url}
            </button>
            <button className="deletelink">
              <FiTrash size={24} color="#ff5454"/>
            </button>
          </div>
        ))}
        {showModal && (
          <LinkItem 
            closeModal={ () => setShowModal(false)}
          />
        )}
    </div>

  )

}