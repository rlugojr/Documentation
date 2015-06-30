---
ID_PAGE: 6727
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
---
##new [MultiMaterial](page.php?p=6727)(name, scene)



Create a new [MultiMaterial](page.php?p=6727).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the multimaterial
 | scene | [Scene](page.php?p=6662) | [Scene](page.php?p=6662) which contain the [MultiMaterial](page.php?p=6727)
---

##Extends [Material](page.php?p=6726)
##Members

###subMaterials : [Material](page.php?p=6726)[]




Array of sub materials











##Methods

###getSubMaterial(index) &rarr; [Material](page.php?p=6726)
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
optional | mesh | [AbstractMesh](page.php?p=6657) | The mesh with the multi material
---

###clone(name) &rarr; [MultiMaterial](page.php?p=6727)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
---
