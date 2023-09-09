import React from 'react';
import Card from './Cards';

const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=9';
const responce = await fetch(url);
const data = await responce.json();
const arrData = [data];

const Service = () => {
     return (
          <> 
               
               <div className='my-5' style={{backgroundColor: '#53ba91'}}>
                    <h1 className='text-center'>Our Products</h1>
               </div>
               <div className='container-fluid mb-5'>
                    <div className='row '>
                         <div className='col-10 mx-auto'>
                              <div className='row gy-4'>
                    {
                         arrData[0].map((val,ind)=>{
                              return (
                                   <Card key={ind} name={val.name} imgsrc={val.image_url} title={val.description} />
                              )
                         })
                    }
                              </div>

                         </div>
                    </div>
                    
               </div>
               
          </>
     )
}

export default Service;