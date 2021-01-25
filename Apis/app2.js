/* API Capaz de listar o nome de todos os personagens  aleatoriamente*/
let button = document.querySelector('#button')
let name = document.querySelector('#name')

function GetInfo(){
	let randomNumber = Math.floor((Math.random()*81)+1) /*apenas 82 personagens de star wars*/
	let apiUrl = 'https://swapi.dev/api/people/' + randomNumber
	
	axios.get(apiUrl).then(function(response){
	updateInfo(response.data)
})
}
function updateInfo(data){
	name.innerText = 'Nome: ' + data.name
}
button.addEventListener('click', GetInfo)
