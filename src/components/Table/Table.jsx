import React from 'react'


const Table = ({data}) => {

 
  return (
    <>
    <table className="table table-bordered ">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Rank</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {data.map((item) => (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.rank}</td>
          <td>{item.mobile}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
        </tr>
        ))}          
      </tbody>
    </table>
    </>
  );
};

export default Table;