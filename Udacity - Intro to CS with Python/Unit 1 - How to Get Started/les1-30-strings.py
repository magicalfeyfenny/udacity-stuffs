# string theory

# "string" (may use '' as characters)
# 'string' (may use "" as characters)

# <string>[expression] = 1 character. first character is 0, not 1. 
# example
word = 'assume'
print (word[4]) #m

# <string>[expression_a:expression_b] = characters from expression_a to 
#     expression_b (not including b). expressions may be blank for 'beginning 
#     of string':'end of string'. string length agnostic.
# examples
word = 'assume'
print (word[3])    #u
print (word[3:4])  #u
print (word[3:3])  #
print (word[4:6])  #me
print (word[4:])   #me
print (word[:2])   #as
print (word[:])    #assume