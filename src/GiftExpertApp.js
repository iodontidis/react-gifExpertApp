import React , {useState}from 'react';
import ReactDOM from 'react-dom';
import { AddCategory } from './Component/AddCategory';
import { GifGrid } from './Component/GifGrid';

 const GiftExpertApp = () =>{

    //const categories = ['Dragon Ball', 'Sin Chan', 'Doraemon'];
    const [categories, setCategories] = useState(['Dragon Ball'])

  //  const hancdleAdd= () =>{
        // setCategories([...categorie, 'Oliver y Benji'])
  //      setCategories(categorie =>[...categorie, 'Oliver y Benji'])
   // }

    
    return(

        <>
            <h2>GiftExpertApp</h2>
           
            <AddCategory setCategories= { setCategories }/>
            <hr/>
            <ol>
                { 
                categories.map( category =>
                       <GifGrid 
                        key={ category}
                        category={ category} />
                    )
                }
               
               
            </ol>
        </>
    )

}

export default GiftExpertApp   