

/////////////////prob1
var a = 1;
function b() {
a = 10;
return;

}
b();
console.log('a='+ a);

////////////////////prob2
function print(i)
{
    console.log(i)
}


for (var i=0; i<5; ++i)
{
    setTimeout(print,i*1000,i);
}


//////////////////////prob3
setTimeout(function(){
    try {
throw new Error('example');
    }
    catch (err) {
console.log(err)
}
    }, 1000)


///////////prob4
function Animal(color,type) {
    this.color = color;
    this.type = type;
}



Animal.prototype.getColor = function() {
    return this.color;
};

function Dog(color,type,dogType) 
{
    Animal.call(this,color, type);
    this.dogType = dogType;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.getDogType = function() 
{
    return this.dogType;
};


function DogType(typeName,furColor) 
{
    this.typeName = typeName;
    this.furColor = furColor;
}

DogType.prototype.getFurColor = function() {
    return this.furColor;
};


function Fish(color,type,fishType) 
{
    Animal.call(this,color, type);
    this.fishType = fishType;
}

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

Fish.prototype.getFishType = function() 
{
    return this.fishType;
};



var peste1 = new Fish('test', "test1", "test2");

console.log(peste1.getFishType());

console.log(peste1.getColor());




var catel1 = new Dog('test4', "test5", new DogType("caine1","albastru"));

console.log(catel1.getDogType().getFurColor());

console.log(catel1.getColor());



//es6

class Animal 
{
    constructor(color,type) { 
        this.color = color;
        this.type=type;
    }
    
    getColor() { 
        return this.color;
    }
}



class DogType 
{
    constructor(typeName,furColor) { 
        this.typeName = typeName;
        this.furColor=furColor;
    }
    
    getFurColor() { 
        return this.furColor;
    }
}

class Dog extends Animal {
    constructor(color,type,dogType) {
        super(color,type);
        this.dogType=dogType;
    }
    
    getDogType() { 
        return this.dogType;
    }
}

class Fish extends Animal {
    constructor(color,type,fishType) {
        super(color,type);
        this.fishType=fishType;
    }
    
    getFishType() { 
        return this.fishType;
    }
}




var peste1 = new Fish('test', "test1", "test2");

console.log(peste1.getFishType());

console.log(peste1.getColor());




var catel1 = new Dog('test4', "test5", new DogType("caine1","albastru"));

console.log(catel1.getDogType().getFurColor());

console.log(catel1.getColor());
