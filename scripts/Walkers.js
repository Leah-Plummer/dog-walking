import { getWalkerCities, getWalkers, getCities } from "./database.js"


const walkersList = getWalkers()
const allWalkerCities = getWalkerCities()
const cityNames = getCities()


document.addEventListener("click", (clickEvent) => {
    
    
    const itemClicked = clickEvent.target
    
    if (itemClicked.id.startsWith("walker")) {

            const [, walkerId] = itemClicked.id.split("--")
            
            for (let walker of walkersList){
                let thisWalkerCities = []
                
                if (walker.id === parseInt(walkerId)){
                    for (const walkerCity of allWalkerCities ) {
                        if (walkerCity.walkerId === walker.id) {
                            thisWalkerCities.push(walkerCity)
                        }
                    }
                    
                    let cityString = ""
                    let cityStringArray = []
                    for (let cityObject of thisWalkerCities) {
                        for(let cityName of cityNames){
                        if(cityObject.cityId === cityName.id ){
                            cityStringArray.push(cityName.name)
                        }
                    }
                }
                cityString = cityStringArray.join(" and ")
                window.alert(`${walker.name} services ${cityString}`)
                }
            } 
            
        }

        })
        
            
    
 



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkersList) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}




