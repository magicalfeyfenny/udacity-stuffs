# Define a procedure, abbaize, that takes
# two strings as its inputs, and returns
# a string that is the first input,
# followed by two repetitions of the second input,
# followed by the first input.


def abbaize(first, second):
    return first + second + second + first


print(abbaize('a', 'b'))
#>>> 'abba'

print(abbaize('dog', 'cat'))
#>>> 'dogcatcatdog'
