
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
function getNewPostId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getPostDetails = (idPost) =>
  fetch(`${api}/posts/${idPost}`, { headers })
    .then(res => res.json());


export const getPosts = (category,sortBy) =>{
  let cat='';
  if(category && category!==''){
    cat='/'+category;
  }
  let sort='id'
  if(sortBy && sortBy!==''){
    sort=sortBy
  }
  return fetch(`${api}${cat}/posts`, { headers })
    .then(res => res.json())
   .then(data=> data.sort((a,b) => a[sort]>b[sort]));
}

export const addPost = (post) =>{
console.log('NewsApi addPost post '+post);
 if(!post.id){
   post.id=getNewPostId();
   post.timestamp=Date.now();
 }
 return fetch(`${api}/posts`, {
   method: 'POST',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(post)
 }).then(res => res.json());
}


export const editPost = (post) =>{
console.log('NewsApi edit  post '+post);
 return fetch(`${api}/posts/${post.id}`, {
   method: 'PUT',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(post)
 }).then(res => res.json());
}

export const deletePost = (idPost) =>{
console.log('Delete post '+idPost);
 return fetch(`${api}/posts/${idPost}`, {
   method: 'DELETE',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   }
 }).then(res => res.json());
}

export const votePost = (idPost,option) =>{
console.log('vote post '+idPost+' option====>'+option);
 return fetch(`${api}/posts/${idPost}`, {
   method: 'POST',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({"option":option})
 }).then(res => res.json());
}

export const getPostComments = (idPost) =>
  fetch(`${api}/posts/${idPost}/comments`, { headers })
    .then(res => res.json());

export const addComment = (com) =>{
console.log('NewsApi addcomment com '+com);
 if(!com.id){
   com.id=getNewPostId();
   com.timestamp=Date.now();
 }
 return fetch(`${api}/comments`, {
   method: 'POST',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(com)
 }).then(res => res.json());
}

export const voteComment = (idComment,option) =>{
console.log('vote comment '+idComment+' option====>'+option);
 return fetch(`${api}/comments/${idComment}`, {
   method: 'POST',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({"option":option})
 }).then(res => res.json());
}
export const deleteComment = (idComment) =>{
console.log('Delete comment '+idComment);
 return fetch(`${api}/comments/${idComment}`, {
   method: 'DELETE',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   }
 }).then(res => res.json());
}

export const editComment = (comment) =>{
console.log('NewsApi edit  comment '+comment);
 return fetch(`${api}/comments/${comment.id}`, {
   method: 'PUT',
   headers: {
     ...headers,
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(comment)
 }).then(res => res.json());
}
export const getComment = (idComment) =>
  fetch(`${api}/comments/${idComment}`, { headers })
    .then(res => res.json());
