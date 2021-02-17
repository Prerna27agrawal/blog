import axios from "axios"
import { act } from "react-dom/test-utils"

export default (state=[],action) =>{
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default :
          return state;
    }

    
    
    
    // bad return
    // return document.querySelector('iugdu');
    // also bad return 
    // return axios.get('/posts')
}