function info_pollito() {
  var pollito_song = `En la radio, hay un pollito
En la radio, hay un pollito
El pollito pío, el pollito pío
El pollito pío, el pollito pío
El pollito pío, el pollito pío

En la radio, hay una gallina
En la radio, hay una gallina
Y la gallina coo, y el pollito pío
Y el pollito pío, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay también un gallo
En la radio, hay también un gallo
Y el gallo corococo, y la gallina coo
Y el pollito pío, el pollito pío
El pollito pío, el pollito pío

En la radio, hay un pavo
En la radio, hay un pavo
Y el pavo glugluglu, y el gallo corococo
Y la gallina coo, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay una paloma
En la radio, hay una paloma
Y la paloma ruuu, el pavo glugluglu
El gallo corococo, y la gallina coo
El pollito pío, el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay también un gato
En la radio, hay también un gato
Y el gato miao, la paloma ruuu
El pavo glugluglu, el gallo corococo
Y la gallina coo, y el pollito pío
El pollito pío, y el pollito pío

En la radio, hay también un perro
En la radio, hay también un perro
Y el perro guau guau, el gato miao
La paloma ruu, el pavo glugluglu
El gallo cocoroco, y la gallina coo
Y el pollito pío, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay una cabra
En la radio, hay una cabra
Y la cabra mee, el perro guau guau
El gato miao, y la paloma ruu
El pavo glugluglu, el gallo cocoroco
Y la gallina coo, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay un cordero
En la radio, hay un cordero
Y el cordero bee, y la cabra mee
El perro guau guau, el gato miao
La paloma ruu, el pavo glugluglu
El gallo cocoroco, y la gallina coo
Y el pollito pío, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay una vaca
En la radio, hay una vaca
Y la vaca moo, y el cordero bee
Y la cabra mee, el perro guau guau
El gato miao, y la paloma ruu
El pavo glugluglu, el gallo cocoroco
Y la gallina coo, y el pollito pío
Y el pollito pío, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay también un toro
En la radio, hay también un toro
Y el toro muu, y la vaca moo
Y el cordero bee, y la cabra mee
El perro guau guau, el gato miao
La paloma ruu, el pavo glugluglu
El gallo cocoroco, y la gallina coo
Y el pollito pío, y el pollito pío
Y el pollito pío, y el pollito pío

En la radio, hay un tractor
En la radio, hay un tractor
Y el tractor brum, y el tractor brum
Y el tractor brum y el pollito oh-oh`;

pollito_song = pollito_song.replace(/\n/gi,"<br>")
console.log(pollito_song)
document.getElementsByClassName("song-name")[0].innerHTML = "El pollito pío";
document.getElementsByClassName("lyrics")[0].innerHTML = pollito_song.slice(0,50)+"...";
document.getElementsByClassName("duration-words")[0].innerHTML = "Duración: 2'46\" - 534 palabras";

}

info_pollito();


function info_shark() {
  var shark_song = `Baby shark, doo doo doo doo doo doo
  Baby shark, doo doo doo doo doo doo
  Baby shark, doo doo doo doo doo doo
  Baby shark!
  
  Mommy shark, doo doo doo doo doo doo
  Mommy shark, doo doo doo doo doo doo
  Mommy shark, doo doo doo doo doo doo
  Mommy shark!
  
  Daddy shark, doo doo doo doo doo doo
  Daddy shark, doo doo doo doo doo doo
  Daddy shark, doo doo doo doo doo doo
  Daddy shark!
  
  Grandma shark, doo doo doo doo doo doo
  Grandma shark, doo doo doo doo doo doo
  Grandma shark, doo doo doo doo doo doo
  Grandma shark!
  
  Grandpa shark, doo doo doo doo doo doo
  Grandpa shark, doo doo doo doo doo doo
  Grandpa shark, doo doo doo doo doo doo
  Grandpa shark!
  
  Let’s go hunt, doo doo doo doo doo doo
  Let’s go hunt, doo doo doo doo doo doo
  Let’s go hunt, doo doo doo doo doo doo
  Let’s go hunt!
  
  Run away, doo doo doo doo doo doo
  Run away, doo doo doo doo doo doo
  Run away, doo doo doo doo doo doo
  Run away!
  
  Safe at last, doo doo doo doo doo doo
  Safe at last, doo doo doo doo doo doo
  Safe at last, doo doo doo doo doo doo
  Safe at last!
  
  It’s the end, doo doo doo doo doo doo
  It’s the end, doo doo doo doo doo doo
  It’s the end, doo doo doo doo doo doo
  It’s the end!`;

shark_song = shark_song.replace(/\n/gi,"<br>")
console.log(shark_song)
document.getElementsByClassName("song-name")[1].innerHTML = "Baby Shark";
document.getElementsByClassName("lyrics")[1].innerHTML = shark_song.slice(0,50)+"...";
document.getElementsByClassName("duration-words")[1].innerHTML = "Duración: 2'16\" - 246 palabras";

}

info_shark();

function info_arroz() {
  var arroz_song = `Arroz con leche, me quiero casar
  con una señorita de la capital
  que sepa coser que sepa bordar 
  que sepa abrir la puerta para ir a jugar.
  Con ésta sí con ésta no, 
  con esta señorita me caso yo
  
  Yo soy la viudita del barrio del Rey
  me quiero casar y no sé con quien
  Con esta sí, con esta no, 
  con esta señorita me caso yo.`;

arroz_song = arroz_song.replace(/\n/gi,"<br>")
console.log(arroz_song)
document.getElementsByClassName("song-name")[2].innerHTML = "Arroz con leche";
document.getElementsByClassName("lyrics")[2].innerHTML = arroz_song.slice(0,50)+"...";
document.getElementsByClassName("duration-words")[2].innerHTML = "Duración: 3'12\" - 70 palabras";

}

info_arroz();


function info_pinpon() {
  var pinpon_song = `Pimpón es un muñeco
  muy guapo de cartón
  se lava la carita
  con agua y con jabón,
  
  Pimpón siempre se peina
  con peine de marfil
  y aunque se hace tirones
  no llora ni hace así
  
  Pimpón dame la mano
  con un fuerte apretón
  que quiero ser tu amigo
  pimpón, pimpón, pimpón`;

pinpon_song = pinpon_song.replace(/\n/gi,"<br>")
console.log(pinpon_song)
document.getElementsByClassName("song-name")[3].innerHTML = "Pin Pon es un Muñeco";
document.getElementsByClassName("lyrics")[3].innerHTML = pinpon_song.slice(0,50)+"...";
document.getElementsByClassName("duration-words")[3].innerHTML = "Duración: 2'04\" - 50 palabras";

}

info_pinpon();


function info_sapito() {
  var sapito_song = `Te voy a enseñar 
  Que debes bailar 
  Como baila el sapito 
  Dando brinquitos 
  
  Tú debes buscar 
  Con quién brincarás 
  Y aunque tú estés solito 
  Tu debes brincar 
  
  Para abajo, para abajo 
  Giras y giras siempre para abajo 
  
  Más abajo, más abajo 
  Si ya estás listo podemos comenzar 
  
  Vas para adelante 
  Más un poco más 
  Vas para adelante 
  Y luego vas pa’tras 
  Ahora para un lado 
  Para el otro ya 
  Das un brinco alto 
  Y vuelves a empezar`;

sapito_song = sapito_song.replace(/\n/gi,"<br>")
console.log(sapito_song)
document.getElementsByClassName("song-name")[4].innerHTML = "El baile del sapito";
document.getElementsByClassName("lyrics")[4].innerHTML = sapito_song.slice(0,50)+"...";
document.getElementsByClassName("duration-words")[4].innerHTML = "Duración: 3'10\" - 96 palabras";

}

info_sapito();