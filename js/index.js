function submitWithAlert() {
    let sum = 0;
    let count = document;
    const name = document.getElementById("namenamename").value;

    const movies = document.getElementsByName("movie");
    movies.forEach(movie => {
        if(movie.checked) {
            sum++;
        }
    })
    //
    console.log(1);
    
    alert(name + "님, 저와 " + sum + "개의 취향이 같으시네요!");
}
