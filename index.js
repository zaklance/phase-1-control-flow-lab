function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return "This one is on me!";
  } else if(400 < feet, feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if(2000 < feet, feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if(2500 < feet) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }  
}