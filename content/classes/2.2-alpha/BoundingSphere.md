---
ID_PAGE: 25203
PG_TITLE: BoundingSphere
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
##Description

class [BoundingSphere](/classes/2.2-alpha/BoundingSphere)



##Constructor

##new [BoundingSphere](/classes/2.2-alpha/BoundingSphere)(minimum, maximum)

The [BoundingSphere](/classes/2.2-alpha/BoundingSphere) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.2-alpha/Vector3) | 
 | maximum | [Vector3](/classes/2.2-alpha/Vector3) | 

##Members

###minimum : [Vector3](/classes/2.2-alpha/Vector3)

The minimum size of the bounding sphere

###maximum : [Vector3](/classes/2.2-alpha/Vector3)

The minimum of the bounding sphere

###center : [Vector3](/classes/2.2-alpha/Vector3)

The center of the bounding sphere

###radius : number

The radius of the bounding sphere

###centerWorld : [Vector3](/classes/2.2-alpha/Vector3)



###radiusWorld : number



##Methods

###isInFrustum(frustumPlanes) &rarr; boolean

Check if the boundingSphere is in frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###intersectsPoint(point) &rarr; boolean

Check if this bounding sphere intersect the point given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.2-alpha/Vector3) | 

###static Intersects(sphere0, sphere1) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere0 | [BoundingSphere](/classes/2.2-alpha/BoundingSphere) | 
 | sphere1 | [BoundingSphere](/classes/2.2-alpha/BoundingSphere) | 

