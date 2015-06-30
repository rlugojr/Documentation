---
ID_PAGE: 6660
PG_TITLE: GroundMesh
PG_VERSION: 2.1
---

The [GroundMesh](page.php?p=6660) Class extends [Mesh](page.php?p=6659)
##new [GroundMesh](page.php?p=6660)(name, scene)



The [GroundMesh](page.php?p=6660) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=6662) | @param scene
---

##Extends [Mesh](page.php?p=6659)
##Members

###generateOctree : boolean




true if this is generated, false if is not



###subdivisions : number




The subdivision of the [GroundMesh](page.php?p=6660)











##Methods

###optimize(chunksCount) &rarr; void
Optimize function





####Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number | @param chunksCount
---

###getHeightAtCoordinates(x, z) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | z | number | @param z
---
