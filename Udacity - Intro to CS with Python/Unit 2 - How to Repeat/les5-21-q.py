# Define a procedure, biggest, that takes three
# numbers as inputs and returns the largest of
# those three numbers.


def biggest(x, y, z):
    if z > y:
        if z > x:
            return z
        else:
            return x
    else:
        if y > x:
            return y
        else:
            return x

# print biggest(3, 6, 9)
# >>> 9

# print biggest(6, 9, 3)
# >>> 9

# print biggest(9, 3, 6)
# >>> 9

# print biggest(3, 3, 9)
# >>> 9

# print biggest(9, 3, 9)
# >>> 9
