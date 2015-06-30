---
ID_PAGE: 5723
PG_TITLE: GroundMesh
PG_VERSION: 2.0
---

The [GroundMesh](page.php?p=5723) Class extends [Mesh](page.php?p=5722)
##new [GroundMesh](page.php?p=5723)(name, scene)


The [GroundMesh](page.php?p=5723) constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=5725) | @param scene
---

##Extends [Mesh](page.php?p=5722)
##Members

###generateOctree : boolean



true if this is generated, false if is not


###subdivisions : number



The subdivision of the [GroundMesh](page.php?p=5723)







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
