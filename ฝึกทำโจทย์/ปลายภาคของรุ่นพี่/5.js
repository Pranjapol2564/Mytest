function missingLetter(s){
    s = s.split("").map(v => v.charCodeAt(0))   
    for(let i = 0; i < s.length; i++){
        console.log( "s(i-1) : " + s[i-1] + 1)
        console.log("s(i) : " + s[i])
        if(s[i] > s[i-1] + 1){
            return String.fromCharCode(s[i]-1)
        }
    }
}



console.log(missingLetter("mnopqs"))