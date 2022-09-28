import React from 'react';
import { useState } from 'react';
import './index.scss';

const Modal = ({ modal, toggleModal, children }) => (
  <div className={`overlay animated ${modal ? 'show' : ''}`}>
    <div className='modal'>
      <svg onClick={toggleModal} height='200' viewBox='0 0 200 200' width='200'>
        <title />
        <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
      </svg>
      {children}
    </div>
  </div>
);

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className='App'>
        <button onClick={toggleModal} className='open-modal-btn'>
          ✨ Открыть окно
        </button>
      </div>
      <Modal modal={modal} toggleModal={toggleModal}>
        <img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' />
        <h3>Модальное окно</h3>
      </Modal>
    </>
  );
}

export default App;
