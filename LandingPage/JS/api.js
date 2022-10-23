const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0429c09c3fmsh951013d8394ed04p1e271bjsn57955d582930',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

fetch("https://weatherapi-com.p.rapidapi.com/future.json?q=Buenos%20Aires&dt=2022-12-25", options)
    .then(res => res.json())
    .then(Response => {
        console.log(Response)
    })
