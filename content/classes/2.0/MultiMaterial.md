---
ID_PAGE: 5784
PG_TITLE: MultiMaterial
PG_VERSION: 2.0
---
##new [MultiMaterial](page.php?p=5784)(name, scene)


Create a new [MultiMaterial](page.php?p=5784).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the multimaterial
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) which contain the [MultiMaterial](page.php?p=5784)
---

##Extends [Material](page.php?p=5783)
##Members

###subMaterials : [Material](page.php?p=5783)[]



Array of sub materials







##Methods

###getSubMaterial(index) &rarr; [Material](page.php?p=5783)
Get a sub material



####Parameters
 | Name | Type | Description
---|---|---|---
 | index | any | Index of the submaterial
---

###isReady(mesh) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](page.php?p=5720) | The mesh with the multi material
---
