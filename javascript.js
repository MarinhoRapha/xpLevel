

let xpHero = 0;
let heroName = 'Rapha';

function xpCalc(xp){
  xpHero = xp;
  if(xpHero <= 1000){
      xpLevel = 'Ferro'
      console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero > 1000 && xpHero <= 2000){
    xpLevel = 'Bronze'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero > 2000 && xpHero <= 5999){
    xpLevel = 'Prata'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero >= 6000 && xpHero <= 7000){
    xpLevel = 'Ouro'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero > 7000 && xpHero <= 8000){
    xpLevel = 'Platina'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero > 8000 && xpHero <= 9000){
    xpLevel = 'Ascendente'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero > 9000 && xpHero <= 10000){
    xpLevel = 'Imortal'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }else if(xpHero >= 10001){
    xpLevel = 'Radiante'
    console.log('Ola, '  + heroName+ '! Seu nivel de XP é ' + xpLevel)
  }
}

xpCalc(1220)
