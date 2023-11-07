let countryNames = ['USA', 'Uganda', 'Kenya'];

let [name1, name2] = countryNames;
//console.log(name1, name2);



const concat = (...args) => {
    return args.reduce((result, arg) => {
      if (typeof arg === 'string') {
        result.push(...arg);
      } else if (Array.isArray(arg)) {
        result.push(...arg);
      }
      return result;
    }, []);
  };
  
  const result = concat('hi', [1, 2, 3], ['Hello', 'world']);
  console.log(result); // Output: ['h', 'i', 1, 2, 3, 'Hello', 'world']