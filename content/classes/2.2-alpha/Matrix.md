---
ID_PAGE: 25242
PG_TITLE: Matrix
PG_VERSION: 2.1
---
##Description

class [Matrix](/classes/2.2-alpha/Matrix)



##Members

###m : Float32Array

The matrix, which is an array

##Methods

###isIdentity() &rarr; boolean

Tests if the matrix is an identity matrix
###determinant() &rarr; number

Returns the determinant of the matrix
###toArray() &rarr; Float32Array

Returns the matrix in array form
###asArray() &rarr; Float32Array

Returns the matrix in array form
###invert() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Inverts the matrix
###reset() &rarr; [Matrix](/classes/2.2-alpha/Matrix)


###add(other) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 

###addToRef(other, result) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###addToSelf(other) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 

###invertToRef(other) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Inverts the matrix and put it into another matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 

###invertToRefSIMD(other) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 

###setTranslation(vector3) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Sets a translation to the matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.2-alpha/Vector3) | 

###multiply(other) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Multiplies by another matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 

###copyFrom(other) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Copies another matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 

###copyToArray(array, offset) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Copies the current matrix into an array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
optional | offset | number | 

###multiplyToRef(other, result) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Multiplies another matrix into an existing matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###multiplyToArray(other, result, offset) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Multiplies another matrix into an existing array at a given index

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | Float32Array | 
 | offset | number | 

###multiplyToArraySIMD(other, result, offset) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 
optional | offset | number | 

###equals(value) &rarr; boolean

Tests if two matrices are equal

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Matrix](/classes/2.2-alpha/Matrix) | 

###clone() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Clones a martix
###decompose(scale, rotation, translation) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/2.2-alpha/Vector3) | 
 | rotation | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | translation | [Vector3](/classes/2.2-alpha/Vector3) | 

###static FromArray(array, offset) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a new matrix from an array from a given index

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 

###static FromArrayToRef(array, offset, result) &rarr; void

Fills an existing matrix with an array from a given index

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
 | offset | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static FromFloat32ArrayToRefScaled(array, offset, scale, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | array | Float32Array | 
 | offset | number | 
 | scale | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) &rarr; void

Fills an existsing matrix with a set of values

####Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number | 
 | initialM12 | number | 
 | initialM13 | number | 
 | initialM14 | number | 
 | initialM21 | number | 
 | initialM22 | number | 
 | initialM23 | number | 
 | initialM24 | number | 
 | initialM31 | number | 
 | initialM32 | number | 
 | initialM33 | number | 
 | initialM34 | number | 
 | initialM41 | number | 
 | initialM42 | number | 
 | initialM43 | number | 
 | initialM44 | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a matrix from set of values

####Parameters
 | Name | Type | Description
---|---|---|---
 | initialM11 | number | 
 | initialM12 | number | 
 | initialM13 | number | 
 | initialM14 | number | 
 | initialM21 | number | 
 | initialM22 | number | 
 | initialM23 | number | 
 | initialM24 | number | 
 | initialM31 | number | 
 | initialM32 | number | 
 | initialM33 | number | 
 | initialM34 | number | 
 | initialM41 | number | 
 | initialM42 | number | 
 | initialM43 | number | 
 | initialM44 | number | 

###static Compose(scale, rotation, translation) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | [Vector3](/classes/2.2-alpha/Vector3) | 
 | rotation | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | translation | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Identity() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Returns the identity matrix
###static IdentityToRef(result) &rarr; void

Fills an existing matrix with the identity matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Zero() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Returns a null matrix
###static RotationX(angle) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Rotates a matrix around X axis

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

###static Invert(source) &rarr; [Matrix](/classes/2.2-alpha/Matrix)



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Matrix](/classes/2.2-alpha/Matrix) | 

###static RotationXToRef(angle, result) &rarr; void

Rotates a matrix around X axis into an existing matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static RotationY(angle) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Rotates a matrix around Y axis

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

###static RotationYToRef(angle, result) &rarr; void

Rotates a matrix around Y axis into an existing axis

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static RotationZ(angle) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Rotates a matrix around Z axis

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

###static RotationZToRef(angle, result) &rarr; void

Rotates a matrix around Z axis into an existing axis

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static RotationAxis(axis, angle) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Rotates a matrix using a [Vector3](/classes/2.2-alpha/Vector3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.2-alpha/Vector3) | 
 | angle | number | 

###static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Rotates a matrix using yaw, pitch and roll values

####Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 

###static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Rotates a matrix using yaw, pitch and roll values and put it into a target matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Scaling(x, y, z) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a scaling matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

###static ScalingToRef(x, y, z, result) &rarr; void

Creates a scaling matrix and put it into a target matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Translation(x, y, z) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a matrix with a translation pitch defined by x, y, z

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 

###static TranslationToRef(x, y, z, result) &rarr; void

Creates a matrix with a translation pitch defined by x, y, z and put it into a target matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static LookAtLH(eye, target, up) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Builds a left-handed look-at [Matrix](/classes/2.2-alpha/Matrix)

####Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/2.2-alpha/Vector3) | 
 | target | [Vector3](/classes/2.2-alpha/Vector3) | 
 | up | [Vector3](/classes/2.2-alpha/Vector3) | 

###static LookAtLHToRef(eye, target, up, result) &rarr; void

Builds a left-handed look-at [Matrix](/classes/2.2-alpha/Matrix) and put it in a target matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | eye | [Vector3](/classes/2.2-alpha/Vector3) | 
 | target | [Vector3](/classes/2.2-alpha/Vector3) | 
 | up | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static LookAtLHToRefSIMD(eyeRef, targetRef, upRef, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | eyeRef | [Vector3](/classes/2.2-alpha/Vector3) | 
 | targetRef | [Vector3](/classes/2.2-alpha/Vector3) | 
 | upRef | [Vector3](/classes/2.2-alpha/Vector3) | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static OrthoLH(width, height, znear, zfar) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a left-handed orthogonal projection matrix.

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | znear | number | 
 | zfar | number | 

###static OrthoLHToRef(width, height, znear, zfar, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | znear | number | 
 | zfar | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static OrthoOffCenterLH(left, right, bottom, top, znear, zfar) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a custom left-handed orthogonal projection matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | number | 
 | right | number | 
 | bottom | number | 
 | top | number | 
 | znear | number | 
 | zfar | number | 

###static OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result) &rarr; void

Creates a custom left-handed orthogonal projection matrix and put it into the target matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | number | 
 | right | any | 
 | bottom | number | 
 | top | number | 
 | znear | number | 
 | zfar | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###static PerspectiveLH(width, height, znear, zfar) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a left-handed perspective projection matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | znear | number | 
 | zfar | number | 

###static PerspectiveFovLH(fov, aspect, znear, zfar) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates a left-handed perspective projection matrix based on the field of view

####Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number | 
 | aspect | number | 
 | znear | number | 
 | zfar | number | 

###static PerspectiveFovLHToRef(fov, aspect, znear, zfar, result, fovMode) &rarr; void

Creates a left-handed perspective projection matrix based on the field of view and put it into the target matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | fov | number | 
 | aspect | number | 
 | znear | number | 
 | zfar | number | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 
optional | fovMode | number | 

###static GetFinalMatrix(viewport, world, view, projection, zmin, zmax) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

??

####Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/2.2-alpha/Viewport) | 
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
 | view | [Matrix](/classes/2.2-alpha/Matrix) | 
 | projection | [Matrix](/classes/2.2-alpha/Matrix) | 
 | zmin | number | 
 | zmax | number | 

###static GetAsMatrix2x2(matrix) &rarr; Float32Array



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###static GetAsMatrix3x3(matrix) &rarr; Float32Array



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Transpose(matrix) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Transposes the rows and the columns of the given matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###static Reflection(plane) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Creates the reflection matrix of a given [Plane](/classes/2.2-alpha/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/2.2-alpha/Plane) | 

###static ReflectionToRef(plane, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/2.2-alpha/Plane) | 
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

