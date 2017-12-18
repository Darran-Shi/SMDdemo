function go() {
  let canClick = true
  let audio = document.getElementById('audio')
  let audioSrc = require('../music/test.mp3')
  audio.setAttribute('src', audioSrc)

  let voice = document.getElementById('voice')
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
export {
  go
}
