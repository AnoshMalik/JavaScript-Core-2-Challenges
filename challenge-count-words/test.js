let set2 = new Set([10, 10, 20, 30, 40, 50]).keys;

console.log(set2);

// set2.clear();

// console.log(set2);

let sampleArray = ["you", "you", "me" , "me"];

//  const convert = (arr) => {
//    const res = {};
//    arr.forEach((obj) => {
//     //  const key = `${obj.Country}${obj["New Lv1−Lv2"]}`;
//      if (!res[key]) {
//        res[key] = { ...obj, count: 0 };
//      }
//      res[key].count += 1;
//    });
//    return Object.values(res);
//  };
//  console.log(convert(arr));

const counts = {};
// const sampleArray = ["a", "a", "b", "c"];
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);