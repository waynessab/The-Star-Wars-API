/*e. API capaz de listar as informações de uma nave*/
let button = document.querySelector('#button')
let name = document.querySelector('#name')
let model = document.querySelector('#model')
let monufacturer = document.querySelector('#manufacturer')
let costincredits = document.querySelector('#cost-in-credits')
let length = document.querySelector('#length')
let maxatmospheringspeed = document.querySelector('#max-atmosphering-speed')
let crew = document.querySelector('#crew')
let passengers = document.querySelector('#passangers')
let cargocapacity = document.querySelector('#cargo-capacity')
let consumables = document.querySelector('#consumables')
let starshipclass = document.querySelector('#starship-class')
let pilots = document.querySelector('#pilots')



function GetInfo(){
	let randomNumber = Math.floor((Math.random()*35)+1) /*apenas 36 naves em star wars*/
	let apiUrl = 'https://swapi.dev/api/starships/' + randomNumber
	
	axios.get(apiUrl).then(function(response){
	updateInfo(response.data)
})
}
function updateInfo(data){
	name.innerText = 'Nome: ' + data.name
	model.innerText = 'Modelo: ' + data.model
    manufacturer.innerText = 'Fabricante:	' + data.manufacturer
	costincredits.innerText = 'Custo de crédito: ' + data.costincredits
    length.innerText = 'Comprimento: ' + data.length
	maxatmospheringspeed.innerText = 'velocidade máxima da atmosfera: ' + data.maxatmospheringspeed
	crew.innerText = 'Equipe técnica: ' + data.crew
    passangers.innerText = 'Passageiros: ' + data.passangers
    cargocapacity.innerText = 'Capacidade de carga: ' + data.cargocapacity
	consumables.innerText = 'Consumiveis: ' + data.consumables
    starshipclass.innerText = 'Classe: ' + data.starshipclass
    pilots.innerText = 'Piloto: ' + data.pilots

}
button.addEventListener('click', GetInfo)