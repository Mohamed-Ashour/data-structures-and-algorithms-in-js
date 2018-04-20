const getCounter = count => {
  
  return {
    increment: () => {
      return (count += 1);
    },
    currentValue: () => {
      return count;
    }
  };
};

const counter = getCounter(5);

counter.increment();
counter.increment();
console.log(counter.currentValue());