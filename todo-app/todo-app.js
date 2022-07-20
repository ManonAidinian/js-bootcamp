const ps = document.querySelectorAll('p')
ps.forEach(p => {
if (p.textContent.includes('the')) {
  p.remove()
}
})
