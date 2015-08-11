---
ID_PAGE: 25031
PG_TITLE: RenderingGroup
PG_VERSION: 2.0
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

###render(customRenderFunction) &rarr; boolean





####Parameters
 | Name | Type | Description
---|---|---|---
 | customRenderFunction | (opaqueSubMeshes: SmartArray&lt;SubMesh&gt;, transparentSubMeshes: SmartArray&lt;SubMesh&gt;, alphaTestSubMeshes: SmartArray&lt;SubMesh&gt;) =&gt; void | 
---

###prepare() &rarr; void






###dispatch(subMesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/SubMesh) | @param subMesh
---
