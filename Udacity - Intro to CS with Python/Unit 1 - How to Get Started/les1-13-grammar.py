# Python grammar lesson

# Expression -> Expression Operator Expression
# Expression -> Number
# Operator -> +
# Operator -> *
# Number -> 0, 1, ...

# examples
# Expression -> Expression Operator Expression -> Number + Number -> 1 + 1
# Expression -> Expression Operator Expression -> Expression Operator Expression
#     Operator Expression -> Number * Expression Operator Expression + Number 
#     -> Number * Number * Number + Number -> 2 * 3 * 1 + 1

# Expression -> (Expression)