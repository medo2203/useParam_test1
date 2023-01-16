import React from 'react'
import data from './Cards'
import "./Cards.css"
import {Routes, Route, Link} from "react-router-dom"
import {useParams} from "react-router-dom"
function Cards() {
    function Product(){
        let { id } = useParams();
        const p = data.find((e)=>id==e.id)
        return (
            <>
                <div className="col" style={{width:"100%"}}>
                    <div style={{display:"flex",justifyContent:"space-betwen" ,margin:"50px"}} >
                        <img className="bd-placeholder-img mt-2" src={p.thumbnail}/>
                            <div className="card-body">
                                <p className="card-title">{p.title}</p>
                                <p className="card-text">{p.price}</p>
                                <div className="d-flex justify-content-between alignitems-center">
                                    <div className="btn-group">
                                        <button type="button" class="btn btn-outline-secondary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
  return (
    <>
    <div className='cards-cnt'>
      {data.map((elem)=>{
          return (
              <>
        <Routes>
            <Route path='/' element={
                <div className="col">
                    <div className="card shadow-sm">
                        <Link to={`/product/${elem.id}`}><img className="bd-placeholder-img card-img-top" src={elem.thumbnail}/></Link>
                            <div className="card-body">
                                <p className="card-title">{elem.title}</p>
                                <p className="card-text">{elem.price}</p>
                                <div className="d-flex justify-content-between alignitems-center">
                                    <div className="btn-group">
                                        <button type="button" class="btn btn-outline-primary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            }>
            </Route>
        </Routes>
      </>
        )
      })}
    </div>
            <Routes>
                <Route path='/product/:id' element={<Product/>}/>
                
                
            </Routes>
      </>
  )
}

export default Cards
