fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    //method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGU3MDFkYjNmNTUyZTBhNTFjMDlkNDMxMzdiZDI3MCIsIm5iZiI6MTY4ODczMDA1NC44NzgsInN1YiI6IjY0YTdmOWM2OTY1MjIwMDExZGYwOGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YhX8YDb0OF8ovacEzdWjUTSWr0xZLaZOItyxsnzgVMI'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results)
    })