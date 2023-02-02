//Variaveis
let musicas = [
    {
        titulo: 'Mother',
        artista: 'Dazing',
        src: 'music/Mother (320 kbps).mp3',
        img: 'image/dazing.jfif'
    },
    {
        titulo: 'Dogma and Ritual of High Magic',
        artista: 'Spell Garden',
        src: 'music/Dogma and Ritual of High Magic (320 kbps).mp3',
        img: 'image/spellGarden.jfif'
    },
    {
        titulo: 'Warriors of the World',
        artista: 'Manowar',
        src: 'music/Warriors of the World United (320 kbps).mp3',
        img: 'image/Warriors_of_the_World.jpg'
    }
]
let musica = document.querySelector('audio'); // seleciona a tag do html
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica);
//Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica); //seleciona a classe do html e adicionando um evento no botão
document.querySelector('.botao-pause').addEventListener('click', pausarMusica); //pausa a musica


musica.addEventListener('timeupdate', atualizarBarra);// enquanto a musica estiver tocando a barra de progresso vai andar

document.querySelector('.anterior').addEventListener('click', ()=>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2
    }
    renderizarMusica(indexMusica);
})

document.querySelector('.proximo').addEventListener('click', ()=>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0
    }
    renderizarMusica(indexMusica);
})

//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}


// função que vai fazer a musica dar play
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    } 
    return campoMinutos + ':' + campoSegundos;
}



