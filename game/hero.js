function Hero(txt){
    //this.abilities=abilities;
    this.obj=JSON.parse(txt);

    document.getElementById("player").innerHTML = this.obj.name + ", " + this.obj.age;
}
