window.initialise = function () {
  document.getElementById('date').valueAsDate = new Date()
  window.getInfo('home')
  window.resizeImg()
}

window.resizeImg = function () {
  const width = window.innerWidth * 0.6
  document.getElementsByTagName('img')[0].setAttribute('width', width.toString())
}

window.Element.prototype.reduceToNothing = function () {
  const intervalId = setInterval(() => {
    if(this.value.length == 0) clearInterval(intervalId)
    else this.value = this.value.substr(0, this.value.length - 1)
  }, 50)
}

window.addEventListener('resize', resizeImg, true)

window.addEventListener('DOMContentLoaded', () => {
  // define all the functions used by inline script on the onclick and onload html attributes
  this.getInfo = function (loc) {
    document.getElementById('points').innerHTML = ''
  
    if(loc === 'home') document.getElementById('interesting').innerText = ''
    else document.getElementById('interesting').innerText = 'Interesting facts:'
  
    for (const point of info[loc].points) {
      const el = document.createElement('li')
      el.innerText = point
  
      document.getElementById('points').appendChild(el)
    }
  
    document.getElementsByTagName('img')[0].setAttribute("src", info[loc].img)

    document.getElementById('text').innerHTML = info[loc].info

    document.getElementById('wikilink').setAttribute("href", info[loc].moreinfo)
    document.getElementById('wikilink').innerText = info[loc].title
  }

  this.uploadAlumni = function () {
    document.getElementById('story').reduceToNothing()
    document.getElementById('name').reduceToNothing()
    document.getElementById('surname').reduceToNothing()

    document.getElementById('date').valueAsDate = new Date()

    document.getElementById('experiencesubmit').setAttribute('value', "thanks for the story!")
    setTimeout(() => {
      document.getElementById('experiencesubmit').setAttribute('value', "tell your experience!")
    }, 2500)
  }

  this.addToMailingList = function () {
    reduceToNothing(document.getElementById('email'))
    document.getElementById('mailsubmit').setAttribute('value', "you're on the list!")
    setTimeout(() => {
      document.getElementById('mailsubmit').setAttribute('value', "send me stuff!")
    }, 2500)
  }
})