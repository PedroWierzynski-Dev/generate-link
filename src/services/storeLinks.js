// Buscar links salvos
export async function getLinksSave(key){
	const myLinks = await localStorage.getItem(key)
	let linksSaves = JSON.parse(myLinks) || [];

	return linksSaves;
}


//Salvar link no storage
export async function saveLink(key, newLink){
	let linksStored = await getLinksSave(key);


	//Se tiver um link salvo, ele não permite duplicar
	const hasLink = linksStored.some( Link => Link.id === newLink.id)

	if(hasLink){
		console.log('Esse link ja existe');
		return;
	}

	//Adicionar novo link na lista
	linksStored.push(newLink)
	await localStorage.setItem(key, JSON.stringify(linksStored))
	console.log('link salvo com sucesso');
}


//Deletar links
export function deleteLink(Links, id){
	let myLinks = Links.filter( item => {
		return(item.id !== id)
	})

	localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
	alert('LINK DELETADO COM SUCESSO')

}