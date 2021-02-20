import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from  'lodash';
import { useDispatch } from "react-redux";


export const fetchPostsAndUsers = ()=>async (dispatch,getState) =>{
       await  dispatch(fetchPosts());  
       const userIds = _.uniq(_.map(getState().posts,'userId'));
        userIds.forEach(id => dispatch(fetchUser(id)))
}



export const fetchPosts = ()=> async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({type: 'FETCH_POSTS', payload : response.data })
};

export const fetchUser = id => async dispatch =>{
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch ({type:'FETCH_USER', payload: response.data});
};

// /////memoized version of  extracting multiple users with same user
// export const fetchUser = (id) =>async dispatch =>{
//         _fetchUser(id,dispatch);
// };
// // slide 282 udemy
// const _fetchUser = _.memoize( async (id,dispatch)=>{
//         const response = await jsonPlaceholder.get(`/users/${id}`);
             
//         dispatch({type:'FETCH_USER',payload: response.data});
// });
