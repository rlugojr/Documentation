---
ID_PAGE: 6714
PG_TITLE: BoundingInfo
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---

Create bounding info for the given mesh
##new [BoundingInfo](page.php?p=6714)(minimum, maximum)



The Bounding Info constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=6751) | The minimum of the bounding info
 | maximum | [Vector3](page.php?p=6751) | The maximum of the bounding info
---

##Members

###minimum : [Vector3](page.php?p=6751)




The minimum of the bounding info



###maximum : [Vector3](page.php?p=6751)




The maximum of the bounding info



###boundingBox : [BoundingBox](page.php?p=6713)




The bounding box of the bounding info



###boundingSphere : [BoundingSphere](page.php?p=6715)




The bounding sphere of the bounding info











##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the bounding





####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=6755)[] | The frustum planes
---

###isCompletelyInFrustum(frustumPlanes) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=6755)[] | 
---

###intersectsPoint(point) &rarr; boolean
Check if the bounding sphere or the bounding box intersect the given point.





####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=6751) | The point
---

###intersects(boundingInfo, precise) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](page.php?p=6714) | The bounding info
 | precise | boolean | False : check only bounding volumes, true check point by point
---
