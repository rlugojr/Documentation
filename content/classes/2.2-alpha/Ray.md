---
ID_PAGE: 25246
PG_TITLE: Ray
PG_VERSION: 2.1
---
##Description

class [Ray](/classes/2.2-alpha/Ray)



##Constructor

##new [Ray](/classes/2.2-alpha/Ray)(origin, direction, length)

Defines a [Ray](/classes/2.2-alpha/Ray)

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/2.2-alpha/Vector3) | 
 | direction | [Vector3](/classes/2.2-alpha/Vector3) | 
optional | length | number | 

##Members

###origin : [Vector3](/classes/2.2-alpha/Vector3)

The starting point of the [Ray](/classes/2.2-alpha/Ray)

###direction : [Vector3](/classes/2.2-alpha/Vector3)

The vector describing the direction of the [Ray](/classes/2.2-alpha/Ray)

###length : number



##Methods

###intersectsBoxMinMax(minimum, maximum) &rarr; boolean

Tests if the ray intersects with the box defined by minimum and maximum

####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.2-alpha/Vector3) | 
 | maximum | [Vector3](/classes/2.2-alpha/Vector3) | 

###intersectsBox(box) &rarr; boolean

Tests if the ray intersects with the given box

####Parameters
 | Name | Type | Description
---|---|---|---
 | box | [BoundingBox](/classes/2.2-alpha/BoundingBox) | 

###intersectsSphere(sphere) &rarr; boolean

Tests if the ray intersects with the given [Sphere](/classes/2.2-alpha/Sphere)

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | any | 

###intersectsTriangle(vertex0, vertex1, vertex2) &rarr; [IntersectionInfo](/classes/2.2-alpha/IntersectionInfo)

Tests if the ray intersects with the given triangle defined by the three vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertex0 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | vertex1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | vertex2 | [Vector3](/classes/2.2-alpha/Vector3) | 

###static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) &rarr; [Ray](/classes/2.2-alpha/Ray)

Creates new [Ray](/classes/2.2-alpha/Ray)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
 | view | [Matrix](/classes/2.2-alpha/Matrix) | 
 | projection | [Matrix](/classes/2.2-alpha/Matrix) | 

###static CreateNewFromTo(origin, end, world) &rarr; [Ray](/classes/2.2-alpha/Ray)

Function will create a new transformed ray starting from origin and ending at the end point. [Ray](/classes/2.2-alpha/Ray)'s length will be set, and ray will be

transformed to the given world matrix.

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/2.2-alpha/Vector3) |  The origin point
 | end | [Vector3](/classes/2.2-alpha/Vector3) |  The end point
optional | world | [Matrix](/classes/2.2-alpha/Matrix) |  a matrix to transform the ray to. Default is the identity matrix.

###static Transform(ray, matrix) &rarr; [Ray](/classes/2.2-alpha/Ray)



####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

