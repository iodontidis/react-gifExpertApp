import { useState , useEffect} from "react"
import { getGifs } from '../Helpers/getGif'



export const useFecthGifs = ( category ) =>{
    const [state, setState] = useState({
        data:[],
        loading: true

    });

    useEffect(() =>{
        getGifs(category)
          .then( imgs =>{

                setState({
                    data: imgs,
                    loading: false
                });            
          });
      }, [ category])    

    


    return state; // {data:[], loading true}


}
