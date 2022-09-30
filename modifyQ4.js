
function maxProduct(nums){

  function partition(p, r){
    let x = nums[r];  // pivot
    let i = p - 1;
    for(let j = p; j <= r - 1; j++){
      if(nums[j] <= x){
        i += 1;
        // swap nums[i] and nums[j]
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    };
    // swap nums[i+1] and nums[i]
    let temp = nums[i + 1];
    nums[i + 1] = nums[r];
    nums[r] = temp;
    
    return i + 1;
  };
  
  function quickSort(p, r){
    if(p < r){
      let q = partition(p, r);
      quickSort(p, q-1);
      quickSort(q+1 , r);
    }
  };
  
  quickSort(0, nums.length -1);
  
  let result1;
  let result2;
  let left = 0;
  let right = nums.length - 1;

  while(right > left){
    let ans = -Infinity;
    let temp = nums[left] * nums[right];
    if(temp > ans){
      ans = temp;
      right --;
    }else if(temp <= ans){
      left ++;
    };
    result1 = ans;
  };

  left = 0;
  right = nums.length - 1;

  while(right > left){
    let ans = -Infinity;
    let temp = nums[left] * nums[right];
    if(temp > ans){
      ans = temp;
      left ++;
    }else if(temp <= ans){
      right --;
    };
    result2 = ans;
  };
  console.log(result1 >= result2 ? result1 : result2);
};


console.log("-------  要求四  -------");
maxProduct([2, 5 , 6, 20]); // 得到 120 
maxProduct([-20, 0, 3, 10]); // 得到 30 
maxProduct([-20, -3, 0, 10]); // 得到 60 
maxProduct([-1, 2]); // 得到 -2 
maxProduct([-1, 0, 2]); // 得到 0 或 -0 
maxProduct([-2,-1, 0, 5]); // 得到 2 
maxProduct([-5, -2]); // 得到 10
console.log("");
