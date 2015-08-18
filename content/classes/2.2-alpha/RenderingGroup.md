---
ID_PAGE: 25303
PG_TITLE: RenderingGroup
PG_VERSION: 2.1
---
##Description

class [RenderingGroup](/classes/2.2-alpha/RenderingGroup)



##Constructor

##new [RenderingGroup](/classes/2.2-alpha/RenderingGroup)(index, scene)

Creates a new rendering group

####Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###index : number



##Methods

###render(customRenderFunction) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;) =&gt; void | 

###prepare() &rarr; void


###dispatch(subMesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.2-alpha/SubMesh) | 

