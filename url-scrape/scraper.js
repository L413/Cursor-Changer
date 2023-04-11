javascript:(function(){
  let cursorURL = document.querySelector('.single-b-l') ? document.querySelector('.single-b-l').style.cursor.slice(4, -1).split(",")[0].replace(/['")]/g, '') : null;
  let btnCursorURL = document.querySelector('.btn__tran') ? document.querySelector('.btn__tran').style.cursor.slice(4, -1).split(",")[0].replace(/['")]/g, '') : null;
  let box = document.createElement('div');
  let cursorURLBox = document.createElement('input');
  let btnCursorURLBox = document.createElement('input');
  let cursorCopyButton = document.createElement('button');
  let btnCursorCopyButton = document.createElement('button');

  cursorURLBox.type = 'text';
  cursorURLBox.value = cursorURL ? cursorURL : 'Cursor URL not found';
  cursorURLBox.style.width = '100%';
  cursorURLBox.style.fontSize = '18px';
  cursorURLBox.style.marginBottom = '10px';

  btnCursorURLBox.type = 'text';
  btnCursorURLBox.value = btnCursorURL ? btnCursorURL : 'Button Cursor URL not found';
  btnCursorURLBox.style.width = '100%';
  btnCursorURLBox.style.fontSize = '18px';

  cursorCopyButton.innerText = 'Copy';
  cursorCopyButton.style.marginLeft = '10px';
  cursorCopyButton.addEventListener('click', function() {
    cursorURLBox.select();
    document.execCommand('copy');
  });

  btnCursorCopyButton.innerText = 'Copy';
  btnCursorCopyButton.style.marginLeft = '10px';
  btnCursorCopyButton.addEventListener('click', function() {
    btnCursorURLBox.select();
    document.execCommand('copy');
  });

  box.appendChild(cursorURLBox);
  box.appendChild(cursorCopyButton);
  box.appendChild(btnCursorURLBox);
  box.appendChild(btnCursorCopyButton);

  box.style.position = 'fixed';
  box.style.top = '20%';
  box.style.left = '25%';
  box.style.width = '50%';
  box.style.padding = '20px';
  box.style.backgroundColor = 'white';
  box.style.border = '2px solid black';
  box.style.zIndex = '9999';

  document.body.appendChild(box);
})();
