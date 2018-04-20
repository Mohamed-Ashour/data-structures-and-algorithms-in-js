const Human = function (hairColor, tall) {
    this.hairColor = hairColor;
    this.tall = tall;
}

Human.prototype.eat = function () {
    console.log('I\'m eating');
    console.log(this.hairColor, this.tall)
}

const man = new Human('red', 66);

man.eat()

