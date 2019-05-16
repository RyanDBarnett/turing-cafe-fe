const fetchData = (url, options) => {
  return fetch(url, options)
  .then(response => {
    return response.json();
  })
  .catch(error => {
    console.log(error);
  })
}

export default fetchData;