---
ID_PAGE: 25201
PG_TITLE: BoundingBox
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
##Description

class [BoundingBox](/classes/2.2-alpha/BoundingBox)



##Constructor

##new [BoundingBox](/classes/2.2-alpha/BoundingBox)(minimum, maximum)

The [BoundingBox](/classes/2.2-alpha/BoundingBox) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.2-alpha/Vector3) | 
 | maximum | [Vector3](/classes/2.2-alpha/Vector3) | 

##Members

###minimum : [Vector3](/classes/2.2-alpha/Vector3)

The minimum size of the bounding box

###maximum : [Vector3](/classes/2.2-alpha/Vector3)

The maximum size of the bounding box

###vectors : [Vector3](/classes/2.2-alpha/Vector3)[]

The vectors of the boundingBox

###center : [Vector3](/classes/2.2-alpha/Vector3)

The center of the boundingBox

###extendSize : [Vector3](/classes/2.2-alpha/Vector3)

The extend size of the boundingBox

###directions : [Vector3](/classes/2.2-alpha/Vector3)[]

The directions of the boundingBox

###vectorsWorld : [Vector3](/classes/2.2-alpha/Vector3)[]

The vectors world of the boundingBox

###minimumWorld : [Vector3](/classes/2.2-alpha/Vector3)

The minimum world of the boundingBox

###maximumWorld : [Vector3](/classes/2.2-alpha/Vector3)

The maximum world of the boundingBox

##Methods

###getWorldMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Return this world matrix
###isInFrustum(frustumPlanes) &rarr; boolean

Returns true if this bounding box is in the given frustrum

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

Check if this bounding box intersect the point given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.2-alpha/Vector3) | 

###intersectsSphere(sphere) &rarr; boolean

Check is this bounding box intersects the given sphere

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | [BoundingSphere](/classes/2.2-alpha/BoundingSphere) | 

###intersectsMinMax(min, max) &rarr; boolean

Check if one of minimum or maximum values are intersected by the bounding box

####Parameters
 | Name | Type | Description
---|---|---|---
 | min | [Vector3](/classes/2.2-alpha/Vector3) | 
 | max | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Intersects(box0, box1) &rarr; boolean

Check if the two boxes given in parameters intersects each other

####Parameters
 | Name | Type | Description
---|---|---|---
 | box0 | [BoundingBox](/classes/2.2-alpha/BoundingBox) | 
 | box1 | [BoundingBox](/classes/2.2-alpha/BoundingBox) | 

###static IntersectsSphere(minPoint, maxPoint, sphereCenter, sphereRadius) &rarr; boolean

Check if the sphere is intersected by the bounding box

####Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/2.2-alpha/Vector3) | 
 | maxPoint | [Vector3](/classes/2.2-alpha/Vector3) | 
 | sphereCenter | [Vector3](/classes/2.2-alpha/Vector3) | 
 | sphereRadius | number | 

###static IsCompletelyInFrustum(boundingVectors, frustumPlanes) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###static IsInFrustum(boundingVectors, frustumPlanes) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

