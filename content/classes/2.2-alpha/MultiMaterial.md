---
ID_PAGE: 25215
PG_TITLE: MultiMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
##Description

class [MultiMaterial](/classes/2.2-alpha/MultiMaterial) extends [Material](/classes/2.2-alpha/Material)



##Constructor

##new [MultiMaterial](/classes/2.2-alpha/MultiMaterial)(name, scene)

Create a new [MultiMaterial](/classes/2.2-alpha/MultiMaterial).
A tutorial about multi materials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/10/babylon-js-using-multi-materials.aspx

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###subMaterials : [Material](/classes/2.2-alpha/Material)[]

Array of sub materials

##Methods

###getSubMaterial(index) &rarr; [Material](/classes/2.2-alpha/Material)

Get a sub material

####Parameters
 | Name | Type | Description
---|---|---|---
 | index | any | 

###isReady(mesh) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###clone(name) &rarr; [MultiMaterial](/classes/2.2-alpha/MultiMaterial)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

