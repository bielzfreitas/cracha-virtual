//mudando link com JS
const linksSocialMedia = {
  github: 'bielzfreitas',
  youtube: 'youtube',
  facebook: 'facebook',
  instagram: 'instagram',
  twitter: 'twitter'
}

function changeSocialMediaLinks() {
  //loop
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

//executando função
changeSocialMediaLinks()

//buscando perfil do git hub
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //pega a url da api e retorna um json
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

//executando função
getGitHubProfileInfos()

/*
 * -> fetch pega o que a url
 * responder e retorna
 * um json
 *
 * -> .then() é uma promise
 * ou seja, uma promessa de
 * pegar alguma coisa
 *
 * -> o fetch guarda a
 * resposta e as promises
 * que retornam
 *
 * -> arrow function é uma
 * forma contraida da
 * funcao. (response =>)
 *
 * ex. argumento => {}
 *
 * cria uma funcao anonima
 *
 *
 * -> o fetch pega a url
 * de qualquer jeito por
 * nao saber que e um
 * json
 * passa pro then que
 * converte em json e
 * o ultimo then que
 * armazena a resposta
 *
 * -> data armazena a res
 * em json
 * ele pega os elementos
 * do html e substitui os
 * dados
 *
 * -> userName.textContent = data.name
 * substitui o conteudo do html
 *
 *
 */
