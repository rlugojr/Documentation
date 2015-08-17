---
ID_PAGE: 25241
PG_TITLE: Quaternion
PG_VERSION: 2.1
---
##Description

class [Quaternion](/classes/2.2-alpha/Quaternion)



##Constructor

##new [Quaternion](/classes/2.2-alpha/Quaternion)(x, y, z, w)

Creates a new [Quaternion](/classes/2.2-alpha/Quaternion)

####Parameters
 | Name | Type | Description
---|---|---|---
optional | x | number | 
optional | y | number | 
optional | z | number | 
optional | w | number | 

##Members

###x : number

The first coordinate

###y : number

The second coordinate

###z : number

The third coordinate

###w : number

The fourth coordinate

##Methods

###toString() &rarr; string

Returns a string representation of the quaternion
###asArray() &rarr; number[]

Returns an array representation of the quaternion
###equals(otherQuaternion) &rarr; boolean

Tests if two quaternion are identical

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherQuaternion | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###clone() &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Returns a clone of the quaternion
###copyFrom(other) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Copies another quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###copyFromFloats(x, y, z, w) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Copies another queternion from a set of floats

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 

###add(other) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Adds in another quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###subtract(other) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Substracts another quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###scale(value) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Scales a quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

###multiply(q1) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Multiplies by another quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###multiplyToRef(q1, result) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Multiplies another quaternion into a third target quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | q1 | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | result | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###length() &rarr; number

The length of the quaternion
###normalize() &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Normalizes the quaternion
###toEulerAngles() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Converts the quaternion into a [Vector3](/classes/2.2-alpha/Vector3) Euler angle and returns it
###toEulerAnglesToRef(result) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Converts the quaternion into a target [Vector3](/classes/2.2-alpha/Vector3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Vector3](/classes/2.2-alpha/Vector3) | 

###toRotationMatrix(result) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Converts the quaternion into a target rotation [Matrix](/classes/2.2-alpha/Matrix) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | result | [Matrix](/classes/2.2-alpha/Matrix) | 

###fromRotationMatrix(matrix) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Imports a source matrix into the current quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###static FromRotationMatrix(matrix) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###static FromRotationMatrixToRef(matrix, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 
 | result | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###static Inverse(q) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Returns the passed quaternion's inverse

####Parameters
 | Name | Type | Description
---|---|---|---
 | q | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###static Identity() &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)


###static RotationAxis(axis, angle) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Creates a quaternion using an axis and an angle

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.2-alpha/Vector3) | 
 | angle | number | 

###static FromArray(array, offset) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Creates a quaterion from agiven array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | 
optional | offset | number | 

###static RotationYawPitchRoll(yaw, pitch, roll) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)

Creates a quaternion from yaw, pitch and roll values

####Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 

###static RotationYawPitchRollToRef(yaw, pitch, roll, result) &rarr; void

Creates a quaternion from yaw, pitch and roll values and put it in the target quaternion

####Parameters
 | Name | Type | Description
---|---|---|---
 | yaw | number | 
 | pitch | number | 
 | roll | number | 
 | result | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###static RotationAlphaBetaGamma(alpha, beta, gamma) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)



####Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number | 
 | beta | number | 
 | gamma | number | 

###static RotationAlphaBetaGammaToRef(alpha, beta, gamma, result) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | alpha | number | 
 | beta | number | 
 | gamma | number | 
 | result | [Quaternion](/classes/2.2-alpha/Quaternion) | 

###static Slerp(left, right, amount) &rarr; [Quaternion](/classes/2.2-alpha/Quaternion)



####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | right | [Quaternion](/classes/2.2-alpha/Quaternion) | 
 | amount | number | 

