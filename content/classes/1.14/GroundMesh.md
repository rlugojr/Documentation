---
ID_PAGE: 3272
PG_TITLE: GroundMesh
PG_VERSION: 1.14
---

The [GroundMesh](page.php?p=3272) Class extends [Mesh](page.php?p=3271)
##new [GroundMesh](page.php?p=3272)(name, scene)

The [GroundMesh](page.php?p=3272) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=3274) | @param scene
---

##Extends [Mesh](page.php?p=3271)
##Members

###generateOctree : boolean


true if this is generated, false if is not

###subdivisions : number


The subdivision of the [GroundMesh](page.php?p=3272)



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
