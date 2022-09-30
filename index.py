# request 1

def calculate(min, max, step):
  result = 0
  for i in range(min,max+1,step):
    result += i
  print(result)

print("-------  要求一  -------")
calculate(1, 3, 1)
# 你的程式要能夠計算 1+2+3，最後印出 6 
calculate(4, 8, 2)
# 你的程式要能夠計算 4+6+8，最後印出 18 
calculate(-1, 2, 2)
# 你的程式要能夠計算 -1+1，最後印出 0;
print("")




# request 2

data = {
  "employees" : [
    {
    "name":"John",
    "salary":30000,
    "manager":False },
    {
    "name":"Bob",
    "salary":60000,
    "manager":True },
    {
    "name":"Jenny",
    "salary":50000,
    "manager":False },
    {
    "name":"Tony",
    "salary":40000,
    "manager":False }
  ]
}

def avg(data):
  data = data["employees"]
  result = 0
  ct = 0
  for i in data:
    if i["manager"] == False:
      ct += 1
      result += i["salary"]
  print("員工平均薪資: ", result / ct)


print("-------  要求二  -------")
avg(data)
print("")



# request 3

def func(a):
  def func2(m,n):
      print(a+(m*n))
  return func2

print("-------  要求三  -------")
func(2)(3, 4) # 你補完的函式能印出 2+(3*4) 的結果 14 
func(5)(1, -5) # 你補完的函式能印出 5+(1*-5) 的結果 0 
func(-3)(2, 9) # 你補完的函式能印出 -3+(2*9) 的結果 15 
# 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果
print("")



# request 4

def maxProduct(nums):
  max = 0
  for i, v in enumerate(nums):
    for j in range(i+1,len(nums)):
      if i == 0 and j == 1:
        max = v * nums[j]
      ans = v * nums[j]
      if ans > max:
        max = ans
  print(max)

print("-------  要求四  -------")
maxProduct([5, 20, 2, 6]) # 得到 120 
maxProduct([10, -20, 0, 3]) # 得到 30 
maxProduct([10, -20, 0, -3]) # 得到 60 
maxProduct([-1, 2]) # 得到 -2 
maxProduct([-1, 0, 2]) # 得到 0 
maxProduct([5,-1, -2, 0]) # 得到 2 
maxProduct([-5, -2]) # 得到 10
print("")



# request 5

def twoSum(nums, target):
  index = {}
  for i in range(len(nums)):
    if target - nums[i] in index:
      return [ index[target - nums[i]] , i ]
    index[nums[i]] = i

print("-------  要求五  -------")
result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9
print("")


# request 6

def maxZeros(nums):
  def setAns(a,b):
    if a > b:
      b = a
    return b

  ct = 0
  ans = 0
  for i in range(len(nums)):
    if nums[i] == 0:
      ct += 1
    if nums[i] == 1:
      ans = setAns(ct,ans)
      ct = 0
    if i == len(nums)-1 and nums[i]== 0 :
      ans = setAns(ct,ans)
  print(ans)


print("-------  要求六  -------")
maxZeros([0, 1, 0, 0]) # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) # 得到 4 
maxZeros([1, 1, 1, 1, 1]) # 得到 0 
maxZeros([0, 0, 0, 1, 1]) # 得到 3
print("")

