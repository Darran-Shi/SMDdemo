require('./css/bubble.css');
const years = require('./js/getBirthday.js').compute();
if (!years) {
  document.getElementById('birthday').remove();
  require('./css/stars.scss');
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
    c.draw();
  }, 'birthday');
}
