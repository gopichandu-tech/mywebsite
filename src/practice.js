var sound = "grunt";
var bear = {sound : "roar"};
function roar(){
    console.log(this.sound)
    console.log(roar.apply(bear))
}
bear.bind(roar);