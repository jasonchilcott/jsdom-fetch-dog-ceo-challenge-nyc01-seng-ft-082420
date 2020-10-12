console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", function(e){

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    const renderDogs = dogs => {
        //console.log(dogs)
        for(const dog of dogs){
            renderDog(dog)
        }
    }

    function renderDog(dog){
        const dogLi = document.createElement('li')

        dogLi.innerHTML = `
            
            <img alt="" src="${dog}" />
            
        `
    
        const dogList = document.querySelector("#dog-image-container")
    
        dogList.append(dogLi)
    }

    const renderBreeds = breeds => {
        for (const breed in breeds ) {
            renderBreed(breed);
        }
    }

    const renderBreed = breed => {
        const breedList = document.querySelector("#dog-breeds")
        const breedLi = document.createElement('li')
        breedLi.classList.add('breed-li')
        breedLi.innerText = breed
        breedList.appendChild(breedLi)
    }

    const getDogs = () => {
        fetch(imgUrl)
        .then(response => response.json())
        .then(dogs => renderDogs(dogs.message))
    }

    const getBreeds = () => {
        fetch(breedUrl)
        .then(response => response.json())
        .then(breeds => {
            renderBreeds(breeds.message)
        })
    }

    function clickHandler(){
        //const breedLi = document.querySelectorAll(".breed-li")
        //const breedList = document.querySelector("#dog-breeds")
        //const breedLi = document.getElementsByClassName("breed-li")
        document.addEventListener('click', function(e){
            console.log(e.target)
            if (e.target.matches(".breed-li") ){
                e.target.style.color = "red" 
        }
        })
    }

    getDogs()
    getBreeds()
    clickHandler()




    

})