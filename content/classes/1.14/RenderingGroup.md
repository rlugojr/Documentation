---
ID_PAGE: 24572
PG_TITLE: RenderingGroup
PG_VERSION: 1.14
---
##new [RenderingGroup](/classes/RenderingGroup)(index, scene)

Creates a new rendering group
####Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | @param index
 | scene | [Scene](/classes/Scene) | @param scene
---

##Members

###index : number




##Methods

###render(customRenderFunction, =&gt;, beforeTransparents) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: SmartArray&lt;SubMesh&gt;, transparentSubMeshes: SmartArray&lt;SubMesh&gt;, alphaTestSubMeshes: SmartArray&lt;SubMesh&gt;, beforeTransparents: () =&gt; void) | 
 | =&gt; | void | 
 | beforeTransparents | any | 
---

###prepare() &rarr; void


###dispatch(subMesh) &rarr; void
Dispatches this rendering group

####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/SubMesh) | @param subMesh
---
