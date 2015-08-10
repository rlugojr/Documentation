---
ID_PAGE: 24538
PG_TITLE: Plane
PG_VERSION: 1.14
---
##new [Plane](/classes/Plane)(a, b, c, d)

Creates a new [Plane](/classes/Plane)
####Parameters
 | Name | Type | Description
---|---|---|---
 | a | number | The X component of the normal
 | b | number | The Y component of the normal
 | c | number | The Z component of the normal
 | d | number | The distance of the [Plane](/classes/Plane) along its normal from the origin
---

##Members

###normal : [Vector3](/classes/Vector3)


The normal [Vector3](/classes/Vector3) component of the plane

###d : number


The distance component of the plane, defining the radius of the sphere tangent to the plane and having its center at the point zero



##Methods

###asArray() &rarr; number[]
Returns an array representation of the plane


###clone() &rarr; [Plane](/classes/Plane)
Clones the plane


###normalize() &rarr; void
Changes the coefficients of the normal vector of a [Plane](/classes/Plane) to make it of unit length.


###transform(transformation) &rarr; [Plane](/classes/Plane)
Transforms a normalized [Plane](/classes/Plane) by a [Matrix](/classes/Matrix)

####Parameters
 | Name | Type | Description
---|---|---|---
 | transformation | [Matrix](/classes/Matrix) | The transform matrix to apply to the [Plane](/classes/Plane)
---

###dotCoordinate(point) &rarr; number
Returns the dot product of a given [Vector3](/classes/Vector3) and the normal vector of this [Plane](/classes/Plane) plus the distance value of the [Plane](/classes/Plane)

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | any | The given [Vector3](/classes/Vector3) point
---

###copyFromPoints(point1, point2, point3) &rarr; void
Creates a [Plane](/classes/Plane) using a set of three points

####Parameters
 | Name | Type | Description
---|---|---|---
 | point1 | [Vector3](/classes/Vector3) | The first [Vector3](/classes/Vector3) point
 | point2 | [Vector3](/classes/Vector3) | The second [Vector3](/classes/Vector3) point
 | point3 | [Vector3](/classes/Vector3) | The third [Vector3](/classes/Vector3) point
---

###isFrontFacingTo(direction, epsilon) &rarr; boolean
Tests if this plane is front facing the given direction using a precision value

####Parameters
 | Name | Type | Description
---|---|---|---
 | direction | [Vector3](/classes/Vector3) | The [Vector3](/classes/Vector3) direction to compare
 | epsilon | number | The precision value
---

###signedDistanceTo(point) &rarr; number
Returns the signed distance between this plane and th given point

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/Vector3) | The given point
---

###static FromArray(array) &rarr; [Plane](/classes/Plane)
Creates a new [Plane](/classes/Plane) using an array of numbers

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array of numbers
---

###static FromPoints(point1, point2, point3) &rarr; [Plane](/classes/Plane)
Creates a [Plane](/classes/Plane) using a set of three [Vector3](/classes/Vector3) points

####Parameters
 | Name | Type | Description
---|---|---|---
 | point1 | any | The first [Vector3](/classes/Vector3) point
 | point2 | any | The second [Vector3](/classes/Vector3) point
 | point3 | any | The third [Vector3](/classes/Vector3) point
---

###static FromPositionAndNormal(origin, normal) &rarr; [Plane](/classes/Plane)
Creates a [Plane](/classes/Plane) using origin and normal inputs

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/Vector3) | The origin component
 | normal | [Vector3](/classes/Vector3) | The normal component
---

###static SignedDistanceToPlaneFromPositionAndNormal(origin, normal, point) &rarr; number
Returns the distance between a point and a Plan using its origin and its normal

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/Vector3) | The plane's origin component
 | normal | [Vector3](/classes/Vector3) | The plane's normal component
 | point | [Vector3](/classes/Vector3) | The point find distance with
---
