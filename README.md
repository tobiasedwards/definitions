## `Deffile`

The `Deffile` is a text file describing the definitions, with one
definition per line.

A weighting which will effect how often this definition is randomly
selected can be added to a definition by appending `!` to the end
of the line.

Example `Deffile`
```
Apple
Orange !
Banana
Avocado !!
```

The relative weightings will be Apple and Banana with a weighting
of 1 and then Orange and Avocado with a weighting of 2 and 3
respectively.
