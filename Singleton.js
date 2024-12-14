class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this.data = "I am the only instance!";
      Singleton.instance = this;
    }
  
    getData() {
      return this.data;
    }
  }
  
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); 
  console.log(instance1.getData()); 
  