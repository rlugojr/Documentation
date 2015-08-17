---
ID_PAGE: 25148
PG_TITLE: GroundMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [GroundMesh](/classes/2.2-alpha/GroundMesh) extends [Mesh](/classes/2.2-alpha/Mesh)



##Constructor

##new [GroundMesh](/classes/2.2-alpha/GroundMesh)(name, scene)

The [GroundMesh](/classes/2.2-alpha/GroundMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###generateOctree : boolean

true if this is generated, false if is not

###subdivisions : number

The subdivision of the [GroundMesh](/classes/2.2-alpha/GroundMesh)

##Methods

###optimize(chunksCount, octreeBlocksSize) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number | 
optional | octreeBlocksSize | number | 

###getHeightAtCoordinates(x, z) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | z | number | 

