---
ID_PAGE: 3301
PG_TITLE: BoundingInfo
PG_VERSION: 1.14
---

Create bounding info for the given mesh
##new [BoundingInfo](page.php?p=3301)(minimum, maximum)

The Bounding Info constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=3327) | The minimum of the bounding info
 | maximum | [Vector3](page.php?p=3327) | The maximum of the bounding info
---

##Members

###minimum : [Vector3](page.php?p=3327)


The minimum of the bounding info

###maximum : [Vector3](page.php?p=3327)


The maximum of the bounding info

###boundingBox : [BoundingBox](page.php?p=3300)


The bounding box of the bounding info

###boundingSphere : [BoundingSphere](page.php?p=3302)


The bounding sphere of the bounding info



##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the bounding

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=3330)[] | The frustum planes
---

###intersectsPoint(point) &rarr; boolean
Check if the bounding sphere or the bounding box intersect the given point.

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=3327) | The point
---

###intersects(boundingInfo, precise) &rarr; boolean
Check if the bounding sphere intersects the other object bounding sphere. Same with the two bounding boxes.

####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](page.php?p=3301) | The bounding info
 | precise | boolean | False : check only bounding volumes, true check point by point
---
