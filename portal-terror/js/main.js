/* Tipos de terror y una historia por cada uno */
const tipos = [
  {
    n: "Terror sobrenatural", img: "imgsobrenatural.jpg", pos: "50% 40%", a: "Casa oscura con una figura blanca en la ventana",
    r: "Fantasmas, espíritus y casas con memoria.",
    d: "Lo define lo que no debería estar ahí: alguien que murió y no se fue.",
    t: ["Cuando murió la vecina, su ventana siguió encendiéndose a las 3:07 de la madrugada. Tomás subió a la azotea a mirar y la vio: la anciana, sentada de espaldas, tejiendo sin hacer ruido.",
      "Al día siguiente encontró en su cama una bufanda a medio tejer, todavía tibia. Esa noche la luz de su cuarto se encendió sola a las 3:07. Detrás de él, muy cerca de su oído, una voz seca susurró: «Casi termino la tuya»."]
  },
  {
    n: "Terror psicológico", img: "imgpsicologico.jpg", pos: "65% 50%", a: "Espejo con un rostro pálido que sonríe",
    r: "El miedo está en la mente: lo que ves quizá no es real.",
    d: "Lo define la duda: ¿está pasando afuera o solo en mi cabeza?",
    t: ["Lucía notó que su reflejo tardaba un instante en copiar sus movimientos. Después notó que se adelantaba. Una mañana, mientras se cepillaba los dientes, el reflejo se quedó quieto, la miró y sonrió sin que ella lo hiciera.",
      "Salió del baño sin tocar nada. En la cocina, su madre levantó la vista: «¿Ya volviste?». Lucía dijo que nunca se había ido. Su madre dejó la taza en la mesa, muy despacio: «Hace una hora saliste riéndote y me pediste que no te dejara entrar al baño»."]
  },
  {
    n: "Slasher y gore", img: "imggore.jpg", pos: "50% 35%", a: "Cuchillo de carnicero goteando sangre",
    r: "Un asesino, una víctima y mucha sangre.",
    d: "Lo define el peligro físico: el cuerpo en riesgo y la violencia sin filtro.",
    t: ["El empleado del turno de la noche encontró huellas rojas desde la puerta hasta la caja registradora. Los pasos terminaban justo detrás de él.",
      "En el espejo curvo del techo vio un cuchillo de carnicero goteando y una sombra altísima inclinada sobre su hombro. Alcanzó a oír un sonido húmedo antes de que las luces se apagaran.",
      "A la mañana, la policía halló el mostrador cubierto de sangre hasta el techo y la caja intacta. En la puerta colgaba un cartel escrito con un dedo: «Vuelvo en cinco minutos»."]
  },
  {
    n: "Terror cósmico", img: "imgcosmico.jpg", pos: "62% 45%", a: "Un ojo gigantesco en el cielo sobre un pozo",
    r: "Algo inmenso, antiguo e indiferente a nosotros.",
    d: "Lo define la insignificancia: el universo es más grande y más extraño de lo que podemos entender.",
    t: ["Los topógrafos bajaron una sonda por un pozo que figuraba como seco. La cuerda era de dos kilómetros. Se acabó y la sonda seguía bajando.",
      "Cuando por fin subió, traía lodo negro y una grabación. En el audio, una voz tan grande que hacía vibrar el micrófono pronunciaba sus nombres, uno por uno, como quien pasa lista.",
      "Nadie quiso escucharla de nuevo. Esa noche, en el campamento, los siete perros se sentaron mirando el pozo y no volvieron a ladrar."]
  },
  {
    n: "Terror folclórico", img: "imgfoklorico.jpg", pos: "50% 45%", a: "Mujer pálida junto a un río con luces flotando",
    r: "Criaturas y reglas de los pueblos, pasadas de boca en boca.",
    d: "Lo define la tradición: cada pueblo tiene sus monstruos y sus advertencias.",
    t: ["En el pueblo del río, los abuelos repetían una regla: nunca contestes a una voz que no oíste acercarse. Una noche, Mateo oyó a su madre llamándolo desde el agua. Contestó.",
      "El río no lo devolvió. Pero al amanecer, la madre encontró huellas mojadas desde la orilla hasta la casa, escaleras arriba, hasta la puerta de su cuarto.",
      "Detrás de la puerta alguien dijo: «Mamá, ya llegué». Y al lado de ella, en la cama, Mateo dormía."]
  },
  {
    n: "Terror del cuerpo", img: "imgcuerpo.jpg", pos: "50% 30%", a: "Un ojo que se abre en la piel de un brazo",
    r: "El miedo a lo que le pasa a nuestro propio cuerpo.",
    d: "Lo define la transformación: cuando lo más cercano, la piel, deja de pertenecernos.",
    t: ["A Marta le salió un lunar en el antebrazo. Creció, picaba y de noche latía como un pulso ajeno. El médico lo abrió con el bisturí y no salió sangre: salió un ojo, húmedo, que parpadeó.",
      "Marta sintió cómo miraba el techo desde adentro de su propio brazo. Desde entonces, cuando ella cierra los ojos, el del brazo sigue despierto.",
      "A veces, al amanecer, le describe lo que vio. Y no es nada que ella haya visto nunca."]
  }
];

/* Tarjetas */
const rejilla = document.getElementById('rejilla');
rejilla.innerHTML = tipos.map((x, i) => `
  <div class="col-md-6 col-lg-4">
    <article class="expediente">
      <img class="ilustracion" src="images/${x.img}" alt="${x.a}" style="object-position:${x.pos}" loading="lazy" width="800" height="500">
      <h3>${x.n}</h3>
      <p>${x.r}</p>
      <button class="btn btn-outline-hueso btn-sm align-self-start" data-i="${i}">Leer la historia</button>
    </article>
  </div>`).join('');

const modal = new bootstrap.Modal('#modalLeyenda');
rejilla.addEventListener('click', e => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  const x = tipos[b.dataset.i];
  modalTitulo.textContent = x.n;
  modalLugar.textContent = x.d;
  modalTexto.replaceChildren(...x.t.map(par => { const p = document.createElement('p'); p.textContent = par; return p; }));
  modalImg.src = 'images/' + x.img;
  modalImg.alt = x.a;
  modalImg.style.objectPosition = x.pos;
  modal.show();
});

/* Ojos que parpadean en el fondo */
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const fondo = document.querySelector('.fondo');
  for (let i = 0; i < 5; i++) {
    const o = document.createElement('div');
    o.className = 'ojos';
    o.innerHTML = '<i></i><i></i>';
    fondo.appendChild(o);
    (function ciclo() {
      o.style.left = (5 + Math.random() * 85) + '%';
      o.style.top = (15 + Math.random() * 75) + '%';
      setTimeout(() => {
        o.classList.add('on');
        setTimeout(() => { o.classList.remove('on'); ciclo(); }, 600 + Math.random() * 1400);
      }, 2500 + Math.random() * 9000);
    })();
  }
}
