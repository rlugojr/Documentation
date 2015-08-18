---
ID_PAGE: 25239
PG_TITLE: Vector3
PG_VERSION: 2.1
TAGS:
    - Objects
---
##Description

class [Vector3](/classes/2.2-alpha/Vector3)



##Constructor

##new [Vector3](/classes/2.2-alpha/Vector3)(x, y, z)

Creates a new [Vector3](/classes/2.2-alpha/Vector3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

##Members

###x : number

The first coordinate

###y : number

The second coordinate

###z : number

The third coordinate

##Methods

###toString() &rarr; string

Returns a string representation of the vector
###asArray() &rarr; number[]

Returns an array representation of the vector
###toArray(array, index) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Fills an array from a given index with the vector's coordinates

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | index | number | 

###toQuaternion() &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)


###addInPlace(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Adds in another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###add(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Adds an another vector and returns the result as a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###addToRef(otherVector, result) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Adds an another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###subtractInPlace(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Substracts another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###subtract(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Substracts another vector and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###subtractToRef(otherVector, result) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Substracts another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###subtractFromFloats(x, y, z) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Substracts another vector in float form and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

###subtractFromFloatsToRef(x, y, z, result) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Substracts another vector in float form into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###negate() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Returns the opposite vector, that is the vector with opposite coordinates
###scaleInPlace(scale) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Scales the vector with the given factor

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

###scale(scale) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Scales the vector and returns the result as a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 

###scaleToRef(scale, result) &rarr; void

Scales the vector into a target vector with the given factor

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###equals(otherVector) &rarr; boolean

Tests if two vectors are equal
Returns true if X,Y,Z coordinates are equal

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###equalsWithEpsilon(otherVector, epsilon) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 
optional | epsilon | number | 

###equalsToFloats(x, y, z) &rarr; boolean

Test if a vector is equal to another in float form
Returns true if X,Y,Z coordinates are equal to x,y,z

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

###multiplyInPlace(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Multiply by another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###multiply(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Multiply by another vector and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###multiplyToRef(otherVector, result) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Multiply by another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###multiplyByFloats(x, y, z) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Multiply by another vector in float form and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

###divide(otherVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Divides by another vector and returns the result nin a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 

###divideToRef(otherVector, result) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Divides by another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###MinimizeInPlace(other) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Minimizes this vector with another vector. The result is stored in this vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/2.2-alpha/Vector3) | 

###MaximizeInPlace(other) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Maximizes by another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Vector3](/classes/2.2-alpha/Vector3) | 

###length() &rarr; number

The length of the vector
###lengthSquared() &rarr; number

The squared length of the vector
###normalize() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Normalizes a vector
###clone() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Clones a vector
###copyFrom(source) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Copies another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/2.2-alpha/Vector3) | 

###copyFromFloats(x, y, z) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Copies another vector in float form

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

###static GetClipFactor(vector0, vector1, axis, size) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | vector0 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | vector1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | axis | [Vector3](/classes/2.2-alpha/Vector3) | 
 | size | any | 

###static FromArray(array, offset) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Creates a new vector from a given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 

###static FromFloatArray(array, offset) &rarr; [Vector3](/classes/2.2-alpha/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
optional | offset | number | 

###static FromArrayToRef(array, offset, result) &rarr; void

Sets an existing vector from a given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
 | offset | number | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static FromFloatArrayToRef(array, offset, result) &rarr; void

Sets an existing vector from an array of floats

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
 | offset | number | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static FromFloatsToRef(x, y, z, result) &rarr; void

Sets an existing vector from a set of floats

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Zero() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Returns a new [Vector3](/classes/2.2-alpha/Vector3) with x, y, z to zero
###static Up() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Returns a new [Vector3](/classes/2.2-alpha/Vector3) with y equal 1 anx x, z equal 0
###static TransformCoordinates(vector, transformation) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Transforms a vector into a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 

###static TransformCoordinatesToRef(vector, transformation, result) &rarr; void

Transforms a vector into an existing vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) &rarr; void

Transforms a set of coordinates into an existing vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static TransformCoordinatesToRefSIMD(vector, transformation, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static TransformCoordinatesFromFloatsToRefSIMD(x, y, z, transformation, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static TransformNormal(vector, transformation) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Performs a normal transformation using the given [Matrix](/classes/2.2-alpha/Matrix).

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 

###static TransformNormalToRef(vector, transformation, result) &rarr; void

Performs a normal transformation using the given [Matrix](/classes/2.2-alpha/Matrix) into an existing vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static TransformNormalFromFloatsToRef(x, y, z, transformation, result) &rarr; void

Performs a normal transformation of the set of float using the given [Matrix](/classes/2.2-alpha/Matrix) into an existing vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | transformation | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Performs a Catmull-Rom interpolation using the specified positions.
When the method completes, returns the result of the Catmull-Rom interpolation

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value2 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value3 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value4 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | amount | number | 

###static Clamp(value, min, max) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Restricts a value to be within a specified range.

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector3](/classes/2.2-alpha/Vector3) | 
 | min | [Vector3](/classes/2.2-alpha/Vector3) | 
 | max | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Performs a Hermite spline interpolation.

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | tangent1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value2 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | tangent2 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | amount | number | 

###static Lerp(start, end, amount) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Performs a linear interpolation between two vectors.

####Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector3](/classes/2.2-alpha/Vector3) | 
 | end | [Vector3](/classes/2.2-alpha/Vector3) | 
 | amount | number | 

###static Dot(left, right) &rarr; number

Dot product between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.2-alpha/Vector3) | 
 | right | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Cross(left, right) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Calculates the cross product of two vectors.

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.2-alpha/Vector3) | 
 | right | [Vector3](/classes/2.2-alpha/Vector3) | 

###static CrossToRef(left, right, result) &rarr; void

Calculates the cross product of two vectors and put the result in the passed vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.2-alpha/Vector3) | 
 | right | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Normalize(vector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Returns the normalized version of the passed vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 

###static NormalizeToRef(vector, result) &rarr; void

Put into the result vector the normalized version of the passed vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Project(vector, world, transform, viewport) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Projects a 3D vector from object space into screen space.

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector3](/classes/2.2-alpha/Vector3) | 
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
 | transform | [Matrix](/classes/2.2-alpha/Matrix) | 
 | viewport | [Viewport](/classes/2.2-alpha/Viewport) | 

###static UnprojectFromTransform(source, viewportWidth, viewportHeight, world, transform) &rarr; [Vector3](/classes/2.2-alpha/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/2.2-alpha/Vector3) | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
 | transform | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Unproject(source, viewportWidth, viewportHeight, world, view, projection) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Converts a 3D vector from screen space into world space.

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector3](/classes/2.2-alpha/Vector3) | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
 | view | [Matrix](/classes/2.2-alpha/Matrix) | 
 | projection | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Minimize(left, right) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Minimizes the left vector with the right vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.2-alpha/Vector3) | 
 | right | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Maximize(left, right) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Maximizes the left vector with the right vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector3](/classes/2.2-alpha/Vector3) | 
 | right | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Distance(value1, value2) &rarr; number

Returns the distance between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value2 | [Vector3](/classes/2.2-alpha/Vector3) | 

###static DistanceSquared(value1, value2) &rarr; number

Returns the squared distance between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value2 | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Center(value1, value2) &rarr; [Vector3](/classes/2.2-alpha/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | value2 | [Vector3](/classes/2.2-alpha/Vector3) | 

###static RotationFromAxis(axis1, axis2, axis3) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Given three orthogonal left-handed oriented [Vector3](/classes/2.2-alpha/Vector3) axis in space (target system),

RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply

to something in order to rotate it from its local system to the given target system.

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | axis2 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | axis3 | [Vector3](/classes/2.2-alpha/Vector3) | 

