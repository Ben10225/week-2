// request 1

function calculate(min, max, step){
  let result = 0;
  for(let i=min;i<=max;i+=step){
    result += i;
  }
  console.log(result);
};

console.log("-------  要求一  -------");
calculate(1, 3, 1); 
// 你的程式要能夠計算 1+2+3，最後印出 6 
calculate(4, 8, 2); 
// 你的程式要能夠計算 4+6+8，最後印出 18 
calculate(-1, 2, 2); 
// 你的程式要能夠計算 -1+1，最後印出 0;
console.log("");

// request 2

let data = {
  "employees" : [
    {
    "name":"John",
    "salary":30000,
    "manager":false },
    {
    "name":"Bob",
    "salary":60000,
    "manager":true },
    {
    "name":"Jenny",
    "salary":50000,
    "manager":false },
    {
    "name":"Tony",
    "salary":40000,
    "manager":false }
  ]
}

function avg(data){
  let result = data.employees.filter((item)=>(!item.manager));
  let sum = 0;
  result.forEach( i => {
    sum += i.salary;
  });
  console.log("員工平均薪資: ", sum/result.length);
}; 

console.log("-------  要求二  -------");
avg(data);
console.log("");


// request 3

function func(a){
  return function (m,n) {
    console.log(a + (m*n));
  };
};

console.log("-------  要求三  -------");
func(2)(3, 4); // 你補完的函式能印出 2+(3*4) 的結果 14 
func(5)(1, -5); // 你補完的函式能印出 5+(1*-5) 的結果 0 
func(-3)(2, 9); // 你補完的函式能印出 -3+(2*9) 的結果 15 
// 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果
console.log("");

// request 4

function maxProduct(nums){
  let max
  for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
      i==0 && j==1 ? max = nums[i]*nums[j] : null;
      nums[i]*nums[j] >= max ? max = nums[i]*nums[j] : null;
    }
  }
  console.log(max);
};

console.log("-------  要求四  -------");
maxProduct([5, 20, 2, 6]); // 得到 120 
maxProduct([10, -20, 0, 3]); // 得到 30 
maxProduct([10, -20, 0, -3]); // 得到 60 
maxProduct([-1, 2]); // 得到 -2 
maxProduct([-1, 0, 2]); // 得到 0 或 -0 
maxProduct([5, -1, -2, 0]); // 得到 2 
maxProduct([-5, -2]); // 得到 10
console.log("");

// request 5

function twoSum(nums, target){
  let index = {};
  for(let i=0;i<nums.length;i++){
      if(target-nums[i] in index){
        return [index[target-nums[i]], i]
      }
      index[nums[i]] = i;
  };
};

console.log("-------  要求五  -------");
let result=twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9
console.log("");

// request 6

function maxZeros(nums){
  let ans = 0;
  let ct = 0
  for(let i=0;i<nums.length;i++){
    nums[i]=="0" ? ct++ : null;
    if(nums[i]=="1"){
      ct > ans ? ans = ct : null;
      ct = 0;
    }
    if(i == nums.length-1 && nums[i] == "0"){
      ct > ans ? ans = ct : null;
    }
  };
  console.log(ans);
};

console.log("-------  要求六  -------");
maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4 
maxZeros([1, 1, 1, 1, 1]); // 得到 0 
maxZeros([0, 0, 0, 1, 1]); // 得到 3
console.log("");