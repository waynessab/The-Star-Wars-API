/* API Capaz de listar as informações de uma pessoa

*/
let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthyear = document.querySelector('#birth-year')
let homeworld = document.querySelector('#homeworld')
let haircolor = document.querySelector('#haircolor')
let eyecolor = document.querySelector('#eye-color')
let gender = document.querySelector('#gender')
let films = document.querySelector('#films')

function GetInfo(){
	let randomNumber = Math.floor((Math.random()*81)+1) /*apenas 82 personagens de star wars*/
	let apiUrl = 'https://swapi.dev/api/people/' + randomNumber
	
	axios.get(apiUrl).then(function(response){
	updateInfo(response.data)
})
}
function updateInfo(data){
	name.innerText = 'Nome: ' + data.name
	height.innerText = 'Altura: ' + data.height
	mass.innerText = 'Peso: ' + data.mass
	birthyear.innerText = 'Ano de nascimento: ' + data.birth_year
	homeworld.innerText = 'Planeta Natal: ' + data.homeworld
	haircolor.innerText = 'Cor do cabelo: ' + data.haircolor
	eyecolor.innerText = 'Cor dos olhos: ' + data.eyecolor
	gender.innerText = 'Genero: ' + data.gender
    films.innerText = 'Filmes: ' + data.films

        
}
button.addEventListener('click', GetInfo)
