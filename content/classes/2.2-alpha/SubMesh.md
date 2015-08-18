---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---
##Description

class [SubMesh](/classes/2.2-alpha/SubMesh)



##Constructor

##new [SubMesh](/classes/2.2-alpha/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)

[SubMesh](/classes/2.2-alpha/SubMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | 
 | verticesStart | number | 
 | verticesCount | number | 
 | indexStart | any | 
 | indexCount | number | 
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
optional | renderingMesh | [Mesh](/classes/2.2-alpha/Mesh) | 
optional | createBoundingBox | boolean | 

##Members

###materialIndex : number

The material Index

###verticesStart : number

The vertice sStart

###verticesCount : number

The vertices Count

###indexStart : any

The index Start

###indexCount : number

The index Count

###linesIndexCount : number

The lines Index Count

##Methods

###getBoundingInfo() &rarr; [BoundingInfo](/classes/2.2-alpha/BoundingInfo)

Get bounding info
###getMesh() &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Get mesh
###getRenderingMesh() &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Get rendering mesh
###getMaterial() &rarr; [Material](/classes/2.2-alpha/Material)

Get material
###refreshBoundingInfo() &rarr; void

Refresh bounding info
###updateBoundingInfo(world) &rarr; void

Update bounding info

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 

###isInFrustum(frustumPlanes) &rarr; boolean

Return true if it is frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###render(enableAlphaMode) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | enableAlphaMode | boolean | 

###getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer

Get lines index buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | 
 | engine | any | 

###canIntersects(ray) &rarr; boolean

Can Intersects

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 

###intersects(ray, positions, indices, fastCheck) &rarr; [IntersectionInfo](/classes/2.2-alpha/IntersectionInfo)

Intersects

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 
 | positions | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | indices | number[] | 
optional | fastCheck | boolean | 

###clone(newMesh, newRenderingMesh) &rarr; [SubMesh](/classes/2.2-alpha/SubMesh)

Create a clone of the subMesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
optional | newRenderingMesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###dispose() &rarr; void

Dispose
###static CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](/classes/2.2-alpha/SubMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | 
 | startIndex | number | 
 | indexCount | number | 
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
optional | renderingMesh | [Mesh](/classes/2.2-alpha/Mesh) | 

