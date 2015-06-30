---
ID_PAGE: 5862
PG_TITLE: RenderingGroup
PG_VERSION: 2.0
---
##new [RenderingGroup](page.php?p=5862)(index, scene)


Creates a new rendering group


####Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | @param index
 | scene | [Scene](page.php?p=5725) | @param scene
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
 | subMesh | [SubMesh](page.php?p=5834) | @param subMesh
---
