# more string find stuff
# you can find substrings after the first occurance
# use the same method, but add an integer. <string>.find(<string>,<int>)
# this will search for the first matching substring after the position <int>
# however, this does not loop back to the beginning
# example

string = "the focks is a good focks ye"
print ( string.find('focks') )        #4
print ( string.find('focks', 4) )     #4
print ( string.find('focks', 8) )     #20
print ( string[5:] )                  #'ocks is a good focks ye'
print ( string[20:] )                 #'focks ye'
print ( string.find('focks', 21))     #-1