const textToCopy = refLinkBtn.href;

refLinkBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const textArea = document.createElement('textarea'); // Для управления буфером в telegram mini apps работает только такой способ
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
})

//if (navigator.clipboard) {
    //navigator.clipboard.writeText(textToCopy);
  //} else {