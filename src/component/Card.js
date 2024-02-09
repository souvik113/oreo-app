import React from 'react'



export default function card(pk) {
  
  return (
    <div>
      <div className={`card container bg-${pk.style}`}>
        <img src={pk.image} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{pk.tittle}</h5>
         <p className="card-text">{pk.description}</p>
         <a href={pk.url} target='_blank'  className="btn btn-primary btn-sm">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}
