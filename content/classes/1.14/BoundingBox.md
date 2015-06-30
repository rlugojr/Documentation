---
ID_PAGE: 3300
PG_TITLE: BoundingBox
PG_VERSION: 1.14
---

Create the bounding box for the given mesh
##new [BoundingBox](page.php?p=3300)(minimum, maximum)

The [BoundingBox](page.php?p=3300) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=3327) | @param minimum
 | maximum | [Vector3](page.php?p=3327) | @param maximum
---

##Members

###minimum : [Vector3](page.php?p=3327)


The minimum size of the bounding box

###maximum : [Vector3](page.php?p=3327)


The maximum size of the bounding box

###vectors : [Vector3](page.php?p=3327)[]


The vectors of the boundingBox

###center : [Vector3](page.php?p=3327)


The center of the boundingBox

###extendSize : [Vector3](page.php?p=3327)


The extend size of the boundingBox

###directions : [Vector3](page.php?p=3327)[]


The directions of the boundingBox

###vectorsWorld : [Vector3](page.php?p=3327)[]


The vectors world of the boundingBox

###minimumWorld : [Vector3](page.php?p=3327)


The minimum world of the boundingBox

###maximumWorld : [Vector3](page.php?p=3327)


The maximum world of the boundingBox



##Methods

###getWorldMatrix() &rarr; [Matrix](page.php?p=3329)
Return this world matrix


###isInFrustum(frustumPlanes) &rarr; boolean
 Returns true if this bounding box is in the given frustrum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=3330)[] | [Frustum](page.php?p=3332) planes
---

###intersectsPoint(point) &rarr; boolean
Check if this bounding box intersect the point given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=3327) | the point coordinates
---

###intersectsSphere(sphere) &rarr; boolean
Check is this bounding box intersects the given sphere

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | [BoundingSphere](page.php?p=3302) | The given sphere
---

###intersectsMinMax(min, max) &rarr; boolean
Check if one of minimum or maximum values are intersected by the bounding box

####Parameters
 | Name | Type | Description
---|---|---|---
 | min | [Vector3](page.php?p=3327) | The minimum value of this world
 | max | [Vector3](page.php?p=3327) | The maximum value of this world
---

###static Intersects(box0, box1) &rarr; boolean
Check if the two boxes given in parameters intersects each other

####Parameters
 | Name | Type | Description
---|---|---|---
 | box0 | [BoundingBox](page.php?p=3300) | The first box
 | box1 | [BoundingBox](page.php?p=3300) | The second box
---

###static IntersectsSphere(minPoint, maxPoint, sphereCenter, sphereRadius) &rarr; boolean
Check if the sphere is intersected by the bounding box

####Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](page.php?p=3327) | @param minPoint
 | maxPoint | [Vector3](page.php?p=3327) | @param maxPoint
 | sphereCenter | [Vector3](page.php?p=3327) | the sphere center
 | sphereRadius | number | The sphere radius
---

###static IsInFrustum(boundingVectors, frustumPlanes) &rarr; boolean
Check if the bounding box in is frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](page.php?p=3327)[] | @param boundingVectors
 | frustumPlanes | [Plane](page.php?p=3330)[] | [Frustum](page.php?p=3332) planes
---
