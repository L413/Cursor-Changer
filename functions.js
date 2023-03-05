function test() {
alert('test');
}

function rainbow() {
  document.querySelectorAll('*').forEach(function(node) {
    node.style.cursor = 'url(https://l413.github.io/Cursor-Changer/icons/rainbow.gif), auto';
});
}

function mario() {
  document.querySelectorAll('*').forEach(function(node) {
    node.style.cursor = 'url(https://l413.github.io/Cursor-Changer/icons/mario.gif), auto';
});
}
