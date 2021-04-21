function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
}

Todo.prototype.getTodoName = function() {
    console.log(this.name);
}

const todo = new Todo("Go to grocery store", false);
const todo2 = new Todo("Do taxes", false);
todo.getTodoName();
todo2.getTodoName();

function Enemy(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
}

function Dragon(life, name, level, color, breath){
    Enemy.call(this, life, name, level);
    this.color = color;
    this.breath = breath;
}

//inherit prototype
Dragon.prototype = Object.create(Enemy);