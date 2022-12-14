import React from 'react'
import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users } from '../user';  
import { Space } from 'antd';


/* simple search
   {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user) => (
    <li key={user.id} className='listItem'>{user.first_name}</li>
))}
*/

const Directory = () => {

    const [query,setQuery] = useState('');

  const search = (data) => {
    return data.filter((item) =>
    item.first_name.toLowerCase().includes(query) ||
    item.last_name.toLowerCase().includes(query) || 
    item.address.toLowerCase().includes(query)  ||
    item.rank.toLowerCase().includes(query)||
    item.email.toLowerCase().includes(query)
    );
  };

  return (
    <Space>
        <div className="app">
        <input
         className='search'
         placeholder='Search names,address,no...'
         type='text'
         onChange={(e) => setQuery(e.target.value)}
         />
        <ul className='list'>
        <Table data={search(Users)}/>
        </ul>
        
    </div>
    </Space>
  )
}

export default Directory