
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

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



export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
