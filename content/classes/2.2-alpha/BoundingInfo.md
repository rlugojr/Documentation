---
ID_PAGE: 25202
PG_TITLE: BoundingInfo
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
##Description

class [BoundingInfo](/classes/2.2-alpha/BoundingInfo)



##Constructor

##new [BoundingInfo](/classes/2.2-alpha/BoundingInfo)(minimum, maximum)

The Bounding Info constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.2-alpha/Vector3) | 
 | maximum | [Vector3](/classes/2.2-alpha/Vector3) | 

##Members

###minimum : [Vector3](/classes/2.2-alpha/Vector3)

The minimum of the bounding info

###maximum : [Vector3](/classes/2.2-alpha/Vector3)

The maximum of the bounding info

###boundingBox : [BoundingBox](/classes/2.2-alpha/BoundingBox)

The bounding box of the bounding info

###boundingSphere : [BoundingSphere](/classes/2.2-alpha/BoundingSphere)

The bounding sphere of the bounding info

##Methods

###isInFrustum(frustumPlanes) &rarr; boolean

Check if the bounding

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###isCompletelyInFrustum(frustumPlanes) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###intersectsPoint(point) &rarr; boolean

Check if the bounding sphere or the bounding box intersect the given point.

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.2-alpha/Vector3) | 

###intersects(boundingInfo, precise) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/2.2-alpha/BoundingInfo) | 
 | precise | boolean | 

