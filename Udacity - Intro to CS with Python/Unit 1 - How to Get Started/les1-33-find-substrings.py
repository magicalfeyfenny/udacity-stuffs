# finding strings

# you find the index number (integer) of the first substring in a string with 
#     the method <string>.find(<string>). # if the target string is not found, 
#     the value of this method will be -1
# example

focks = 'fockses are the best!'
print ( focks.find('are') )  #8
print ( focks[8:] )          #'are the best!'
print ( focks.find('best') ) #16
print ( focks[16:] )         #'best!'
print ( focks.find('box') )  #-1, the substring 'box' does not exist in focks