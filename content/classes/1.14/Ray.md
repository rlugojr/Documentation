---
ID_PAGE: 3333
PG_TITLE: Ray
PG_VERSION: 1.14
---
##new [Ray](page.php?p=3333)(origin, direction)

Defines a [Ray](page.php?p=3333)
####Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](page.php?p=3327) | The initial starting point of the [Ray](page.php?p=3333)
 | direction | [Vector3](page.php?p=3327) | The initial vector describing the direction of the [Ray](page.php?p=3333)
---

##Members

###origin : [Vector3](page.php?p=3327)


The starting point of the [Ray](page.php?p=3333)

###direction : [Vector3](page.php?p=3327)


The vector describing the direction of the [Ray](page.php?p=3333)



##Methods

###intersectsBoxMinMax(minimum, maximum) &rarr; boolean
Tests if the ray intersects with the box defined by minimum and maximum

####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=3327) | The minimum vector defining the box
 | maximum | [Vector3](page.php?p=3327) | The maximum vector defining the box
---

###intersectsBox(box) &rarr; boolean
Tests if the ray intersects with the given box

####Parameters
 | Name | Type | Description
---|---|---|---
 | box | [BoundingBox](page.php?p=3300) | The box to test with
---

###intersectsSphere(sphere) &rarr; boolean
Tests if the ray intersects with the given [Sphere](page.php?p=3397)

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | any | The sphere to test with
---

###intersectsTriangle(vertex0, vertex1, vertex2) &rarr; [IntersectionInfo](page.php?p=3298)
Tests if the ray intersects with the given triangle defined by the three vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertex0 | [Vector3](page.php?p=3327) | The first vector defining the triangle
 | vertex1 | [Vector3](page.php?p=3327) | The second vector defining the triangle
 | vertex2 | [Vector3](page.php?p=3327) | The third vector defining the triangle
---

###static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) &rarr; [Ray](page.php?p=3333)
Creates new [Ray](page.php?p=3333)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | y | number | @param y
 | viewportWidth | number | @param viewportWidth
 | viewportHeight | number | @param viewportHeight
 | world | [Matrix](page.php?p=3329) | @param world
 | view | [Matrix](page.php?p=3329) | @param view
 | projection | [Matrix](page.php?p=3329) | @param projection
---

###static Transform(ray, matrix) &rarr; [Ray](page.php?p=3333)
Transforms a given ray using a given matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=3333) | The given ray
 | matrix | [Matrix](page.php?p=3329) | The given matrix to apply
---
