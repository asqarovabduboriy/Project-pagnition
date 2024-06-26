import React from 'react'
import './Users.css'
import user1 from '../../assets/imgs/user1.svg'
import user2 from '../../assets/imgs/user2.svg'

const Users = () => {
    const users = [
        {
            id: 1,
            name: 'Hamza Faizi',
            title:'Don’t waste time, just order! This is the best website to puschase smart watches.',
            img:user1
        }
        ,
        {
            id: 2,
            name: 'Hafiz Huzaifa',
            title:'I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
            img:user2
        }
    ]

    let user = users.map(user => (
        <div className="user" key={user.id}>
        <div className='user_img'>
           <img src={user.img} alt="" /> 
        </div> 
        <div className="user_info">
            <h3>{user.name}</h3>
            <p>{user.title}</p>
        </div>
    </div>
    ))
    
  return (
    <>
     <div className="container">
            <div className="wrapper_users">
            {user}
            </div>
     </div>
    </>
  )
}

export default Users