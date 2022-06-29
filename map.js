//This is an example of unordered_map in c++
var mp = new Map();
for(var i=0; i<10; i++){
    mp.set(i,i*5);
}
mp.set(6,mp.get(6)*10)
console.log(mp)