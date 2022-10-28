import './links.css';
import {useState, useEffect } from 'react';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {getLinksSave} from '../../services/storeLinks'
import Modal from '../../components/Modal';
import {deleteLink} from '../../services/storeLinks'



export default function Links(){
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink')
      
       if(result.length === 0){

         setEmptyList(true)
       }
        setMyLinks(result);
      
    }
    getLinks();
   }, [])

  function handleOpenLink(Link){
    setData(Link);
    setShowModal(true);

  }

  async function handleDeleteLink(id){
   const result =  await deleteLink(myLinks, id);

   if(result.length === 0){
    setEmptyList(true)
   }

   setMyLinks(result)
  }

  return(
    <div className="containerLinks">
      <div className="headerLinks">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff"/>
        </Link>
        <h1>Meus Links</h1>
      </div>
      {emptyList && (
          <div className="itemLink">
            <h2 className="emptyText">Sua lista está vazia...</h2>
          </div>
      )}
      {myLinks.map(Link => (
          <div key={Link.id} className="itemLinks">
            <button className="link" onClick={ () => handleOpenLink(Link)}>
              <FiLink size={18} color="#fff"/>{Link.long_url}
            </button>
            <button className="deletelink" onClick={ () => handleDeleteLink(Link.id)}>
              <FiTrash size={24} color="#ff5454"/>
            </button>
          </div>
        ))}
        {showModal && (
          <Modal 
            closeModal={ () => setShowModal(false)}
            content={data}
          />
        )}
    </div>

  )

}