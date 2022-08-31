// strict mode upozorni na chyby jako pouziti rezervovaneho slova nebo nevytvorene promenne

'use strict'

const ourTest = () => {
  data = 'abcdf'
};

ourTest();
console.log(data);