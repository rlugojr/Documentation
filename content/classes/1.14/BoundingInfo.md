---
ID_PAGE: 24509
PG_TITLE: BoundingInfo
PG_VERSION: 1.14
---

Create bounding info for the given mesh
##new [BoundingInfo](/classes/BoundingInfo)(minimum, maximum)

The Bounding Info constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/Vector3) | The minimum of the bounding info
 | maximum | [Vector3](/classes/Vector3) | The maximum of the bounding info
---

##Members

###minimum : [Vector3](/classes/Vector3)


The minimum of the bounding info

###maximum : [Vector3](/classes/Vector3)


The maximum of the bounding info

###boundingBox : [BoundingBox](/classes/BoundingBox)


The bounding box of the bounding info

###boundingSphere : [BoundingSphere](/classes/BoundingSphere)


The bounding sphere of the bounding info



##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the bounding

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/Plane)[] | The frustum planes
---

###intersectsPoint(point) &rarr; boolean
Check if the bounding sphere or the bounding box intersect the given point.

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/Vector3) | The point
---

###intersects(boundingInfo, precise) &rarr; boolean
Check if the bounding sphere intersects the other object bounding sphere. Same with the two bounding boxes.

####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/BoundingInfo) | The bounding info
 | precise | boolean | False : check only bounding volumes, true check point by point
---
