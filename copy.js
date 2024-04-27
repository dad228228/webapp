const textToCopy = refLinkBtn.href;

refLinkBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy);
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
})

//if (navigator.clipboard) {
    //navigator.clipboard.writeText(textToCopy);
  //} else {