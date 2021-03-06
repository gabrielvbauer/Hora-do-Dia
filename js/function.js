function carregar() {

    var date = new Date();
    var hora = date.getHours();
    var minutos = date.getMinutes();

    var msg = document.getElementById('msg');
    var foto = document.getElementById('foto');
    var link = document.getElementById('link');

    msg.innerHTML = `Agora são ${hora}:${minutos}`;

    document.body.style.color = '#3d3d3d'
    link.style.color = '#3d3d3d'

    if (hora >= 6 && hora < 12) {
        //BOM DIA
        foto.style.backgroundImage = "url('images/manha.png')"
        document.body.style.backgroundColor = '#f9e8d4'

    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        foto.style.backgroundImage = "url('images/tarde.png')"
        document.body.style.backgroundColor = '#bed8ef'

    } else if (hora < 6 || hora > 18) {
        //BOA NOITE
        foto.style.backgroundImage = "url('images/noite.png')"
        document.body.style.backgroundColor = '#0d2b2d'
        document.body.style.color = "white"
        link.style.color = "white"
    }

    //Função para recarregar a página após 60 segundos
    setTimeout(function() {
        window.location.reload(1);
    }, 60000)

}