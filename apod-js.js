//Referenciando tudo que está no html
const principal = $(".corpo");
const imagem = $("#imagem");
const video = $("#video-apod")
const titulo = $("#titulo");
const texto = $("#texto");
const copyright = $('#copyright');
const botao = $("#procurar");

botao.on('click', () => {
    apod()

})
function apod() {

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${data.value}`,
        success(resultado) {
            console.log(resultado)
            titulo[0].innerHTML = resultado.title;
            texto[0].innerHTML = resultado.explanation;
            copyright[0].innerHTML = resultado.copyright;

            if(resultado.media_type == 'image'){
                $(`<img src="${resultado.hdurl}" id="imagem-aparecida">`).appendTo($("[data-corpo]"));
                $('#video-aparecida').hide()
            }
            else if(resultado.media_type !== 'image'){
                $(`<iframe src="${resultado.url}" id="video-aparecida"><iframe>`).appendTo($("[data-corpo]"));
                $('#imagem-aparecida').hide()
            }

        }
    })
}
apod()