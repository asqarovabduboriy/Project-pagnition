import React from "react";
import './Main.css'
import img1 from '../../assets/imgs/saot2.svg'
import img2 from '../../assets/imgs/soat3.svg'
import img3 from '../../assets/imgs/saot4.svg'

const Main = () => {
  const data = [

    {
      id:1,
      title:'Apple is one of the most famous smart watches providing company.',
      brnad:'Apple',
      img:img1
    },
    {
      id:2,
      title:'Xiaomi smart watches are produced by MI company.',
      brnad:'Xiaomi',
      img:img2
    },
    {
      id:3,
      title:'FitBit smart watches are best for there health and fitness features.',
      brnad:'FitBit',
      img:img3
    }
  ]

  let pro = data.map((item)=>(
    <div className="card" key={item.id}>
        <div className="img">
               <img src={item.img} alt="" />
        </div> 
        <div className="title">
            <h3>{item.brnad}</h3>
            <p>{item.title}</p>
        </div>
    </div>
  ))
  return (
    <>
      <div className="container">
        <div className="wrapper_watch">
               {pro}
        </div>
      </div>
    </>
  );
};

export default Main;
