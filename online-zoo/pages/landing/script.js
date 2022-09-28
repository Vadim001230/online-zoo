//range
if (document.querySelector("#range")) {
    document.querySelector("#range").addEventListener('input', (e) => {
        let value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
        e.target.style.background = 'linear-gradient(to right, #F9804B 0%, #F9804B ' + value + '%,  #F5F7F6 ' + value + '%,  #F5F7F6 100%)'
    })
}