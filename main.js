let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios Frontend en Tecnolochicas PRO')
  .pauseFor(200)
  .deleteChars(50)
  .typeString('Soy estudiante en tecnologías de la información, área desarrollo de software')
  .pauseFor(200)
  .deleteChars(10)
  .start();
