/*API capaz de listar as informações de uma planeta aleatorio*/
let button = document.querySelector('#button')
let name = document.querySelector('#name')
let rotationperiod = document.querySelector('#rotation-period')
let orbitalperiod = document.querySelector('#orbital-period')
let diameter = document.querySelector('#diameter')
let climate = document.querySelector('#climate')
let gravity = document.querySelector('#gravity')
let terrain = document.querySelector('#terrain')
let population = document.querySelector('#population')


function GetInfo(){
	let randomNumber = Math.floor((Math.random()*59)+1) /*apenas 60 planetas em star wars*/
	let apiUrl = 'https://swapi.dev/api/planets/' + randomNumber
	
	axios.get(apiUrl).then(function(response){
	updateInfo(response.data)
})
}
function updateInfo(data){
	name.innerText = 'Nome: ' + data.name
	diameter.innerText = 'Diametro: ' + data.diameter
    rotationperiod.innerText = 'Periodo de rotação: ' + data.rotationperiod
	orbitalperiod.innerText = 'Período orbital: ' + data.orbitalperiod
	diameter.innerText = 'Diametro: ' + data.diameter
	climate.innerText = 'Clima: ' + data.climate
	gravity.innerText = 'Gravidade: ' + data.gravity
    terrain.innerText = 'Terreno: ' + data.terrain
    population.innerText = 'População: ' + data.population
}
button.addEventListener('click', GetInfo)