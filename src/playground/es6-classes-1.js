class Being {
  constructor() {
    this.state = 'alive';
  }

  greet() {
    console.log('Hi! I am a beaing!');
  }
}


class Person extends Being {

  constructor(name) {
    super();
    this.name = name;
  }

  greet() {
    super.greet();
    console.log('Hi! I am a student');
  }

}


class Traveler extends Person {
  constructor(name, nickname) {
    super(name);
    this.nickname = nickname;
  }

  greet() {
    super.greet();
    console.log('I am a traveler ' + this.nickname);
  }
}

// const being = new Being();
// being.greet();

// const me = new Person('Neevor');
// me.greet();

// console.log(me);

const t = new Traveler('Travis', 'Two Stones');
t.greet();

console.log(t);