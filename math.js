

export function randomizeInteger(min, max) {
    return min + Math.floor(Math.random()*(max - min));
}


export function randomizer(n) {
    var text = "";
    var token = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < n; i++)
      text += token.charAt(Math.floor(Math.random() * token.length));
  
    return text;
  }


export function ran(min, max, n) {
   
    const tab = [];

    for (let i =0; i<n; i++)
    
    tab.push( min + Math.floor(Math.random()*(max - min)))

       return tab;

  
  } 





