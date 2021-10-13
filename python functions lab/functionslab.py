# Challenges
print ('excercise 1')
# 1. Write a function named `sum_to` that accepts a single integer, `n`, and returns the sum of the integers from 1 to `n`.
	
def sum_to(n):
    total = 0
    while n >= 1:
         total += n
         n = n-1
    print(total)


# 	For example:

# 	```python
sum_to(6)  # returns 21
sum_to(10) # returns 55
# 	```
print ('excercise 2')
# 2. Write a function named `largest` that takes a list of numbers as an argument and returns the largest number in that list.

def largest(numbers):
    result = numbers[0]
    for number in numbers:
       if result < number:
          result = number
    print('solution 1', result)
    print('solution 2',max(numbers))
     
# 	For example:
	
# 	```python
largest([1, 2, 3, 4, 0])  # returns 4
largest([10, 4, 2, 231, 91, 54])  # returns 231
# 	```
print('excercise 3')
# 3. Write a function named `occurances` that takes two string arguments as input and counts the number of occurances of the second string inside the first string.
def occurances(string, lookup):
    count = string.count(lookup)
    print(count)

# 	For example:

# 	```python
occurances('fleep floop', 'e')   # returns 2
occurances('fleep floop', 'p')   # returns 2
occurances('fleep floop', 'ee')  # returns 1
occurances('fleep floop', 'fe')  # returns 0
# 	```
# 4. Write a function named `product` that takes an *arbitrary* number of numbers, multiplies them all together, and returns the product.<br>(HINT: Review your notes on `*args`).

print ('excercise 4')
def product(*args):
    product = 1
    for arg in args:
            product *= arg
    print(product)

# 	For example:
	
# 	```python
product(-1, 4) # returns -4
product(2, 5, 5) # returns 50
product(4, 0.5, 5) # returns 10.0