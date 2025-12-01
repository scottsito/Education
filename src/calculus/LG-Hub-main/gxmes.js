const elemsrendered = () => {
  document.querySelectorAll("h2").forEach(el => el.addEventListener("click",function() {
    alert("for some reason it makes you have to press ts just press ok")
  location.href = "../play/?" + this.textContent
}))

}
