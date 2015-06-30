---
ID_PAGE: 6758
PG_TITLE: Ray
PG_VERSION: 2.1
---
##new [Ray](page.php?p=6758)(origin, direction, length)



Defines a [Ray](page.php?p=6758)




####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](page.php?p=6751) | The initial starting point of the [Ray](page.php?p=6758)
 | direction | [Vector3](page.php?p=6751) | The initial vector describing the direction of the [Ray](page.php?p=6758)
optional | length | number | 
---

##Members

###origin : [Vector3](page.php?p=6751)




The starting point of the [Ray](page.php?p=6758)



###direction : [Vector3](page.php?p=6751)




The vector describing the direction of the [Ray](page.php?p=6758)






###length : number









##Methods

###intersectsBoxMinMax(minimum, maximum) &rarr; boolean
Tests if the ray intersects with the box defined by minimum and maximum





####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=6751) | The minimum vector defining the box
 | maximum | [Vector3](page.php?p=6751) | The maximum vector defining the box
---

###intersectsBox(box) &rarr; boolean
Tests if the ray intersects with the given box





####Parameters
 | Name | Type | Description
---|---|---|---
 | box | [BoundingBox](page.php?p=6713) | The box to test with
---

###intersectsSphere(sphere) &rarr; boolean
Tests if the ray intersects with the given [Sphere](page.php?p=6867)





####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | any | The sphere to test with
---

###intersectsTriangle(vertex0, vertex1, vertex2) &rarr; [IntersectionInfo](page.php?p=6711)
Tests if the ray intersects with the given triangle defined by the three vectors





####Parameters
 | Name | Type | Description
---|---|---|---
 | vertex0 | [Vector3](page.php?p=6751) | The first vector defining the triangle
 | vertex1 | [Vector3](page.php?p=6751) | The second vector defining the triangle
 | vertex2 | [Vector3](page.php?p=6751) | The third vector defining the triangle
---

###static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) &rarr; [Ray](page.php?p=6758)
Creates new [Ray](page.php?p=6758)





####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | y | number | @param y
 | viewportWidth | number | @param viewportWidth
 | viewportHeight | number | @param viewportHeight
 | world | [Matrix](page.php?p=6754) | @param world
 | view | [Matrix](page.php?p=6754) | @param view
 | projection | [Matrix](page.php?p=6754) | @param projection
---

###static CreateNewFromTo(origin, end, world) &rarr; [Ray](page.php?p=6758)
Function will create a new transformed ray starting from origin and ending at the end point. [Ray](page.php?p=6758)'s length will be set, and ray will be
transformed to the given world matrix.

####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](page.php?p=6751) | The origin point
 | end | [Vector3](page.php?p=6751) | The end point
optional | world | [Matrix](page.php?p=6754) | a matrix to transform the ray to. Default is the identity matrix.
---

###static Transform(ray, matrix) &rarr; [Ray](page.php?p=6758)

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=6758) | The given ray
 | matrix | [Matrix](page.php?p=6754) | The given matrix to apply
---
