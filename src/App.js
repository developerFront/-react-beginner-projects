import React, { useState, useEffect } from 'react';
import './index.scss';
import { Collection } from './Collection';

const categories = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

function App() {
  const [collections, setCollection] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const category = categoryId ? `category=${categoryId}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6335efb08aa85b7c5d25c698.mockapi.io/photo_collection?page=${page}&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className='App'>
      <h1>Моя коллекция фотографий</h1>
      <div className='top'>
        <ul className='tags'>
          {categories.map((categorie, index) => (
            <li
              key={index}
              onClick={() => setCategoryId(index)}
              className={categoryId === index ? 'active' : ''}
            >
              {categorie.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='search-input'
          placeholder='Поиск по названию'
        />
      </div>
      <div className='content'>
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Collection
                key={index + item.name}
                name={item.name}
                images={item.photos}
              />
            ))
        )}
      </div>
      <ul className='pagination'>
        {[...Array(3)].map((_, i) => (
          <li
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
