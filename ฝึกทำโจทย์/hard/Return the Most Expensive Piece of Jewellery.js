function mostExpensive(price){
    let p = Object.values(price);
    let name = Object.keys(price);
    for(let i = 0; i < p.length; i++){
        if(p[i] == Math.max(...p)){
            return "The most expensive one is the " + name[i];
        }
    }
}




console.log(mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }))
console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }))