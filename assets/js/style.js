fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=963d1bc1e72f2740bccef69a48072318")
    .then(response => response.json())
    .then(data => {

        console.log(data)
    })

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=40.3357&lon=-75.926&appid=963d1bc1e72f2740bccef69a48072318")
    .then(response => response.json())
    .then(data => {

        console.log(data)
    })