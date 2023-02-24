import React from 'react';
import { useEffect } from 'react';
import "../styles/dashboard.css";


const Dashboard = () => {

  return (
    <div className='packages_table'>
      <div className="title_table">
        <div className='dashboard_table'><h3>Dashboard</h3></div>
        <div className='btn_table'><button type="button">ADD PLAN</button></div>
      </div>
      <div className='table-table'>
      <table className='drugs-table'>
         
        <tr className='table-heading'>
          <th>ID</th>
          <th>drug name</th>
          <th>Manufacturer</th>
          <th>Supplier</th>
          <th>NDC</th>
          <th>Expiration date</th>
          <th>Quantity</th>
          <th>Unit price</th>
          <th>Actions</th>
        </tr>
        
        <tr className='table-rows'>
          <td>id123</td>
          <td>Dname</td>
          <td>Manu</td>
          <td>sup</td>
          <td>NDC</td>
          <td>Ex</td>
          <td>Qual</td>
          <td>up</td>
          <td><div className='action-buttons'>
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn'>delete</button>
              </div>
          </td>
     
       </tr>
       <tr className='table-rows'>
          <td>id123</td>
          <td>Dname</td>
          <td>Manu</td>
          <td>sup</td>
          <td>NDC</td>
          <td>Ex</td>
          <td>Qual</td>
          <td>up</td>
          <td><div className='action-buttons'>
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn'>delete</button>
              </div>
          </td>
     
       </tr>
       <tr className='table-rows'>
          <td>id123</td>
          <td>Dname</td>
          <td>Manu</td>
          <td>sup</td>
          <td>NDC</td>
          <td>Ex</td>
          <td>Qual</td>
          <td>up</td>
          <td><div className='action-buttons'>
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn'>delete</button>
              </div>
          </td>
     
       </tr>
       <tr className='table-rows'>
          <td>id123</td>
          <td>Dname</td>
          <td>Manu</td>
          <td>sup</td>
          <td>NDC</td>
          <td>Ex</td>
          <td>Qual</td>
          <td>up</td>
          <td><div className='action-buttons'>
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn'>delete</button>
              </div>
          </td>
     
       </tr>
 
</table>
      </div>
      <div className='scroll-table'>
      <button id="slideLeft" type="button">Slide left</button>
      <button id="slideRight" type="button">Slide right</button>
      </div>
    </div>
  )
}

export default Dashboard