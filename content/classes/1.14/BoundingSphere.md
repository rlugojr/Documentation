---
ID_PAGE: 3302
PG_TITLE: BoundingSphere
PG_VERSION: 1.14
---

Create a bounding sphere for the given mesh
##new [BoundingSphere](page.php?p=3302)(minimum, maximum)

The [BoundingSphere](page.php?p=3302) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=3327) | The minimum of the sphere
 | maximum | [Vector3](page.php?p=3327) | The maximum of the sphere
---

##Members

###minimum : [Vector3](page.php?p=3327)


The minimum size of the bounding sphere

###maximum : [Vector3](page.php?p=3327)


The minimum of the bounding sphere

###center : [Vector3](page.php?p=3327)


The center of the bounding sphere

###radius : number


The radius of the bounding sphere

###centerWorld : [Vector3](page.php?p=3327)


###radiusWorld : number




##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the boundingSphere is in frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=3330)[] | the frustum planes
---

###intersectsPoint(point) &rarr; boolean
Check if this bounding sphere intersect the point given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=3327) | The point
---

###static Intersects(sphere0, sphere1) &rarr; boolean
Check if the two given sphere are intersecting each other

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere0 | [BoundingSphere](page.php?p=3302) | The first sphere
 | sphere1 | [BoundingSphere](page.php?p=3302) | The second sphere
---
