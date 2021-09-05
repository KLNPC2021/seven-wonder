window.addEventListener('DOMContentLoaded', () => {
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

  this.reduceToNothing = function (el) {
    const intervalId = setInterval(() => {
      if(el.value.length == 0) clearInterval(intervalId)
      else el.value = el.value.substr(0, el.value.length - 1)
    }, 50)
  }

  this.uploadAlumni = function () {
    reduceToNothing(document.getElementById('story'))
    reduceToNothing(document.getElementById('name'))
    reduceToNothing(document.getElementById('surname'))

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