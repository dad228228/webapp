const textToCopy = refLinkBtn.href

refLinkBtn.addEventListener('click', (event) => {
  event.preventDefault();

  navigator.clipboard.writeText(textToCopy)
})