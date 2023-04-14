function loading () {
    const msg = document.getElementById('mensagem');
    const img = document.getElementById('foto')
    const data = new Date();
    const now = data.getHours();

    msg.innerHTML = `Agora são ${now} Horas.`
    if(now >= 0 && now < 12) {
        img.src = '/Hora do Dia/images/manhã.png'
        document.body.style.background = '#8787FF'
    } else if (now >=13 && now < 18) {
        img.src = '/Hora do Dia/images/tarde.png'
        document.body.style.background = '#d3b703'
    }else {
        img.src = '/Hora do Dia/images/noite.png'
        document.body.style.background = '#010058'
    }
}