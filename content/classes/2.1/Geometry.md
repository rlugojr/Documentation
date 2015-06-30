---
ID_PAGE: 6771
PG_TITLE: Geometry
PG_VERSION: 2.1
---

The [Geometry](page.php?p=6771) class
##new [Geometry](page.php?p=6771)(id, scene, vertexData, updatable, mesh)



The [Geometry](page.php?p=6771) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=6662) | @param scene
optional | vertexData | [VertexData](page.php?p=6773) | @param vertexData
optional | updatable | boolean | @param updatable
optional | mesh | [Mesh](page.php?p=6659) | @param mesh
---

##Members

###id : string






###delayLoadState : number






###delayLoadingFile : string












###onGeometryUpdated : (geometry: [Geometry](page.php?p=6771), kind?: string) =&gt; void




##Methods

###getScene() &rarr; [Scene](page.php?p=6662)
Get the scene






###getEngine() &rarr; [Engine](page.php?p=6629)
Get the engine






###isReady() &rarr; boolean
True if is ready, false if is not






###setAllVerticesData(vertexData, updatable) &rarr; void
Set all vertices data





####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](page.php?p=6773) | send all elements of vertices
optional | updatable | boolean | @param updatable
---

###setVerticesData(kind, data, updatable, stride) &rarr; void
Set vertices data





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | Use one element of vertice
 | data | number[] | @param data
optional | updatable | boolean | @param updatable
optional | stride | number | 
---

###updateVerticesDataDirectly(kind, data, offset) &rarr; void
Update vertices data directly





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
 | data | Float32Array | @param data
 | offset | number | 
---

###updateVerticesData(kind, data, updateExtends) &rarr; void
Update vertices data





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
 | data | number[] | @param data
optional | updateExtends | boolean | @param updateExtends
---

###getTotalVertices() &rarr; number
Get total vertices






###getVerticesData(kind, copyWhenShared) &rarr; number[]
Get total vertices data





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
optional | copyWhenShared | boolean | 
---

###getVertexBuffer(kind) &rarr; [VertexBuffer](page.php?p=6784)
Get vertex buffer for this kind





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | Use only one parameters
---

###getVertexBuffers() &rarr; [VertexBuffer](page.php?p=6784)[]
Get vertex buffers, use all element of vertex buffer






###isVerticesDataPresent(kind) &rarr; boolean
Return true if vertices data are present





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###getVerticesDataKinds() &rarr; string[]
Get the kinds of vertices data






###setIndices(indices, totalVertices) &rarr; void
Set indices





####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | @param indices
optional | totalVertices | number | 
---

###getTotalIndices() &rarr; number
Get all indices






###getIndices(copyWhenShared) &rarr; number[]
Get the last indices





####Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean | 
---

###getIndexBuffer() &rarr; any
Get index buffer






###releaseForMesh(mesh, shouldDispose) &rarr; void
Release for mesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=6659) | your mesh
optional | shouldDispose | boolean | true if mesh is dispose, false if is not.
---

###applyToMesh(mesh) &rarr; void
Apply to a mesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=6659) | the mesh
---

###load(scene, onLoaded) &rarr; void
Load function





####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=6662) | the platform
optional | onLoaded | () =&gt; void | @param onLoaded
---

###isDisposed() &rarr; boolean


###dispose() &rarr; void
Dispose this geometry object






###copy(id) &rarr; [Geometry](page.php?p=6771)
Copy function





####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | this geometry object
---

###static ExtractFromMesh(mesh, id) &rarr; [Geometry](page.php?p=6771)
Extract From [Mesh](page.php?p=6659)





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=6659) | the mesh
 | id | string | Given this id to the new geometry object
---

###static RandomId() &rarr; string

