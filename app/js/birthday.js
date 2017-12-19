function go() {
  let vt = document.getElementById('voice_time')
  let hb = document.getElementById('hb')
  let voice = document.getElementById('voice')
  vt.style.display = 'inline-block';
  voice.style.display = 'block';
  hb.style.display = 'block';
  vt.setAttribute('class', 'voice-time show')
  hb.setAttribute('class', 'show')
  voice.setAttribute('class', 'comment bottom-msg show')
  

  let canClick = true
  let audio = document.getElementById('audio')
  let audioSrc = require('../music/hb.mp3')
  audio.setAttribute('src', audioSrc)

  let img = document.createElement('img')
  let src = require('../images/voice.png')
  img.setAttribute('src', src)
  img.setAttribute('class', 'voice')
  voice.appendChild(img)

  let voiceWhite = document.getElementById('voice_white')
  let img2 = document.createElement('img')
  let src2 = require('../images/voice-white.png')
  img2.setAttribute('src', src2)
  voiceWhite.appendChild(img2);

  voice.addEventListener('click', () => {
    if (canClick) {
      canClick = false
      audio.play()
      cakes()
      setTimeout(() => {
        cakes()
      }, 8000)
      setTimeout(() => {
        cakes()
      }, 16000)
      audio.addEventListener('ended', () => {
        voice.style.display = 'block'
        voiceWhite.style.display = 'none'
        canClick = true
      })
      voice.style.display = 'none'
      voiceWhite.style.display = 'block'
    }
  })
}
function cakes() {
  let startsContainer = document.createElement('div')
  startsContainer.className = 'startsContainer'
  for (let i = 0; i < 30; i++) {
    let w = parseInt(Math.random()*4,10)
    let src
    switch(w) {
      case 0:
        src = require('../images/cake.png')
        break;
      case 1:
        src = require('../images/gift.png')
        break;
      case 2:
        src = require('../images/bell.png')
        break;
      case 3:
        src = require('../images/snow.png')
        break;
    }
    let img = document.createElement('img')
    img.setAttribute('src', src)
    img.setAttribute('class', 'stars')
    startsContainer.appendChild(img)
  }
  document.body.appendChild(startsContainer)
  let els = document.querySelectorAll('.startsContainer')
  let current = els.length
  if (current > 5) {
    els[0].remove()
  }
}
export {
  go
}
