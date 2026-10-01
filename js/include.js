fetch('../header.html')
    .then(respone => respone.text())
    .then(data => {
        document.querySelector('#header-wrap').innerHTML = data
    })
    
fetch('../footer.html')
    .then(respone => respone.text())
    .then(data => {
        document.querySelector('#footer-wrap').innerHTML = data
    })