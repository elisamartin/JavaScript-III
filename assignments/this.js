/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windows Binding, this points to the window object bacause it has not been defined otherwise
* 2. Implicit Binding, a function is called, after this.
* 3. New Binding, when creating objects from a constructor function with the keyword new, the this keyword refers to the specific object created and extracted from the constructor function
* 4. Explicit Binding, using ".apply()" or ".call()" we will be explicitly defining this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function bindingOne() {
	console.log(this);
}

// Principle 2

// code example for Implicit Binding
const cat = {
	name: 'Kitty',
	favoriteMiau: 'miiiaaaUUU!',
	miau: function() {
		console.log(this.favoriteMiau);
	}
};
cat.miau();

// Principle 3

// code example for New Binding

function Animal(name, size) {
	this.name = name;
	this.size = size;
	this.talk = function() {
		console.log('Hello Im a ' + this.name);
	};
}

const dog = new Animal('dog', 'small');
const whale = new Animal('whale', 'large');

dog.talk();
whale.talk();
// Principle 4

// code example for Explicit Binding

whale.talk.call(dog);
whale.talk();
