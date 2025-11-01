// --- PODCAST ---
const episodios = [
  { titulo: 'La vida en las profundidades', audio: './olas.mp3' },
  { titulo: 'Tecnología y conservación', video: './exp.mp4' }
];

const contenedorEpisodios = document.getElementById('episodios');

episodios.forEach(ep => {
  const div = document.createElement('div');
  div.classList.add('episodio');

  // Si tiene audio, crea el reproductor de audio
  if (ep.audio) {
    div.innerHTML = `
      <h3>${ep.titulo}</h3>
      <audio controls src="${ep.audio}"></audio>
    `;
  }

  // Si tiene video, crea el reproductor de video
  if (ep.video) {
    div.innerHTML = `
      <h3>${ep.titulo}</h3>
      <video controls width="640" height="360">
        <source src="${ep.video}" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
      </video>
    `;
  }

  contenedorEpisodios.appendChild(div);
});

// --- FIGURITAS ---
const figuritas = [
  {
    nombre: 'Ballena Franca Austral',
    img: './ballenita.jpg',
    desc: 'Mamífero marino emblemático del Mar Argentino.'
  },
  {
    nombre: 'Pingüino de Magallanes',
    img: './images/pinguino.jpg',
    desc: 'Ave marina que anida en la costa patagónica.'
  },
  {
    nombre: 'Lobo Marino',
    img: './images/lobo.jpg',
    desc: 'Habita en colonias costeras y es un símbolo de la fauna marina argentina.'
  }
];

const galeria = document.getElementById('galeria');

figuritas.forEach(f => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${f.img}" alt="${f.nombre}">
    <h4>${f.nombre}</h4>
    <p>${f.desc}</p>
  `;
  galeria.appendChild(card);
});
