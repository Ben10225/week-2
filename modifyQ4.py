def maxProduct(nums):
  
  def partition(l, r, nums):
    pivot, ptr = nums[r], l
    for i in range(l, r):
      if nums[i] <= pivot:
        nums[i], nums[ptr] = nums[ptr], nums[i]
        ptr += 1
    nums[ptr], nums[r] = nums[r], nums[ptr]
    return ptr

  def quicksort(l, r, nums):
    if len(nums) == 1:  
      return nums
    if l < r:
      pi = partition(l, r, nums)
      quicksort(l, pi-1, nums) 
      quicksort(pi+1, r, nums) 
    return nums

  nums = quicksort(0, len(nums)-1, nums)

  result1 = 0
  result2 = 0
  left = 0
  right = len(nums) -1

  while right > left:
    ans = float("-Inf")
    temp = nums[left] * nums[right]
    if temp > ans:
      ans = temp
      right -= 1
    elif temp <= ans:
      left += 1
    
    result1 = ans

  left = 0
  right = len(nums) -1

  while right > left:
    ans = float("-Inf")
    temp = nums[left] * nums[right]
    if temp > ans:
      ans = temp
      left += 1
    elif temp <= ans:
      right -= 1
    
    result2 = ans

  if result1 >= result2:
    print(result1)
  else:
    print(result2)




print("-------  要求四  -------")
maxProduct([5, 20, 2, 6]) # 得到 120 
maxProduct([10, -20, 0, 3]) # 得到 30 
maxProduct([10, -20, 0, -3]) # 得到 60 
maxProduct([-1, 2]) # 得到 -2 
maxProduct([-1, 0, 2]) # 得到 0 
maxProduct([5,-1, -2, 0]) # 得到 2 
maxProduct([-5, -2]) # 得到 10
print("")
