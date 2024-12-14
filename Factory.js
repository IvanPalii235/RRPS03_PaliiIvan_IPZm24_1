class Animal {
    speak() {
      throw new Error("Method 'speak()' must be implemented.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  }
  
  class AnimalFactory {
    static createAnimal(type) {
      if (type === "dog") return new Dog();
      if (type === "cat") return new Cat();
      throw new Error("Unknown animal type");
    }
  }

  const dog = AnimalFactory.createAnimal("dog");
  console.log(dog.speak()); 
  
  const cat = AnimalFactory.createAnimal("cat");
  console.log(cat.speak()); 
  