const textEl = document.getElementById("birthday");
const birthday =
  "With all due respect, I am very grateful to have you as my brother, friend, mentor, assistant and my teacher.You have always sacrificed yourself in many things aiming at spreading knowledge to others  and as a role model for others to emulate your example.As a junior MERN STACK, I keep learning a lot of things in MERN technology and you have always be there anytime I need your help, I will always do that until it reaches a point I intorduce myself as My name is Athumani Ahmed and I do work With MERN.May the Almighty bless you in everything you do and give you a firm enthusiasm in your path as you persue your dreams.  His name is KELVIN KEDYSON but you can call him KEDYSON. He works with MERN #MongoDB, ExpressJs , ReactJS and NodeJs. Happy birthday Kedyson.Powered by mernstack_AthumaniAthmed";
let index = 1;
let speed = 100;

birthdayText();

function birthdayText() {
  textEl.innerText = birthday.slice(0, index);

  index++;

  if (index > birthday.length) {
    index = 1;
  }
  setTimeout(birthdayText, speed);
}
