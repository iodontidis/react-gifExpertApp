import React from 'react'
import { useFecthGifs } from '../Hooks/useFecthGifs'

import GifItem from './GifItem'

export const GifGrid = ({ category}) => {   
      
      const { data:images  , loading} = useFecthGifs(category);
    
     
      console.log(loading)
   
  
   
    return (
      <>
        <h3 className="animate_animated animate__fadeIn">{  category }</h3>
     
        { loading && <p className="animate_animated animate__flash">Loading</p> }

       <div className='card-grid'>      
            { 
              images.map( img => (
                <GifItem 
                key={img.id}
                {...img}/>
              ))
          }        
        </div>
    </>
  )
}
