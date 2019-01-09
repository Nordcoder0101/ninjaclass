function Ninja(name){
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;

  getSpeed = function(){
    return speed
  }

  getStrength = function(){
    return strength
  }

  Ninja.prototype.sayName = function(){
    console.log(`My ninja name is ${this.name}`)
    return this
  }

  Ninja.prototype.drinkSake = function(){
    this.health += 10
    return this
  }

  Ninja.prototype.showStats = function(){
    strength = getStrength()
    speed = getSpeed()
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
    return this
  }
}

ninja1 = new Ninja('Hyabusa')
ninja1.sayName().showStats().drinkSake().showStats()