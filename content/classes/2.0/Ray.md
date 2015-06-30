---
ID_PAGE: 5815
PG_TITLE: Ray
PG_VERSION: 2.0
---
##new [Ray](page.php?p=5815)(origin, direction, length)


Defines a [Ray](page.php?p=5815)


####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](page.php?p=5808) | The initial starting point of the [Ray](page.php?p=5815)
 | direction | [Vector3](page.php?p=5808) | The initial vector describing the direction of the [Ray](page.php?p=5815)
optional | length | number | 
---

##Members

###origin : [Vector3](page.php?p=5808)



The starting point of the [Ray](page.php?p=5815)


###direction : [Vector3](page.php?p=5808)



The vector describing the direction of the [Ray](page.php?p=5815)





###length : number




##Methods

###intersectsBoxMinMax(minimum, maximum) &rarr; boolean
Tests if the ray intersects with the box defined by minimum and maximum



####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=5808) | The minimum vector defining the box
 | maximum | [Vector3](page.php?p=5808) | The maximum vector defining the box
---

###intersectsBox(box) &rarr; boolean
Tests if the ray intersects with the given box



####Parameters
 | Name | Type | Description
---|---|---|---
 | box | [BoundingBox](page.php?p=5770) | The box to test with
---

###intersectsSphere(sphere) &rarr; boolean
Tests if the ray intersects with the given [Sphere](page.php?p=5910)



####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | any | The sphere to test with
---

###intersectsTriangle(vertex0, vertex1, vertex2) &rarr; [IntersectionInfo](page.php?p=5768)
Tests if the ray intersects with the given triangle defined by the three vectors



####Parameters
 | Name | Type | Description
---|---|---|---
 | vertex0 | [Vector3](page.php?p=5808) | The first vector defining the triangle
 | vertex1 | [Vector3](page.php?p=5808) | The second vector defining the triangle
 | vertex2 | [Vector3](page.php?p=5808) | The third vector defining the triangle
---

###static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) &rarr; [Ray](page.php?p=5815)
Creates new [Ray](page.php?p=5815)



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | y | number | @param y
 | viewportWidth | number | @param viewportWidth
 | viewportHeight | number | @param viewportHeight
 | world | [Matrix](page.php?p=5811) | @param world
 | view | [Matrix](page.php?p=5811) | @param view
 | projection | [Matrix](page.php?p=5811) | @param projection
---

###static CreateNewFromTo(origin, end, world) &rarr; [Ray](page.php?p=5815)
Function will create a new transformed ray starting from origin and ending at the end point. [Ray](page.php?p=5815)'s length will be set, and ray will be
transformed to the given world matrix.

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](page.php?p=5808) | The origin point
 | end | [Vector3](page.php?p=5808) | The end point
optional | world | [Matrix](page.php?p=5811) | a matrix to transform the ray to. Default is the identity matrix.
---

###static Transform(ray, matrix) &rarr; [Ray](page.php?p=5815)

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=5815) | The given ray
 | matrix | [Matrix](page.php?p=5811) | The given matrix to apply
---
