---
ID_PAGE: 24480
PG_TITLE: GroundMesh
PG_VERSION: 1.14
---

The [GroundMesh](/classes/GroundMesh) Class extends [Mesh](/classes/Mesh)
##new [GroundMesh](/classes/GroundMesh)(name, scene)

The [GroundMesh](/classes/GroundMesh) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](/classes/Scene) | @param scene
---

##Extends [Mesh](/classes/Mesh)
##Members

###generateOctree : boolean


true if this is generated, false if is not

###subdivisions : number


The subdivision of the [GroundMesh](/classes/GroundMesh)



##Methods

###optimize(chunksCount) &rarr; void
Optimize function

####Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number | @param chunksCount
---

###getHeightAtCoordinates(x, z) &rarr; number
Get height at the coordinates with given x and given z

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | z | number | @param z
---
