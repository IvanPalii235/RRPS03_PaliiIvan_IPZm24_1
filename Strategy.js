class PaymentStrategy {
    pay(amount) {
      throw new Error("Method 'pay()' must be implemented.");
    }
  }
  
  class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} using Credit Card.`);
    }
  }
  
  class PayPalPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} using PayPal.`);
    }
  }
  
  class PaymentProcessor {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    execute(amount) {
      this.strategy.pay(amount);
    }
  }
  

  const paymentProcessor = new PaymentProcessor();
  
  paymentProcessor.setStrategy(new CreditCardPayment());
  paymentProcessor.execute(100); 
  
  paymentProcessor.setStrategy(new PayPalPayment());
  paymentProcessor.execute(50); 
  