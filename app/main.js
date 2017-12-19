require('./css/bubble.css');
require('./css/stars.scss');
const years = require('./js/getBirthday.js').compute();
if (!years) {
  document.getElementById('birthday').remove();
  require('./css/code.css');
  require('./css/full.css');
  require('./css/cursor.css');
  require.ensure([], function(require) {
    const love = require('./js/go.js');
    window.onload = () => {
     love.go();
    }
  })
} else {
  document.getElementById('typer').remove();
  document.getElementById('board').remove();
  require('./css/voice.css');
  require('./css/birthday.scss');

  require.ensure([], function(require) {
    const c = require('./js/cake.js');
    const b = require('./js/birthday.js');
    window.onload = () => {
     document.getElementById('birthday').style.display = 'block';
     c.draw();
     window.setTimeout(() => {
      b.go();
     }, 6000)
    }
  }, 'birthday');
}
