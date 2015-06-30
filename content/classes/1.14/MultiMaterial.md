---
ID_PAGE: 3313
PG_TITLE: MultiMaterial
PG_VERSION: 1.14
---
##new [MultiMaterial](page.php?p=3313)(name, scene)

Create a new [MultiMaterial](page.php?p=3313).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the multimaterial
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the [MultiMaterial](page.php?p=3313)
---

##Extends [Material](page.php?p=3312)
##Members

###subMaterials : [Material](page.php?p=3312)[]


Array of sub materials



##Methods

###getSubMaterial(index) &rarr; [Material](page.php?p=3312)
Get a sub material

####Parameters
 | Name | Type | Description
---|---|---|---
 | index | any | Index of the submaterial
---

###isReady(mesh) &rarr; boolean
Function to know if multi material is ready

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](page.php?p=3269) | The mesh with the multi material
---
