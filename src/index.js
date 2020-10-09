console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", function(e){

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    const renderDogs = dogs => {
        for(const dog of dogs){
            renderDog(dog)
        }
    }
})