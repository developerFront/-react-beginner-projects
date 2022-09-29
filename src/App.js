import React, { useState, useEffect } from 'react';
import './index.scss';
import { Collection } from './Collection';

function App() {
  const [collections, setCollection] = useState([]);

  useEffect(() => {
    fetch('https://6335efb08aa85b7c5d25c698.mockapi.io/photo_collection')
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      });
  }, []);

  return (
    <div className='App'>
      <h1>Моя коллекция фотографий</h1>
      <div className='top'>
        <ul className='tags'>
          <li className='active'>Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className='search-input' placeholder='Поиск по названию' />
      </div>
      <div className='content'>
        {collections.map((item) => (
          <Collection name={item.name} images={item.photos} />
        ))}
      </div>
      <ul className='pagination'>
        <li>1</li>
        <li className='active'>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
