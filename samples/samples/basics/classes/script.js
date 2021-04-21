class Enemy {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }

    getInfo() {
        console.log(this.life, this.name, this.level)
    }
}

class Bug extends Enemy{
    constructor(life, name, level, legs, damage) {
        super(life, name, level);
        this.legs = legs;
        this.damage = damage;
    }
}

const turtle = new Enemy(25, "Tippy", 10);
turtle.getInfo();

const bug = new Bug(10, "Buggles", 15, 6, 5)
bug.getInfo();