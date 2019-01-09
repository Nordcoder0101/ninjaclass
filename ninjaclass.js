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

  Ninja.prototype.punch = function(ninjaToPunch){
    if (ninjaToPunch instanceof Ninja) {
    ninjaToPunch.health -= 5
    console.log(`${ninjaToPunch.name} was punched by ${this.name} and lost 5 Health!`)
    } else {
      console.log('WTF did you just punch?')
    }
  }

  Ninja.prototype.kick = function(ninjaToKick){
    if (ninjaToKick instanceof Ninja){
      ninjaToKick.health -= (getStrength() * 15)
      console.log(`${ninjaToKick.name} was kicked by ${this.name} and lost ${getStrength() * 15} Health!`)
    } else {
      console.log('WTF did you just kick?')
    }
    
  }
}

ninja1 = new Ninja('Hyabusa')
ninja1.sayName().showStats().drinkSake().showStats()
ninja2 = new Ninja('Ryu')
ninja2.kick(ninja1)
ninja2.punch(ninja1)
ninja1.showStats()