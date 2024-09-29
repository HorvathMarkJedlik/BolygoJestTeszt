
planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};


module.exports = function PlanetAgeName(planetName, age) {
    let ageinSec =  age * 31557600
    let planetYear = planets[planetName]
    let personAgeOnPlanet = planetYear * ageinSec / 31557600

    return personAgeOnPlanet;

}


