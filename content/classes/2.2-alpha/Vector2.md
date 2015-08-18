---
ID_PAGE: 25238
PG_TITLE: Vector2
PG_VERSION: 2.1
TAGS:
    - Objects
---
##Description

class [Vector2](/classes/2.2-alpha/Vector2)



##Constructor

##new [Vector2](/classes/2.2-alpha/Vector2)(x, y)

Creates a new [Vector2](/classes/2.2-alpha/Vector2)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 

##Members

###x : number

The first coordinate

###y : number

The second coordinate

##Methods

###toString() &rarr; string

Returns a string representation of the vector
###toArray(array, index) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Fills an array from a given index with the vector's coordinates

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | index | number | 

###asArray() &rarr; number[]

Returns an array representation of the vector
###copyFrom(source) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Copies another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector2](/classes/2.2-alpha/Vector2) | 

###copyFromFloats(x, y) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Copies another vector in float form

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 

###add(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Adds an another vector and returns the result as a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###addVector3(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Adds the vector, the vector3's x and y

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###subtract(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Substracts another vector and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###subtractInPlace(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Substracts another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###multiplyInPlace(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Multiply by another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###multiply(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Multiply by another vector and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###multiplyToRef(otherVector, result) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Multiply by another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 
 | result | [Vector2](/classes/2.2-alpha/Vector2) | 

###multiplyByFloats(x, y) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Multiply by another vector in float form and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 

###divide(otherVector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Divides by another vector and returns the result nin a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###divideToRef(otherVector, result) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Divides by another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 
 | result | [Vector2](/classes/2.2-alpha/Vector2) | 

###negate() &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Returns the opposite vector, that is the vector with opposite coordinates
###scaleInPlace(scale) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Scales the vector with the given factor

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

###scale(scale) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Scales the vector and retruns the result as a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

###equals(otherVector) &rarr; boolean

Tests if two vectors are equal
Returns true if X,Y coordinates are equal

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 

###equalsWithEpsilon(otherVector, epsilon) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](/classes/2.2-alpha/Vector2) | 
optional | epsilon | number | 

###length() &rarr; number

The length of the vector
###lengthSquared() &rarr; number

The squared length of the vector
###normalize() &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Normalizes a vector
###clone() &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Clones a vector
###static Zero() &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Returns a new [Vector2](/classes/2.2-alpha/Vector2) with x and y to zero
###static FromArray(array, offset) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Creates a new vector from a given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 

###static FromArrayToRef(array, offset, result) &rarr; void

Sets an existing vector from a given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
 | offset | number | 
 | result | [Vector2](/classes/2.2-alpha/Vector2) | 

###static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Performs a Catmull-Rom interpolation using the specified positions.
When the method completes, returns the result of the Catmull-Rom interpolation

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | value2 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | value3 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | value4 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | amount | number | 

###static Clamp(value, min, max) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Restricts a value to be within a specified range.

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector2](/classes/2.2-alpha/Vector2) | 
 | min | [Vector2](/classes/2.2-alpha/Vector2) | 
 | max | [Vector2](/classes/2.2-alpha/Vector2) | 

###static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Performs a Hermite spline interpolation.

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | tangent1 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | value2 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | tangent2 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | amount | number | 

###static Lerp(start, end, amount) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Performs a linear interpolation between two vectors.

####Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector2](/classes/2.2-alpha/Vector2) | 
 | end | [Vector2](/classes/2.2-alpha/Vector2) | 
 | amount | number | 

###static Dot(left, right) &rarr; number

Dot product between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.2-alpha/Vector2) | 
 | right | [Vector2](/classes/2.2-alpha/Vector2) | 

###static Normalize(vector) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Normalizes a vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.2-alpha/Vector2) | 

###static Minimize(left, right) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Minimizes the left vector with the right vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.2-alpha/Vector2) | 
 | right | [Vector2](/classes/2.2-alpha/Vector2) | 

###static Maximize(left, right) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Maximizes the left vector with the right vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](/classes/2.2-alpha/Vector2) | 
 | right | [Vector2](/classes/2.2-alpha/Vector2) | 

###static Transform(vector, transformation) &rarr; [Vector2](/classes/2.2-alpha/Vector2)

Transforms a vector into a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](/classes/2.2-alpha/Vector2) | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Distance(value1, value2) &rarr; number

Returns the distance between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | value2 | [Vector2](/classes/2.2-alpha/Vector2) | 

###static DistanceSquared(value1, value2) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](/classes/2.2-alpha/Vector2) | 
 | value2 | [Vector2](/classes/2.2-alpha/Vector2) | 

