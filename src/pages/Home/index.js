import { FiLink, FiArrowDownCircle } from 'react-icons/fi';
import './home.css';
import { useState } from 'react';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';


export default function Home(){
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] =  useState({});

  async function handleShortLink(){
    //    setShowModal(true);
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data);

      setLink('');
    }catch{
      alert('OPS algo deu errado');
      setLink('');
    }
  }

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
          <input value={link} onChange={(e) => setLink(e.target.value)}  placeholder="Cole seu link aqui..." />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu/>
      { showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
    </div>

 
  )

}