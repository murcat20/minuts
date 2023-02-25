function Minuta() {
    let years = document.getElementById('Years').value
    let month = document.getElementById('Month').value
    let days = document.getElementById('Days').value
    document.getElementById('minutaVivod').innerText = (+years * 525600 + +month * 43800 + +days * 1440)
}