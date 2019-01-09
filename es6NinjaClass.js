class Ninja {
  constructor(name) {
    this.name = name
    this.health = 100
    this.speed = 3
    this.strength = 3
  }
  sayName() {
    console.log(this.name)
    return this
  }

  showStats() {
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    return this
  }

  drinkSake() {
    this.health += 10
    console.log(`You drank sake and gained 10 health!`)
    return this
  }
}

class Sensei extends Ninja{
  constructor(name){
    super(name)
    this.wisdom = 10
  }
  
  speakWisdom() {
    super.drinkSake()
    console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    return this
  }
  
}

ninja1 = new Ninja('Leo')
ninja1.showStats()
ninja1.strength = 5
ninja1.showStats()

splinter = new Sensei('Splinter')
splinter.showStats().speakWisdom().showStats()