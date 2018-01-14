
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
   body: JSON.stringify({ post })
 }).then(res => res.json());
}
