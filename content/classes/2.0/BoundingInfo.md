---
ID_PAGE: 5771
PG_TITLE: BoundingInfo
PG_VERSION: 2.0
---

Create bounding info for the given mesh
##new [BoundingInfo](page.php?p=5771)(minimum, maximum)


The Bounding Info constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=5808) | The minimum of the bounding info
 | maximum | [Vector3](page.php?p=5808) | The maximum of the bounding info
---

##Members

###minimum : [Vector3](page.php?p=5808)



The minimum of the bounding info


###maximum : [Vector3](page.php?p=5808)



The maximum of the bounding info


###boundingBox : [BoundingBox](page.php?p=5770)



The bounding box of the bounding info


###boundingSphere : [BoundingSphere](page.php?p=5772)



The bounding sphere of the bounding info







##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the bounding



####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=5812)[] | The frustum planes
---

###isCompletelyInFrustum(frustumPlanes) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=5812)[] | 
---

###intersectsPoint(point) &rarr; boolean
Check if the bounding sphere or the bounding box intersect the given point.



####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=5808) | The point
---

###intersects(boundingInfo, precise) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](page.php?p=5771) | The bounding info
 | precise | boolean | False : check only bounding volumes, true check point by point
---
