const uncoloredURL = './images/landkarte.png'
const coloredURL = './images/landkarte-farbig.png'

document.getElementById('cityname').addEventListener('change', enableSubmit)
document.getElementById('cityname').addEventListener('mouseover', colored)
document.getElementById('cityname').addEventListener('mouseleave', uncolored)

function colored() {
  document.getElementById('startpage-div').style.backgroundImage = 'url(' + coloredURL + ')'
}

function uncolored() {
  document.getElementById('startpage-div').style.backgroundImage = 'url(' + uncoloredURL + ')'
}

function enableSubmit() {
  document.getElementById('submit').removeAttribute('disabled')
}
