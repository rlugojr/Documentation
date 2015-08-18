---
ID_PAGE: 25258
PG_TITLE: CSG
PG_VERSION: 2.1
---
##Description

class [CSG](/classes/2.2-alpha/CSG)



##Members

###matrix : [Matrix](/classes/2.2-alpha/Matrix)

The matrix

###position : [Vector3](/classes/2.2-alpha/Vector3)

The position

###rotation : [Vector3](/classes/2.2-alpha/Vector3)

The rotation

###rotationQuaternion : [Quaternion](/classes/2.2-alpha/Quaternion)



###scaling : [Vector3](/classes/2.2-alpha/Vector3)

The scaling

##Methods

###static FromMesh(mesh) &rarr; [CSG](/classes/2.2-alpha/CSG)

Convert [Mesh](/classes/2.2-alpha/Mesh) to [CSG](/classes/2.2-alpha/CSG)

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###clone() &rarr; [CSG](/classes/2.2-alpha/CSG)

Clone this [CSG](/classes/2.2-alpha/CSG)
###union(csg) &rarr; [CSG](/classes/2.2-alpha/CSG)

Union the [CSG](/classes/2.2-alpha/CSG)

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###unionInPlace(csg) &rarr; void

Union in place

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###subtract(csg) &rarr; [CSG](/classes/2.2-alpha/CSG)

Subtract the [CSG](/classes/2.2-alpha/CSG)

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###subtractInPlace(csg) &rarr; void

Subtract in place

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###intersect(csg) &rarr; [CSG](/classes/2.2-alpha/CSG)

Intersect first solid with the second

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###intersectInPlace(csg) &rarr; void

Intersect in place

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###inverse() &rarr; [CSG](/classes/2.2-alpha/CSG)

Return a new [CSG](/classes/2.2-alpha/CSG) solid with solid and empty space swtiched. This solid is not modified.
###inverseInPlace() &rarr; void

Inverse in place
###copyTransformAttributes(csg) &rarr; [CSG](/classes/2.2-alpha/CSG)

This is used to keep meshes transformations so they can be restored
when we build back a [Mesh](/classes/2.2-alpha/Mesh)
NB : All [CSG](/classes/2.2-alpha/CSG) operations are performed in world coordinates

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.2-alpha/CSG) | 

###buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Build raw mesh from [CSG](/classes/2.2-alpha/CSG)
Coordinates here are in world space

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | keepSubMeshes | boolean | 

###toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | material | [Material](/classes/2.2-alpha/Material) | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | keepSubMeshes | boolean | 

