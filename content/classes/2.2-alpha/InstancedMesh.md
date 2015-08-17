---
ID_PAGE: 25146
PG_TITLE: InstancedMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [InstancedMesh](/classes/2.2-alpha/InstancedMesh) extends [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Creates an instance based on a source mesh.

##Constructor

##new [InstancedMesh](/classes/2.2-alpha/InstancedMesh)(name, source)

The [InstancedMesh](/classes/2.2-alpha/InstancedMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | source | [Mesh](/classes/2.2-alpha/Mesh) | 

##Members

###receiveShadows : boolean

True if the Instanced [Mesh](/classes/2.2-alpha/Mesh) got shadows, false if is not

###material : [Material](/classes/2.2-alpha/Material)

The material

###visibility : number

The visibility of the Instanced [Mesh](/classes/2.2-alpha/Mesh)

###skeleton : [Skeleton](/classes/2.2-alpha/Skeleton)

The skeleton

###sourceMesh : [Mesh](/classes/2.2-alpha/Mesh)

The sourceMesh

##Methods

###getTotalVertices() &rarr; number

Get the total vertices of the Instanced [Mesh](/classes/2.2-alpha/Mesh)
###getVerticesData(kind) &rarr; number[]

Get the vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###isVerticesDataPresent(kind) &rarr; boolean

Is Vertices data present

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###getIndices() &rarr; number[]

Get Indices
###refreshBoundingInfo() &rarr; void

Refresh Bounding Info of the Instanced [Mesh](/classes/2.2-alpha/Mesh)
###getLOD(camera) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2-alpha/Camera) | 

###clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](/classes/2.2-alpha/InstancedMesh)

Clone this instanced [Mesh](/classes/2.2-alpha/Mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | newParent | [Node](/classes/2.2-alpha/Node) | 
optional | doNotCloneChildren | boolean | 

###dispose(doNotRecurse) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

