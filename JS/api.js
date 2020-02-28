//Primeros 4 resultados predeterminados
function setFourResults(imageid, gifid) {
    document.getElementById(imageid).src = 'https://i.giphy.com/media/' + gifid + '/giphy.webp'
}

function giveFourGif(tag, imageid) {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=MOE8e6uGerdha1qiDoKZUG8d26VfSZc8&tag=' + tag)
        .then((response) => {
            return response.json()
        }).then((json) => {
            console.log(json);
            setFourResults(imageid, json.data.id)

        })
}

giveFourGif('cats', 'gify1')
giveFourGif('simpsons', 'gify2')
giveFourGif('futurama', 'gify3')
giveFourGif('gameofthrones', 'gify4')