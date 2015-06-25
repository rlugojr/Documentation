---
Tags: 
    - Geometry
    - Mesh
    - Action
    - Specularité
---
The [Geometry](page.php?p=25259) class
##new [Geometry](page.php?p=25259)(id, scene, vertexData, updatable, mesh)




The [Geometry](page.php?p=25259) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=25150) | @param scene
optional | vertexData | [VertexData](page.php?p=25261) | @param vertexData
optional | updatable | boolean | @param updatable
optional | mesh | [Mesh](page.php?p=25147) | @param mesh
---

##Members

###id : string








###delayLoadState : number








###delayLoadingFile : string

















###onGeometryUpdated : (geometry: [Geometry](page.php?p=25259), kind?: string) => void




##Methods

###getScene() → [Scene](page.php?p=25150)
Get the scene








###getEngine() → [Engine](page.php?p=25117)
Get the engine








###isReady() → boolean
True if is ready, false if is not








###setAllVerticesData(vertexData, updatable) → void
Set all vertices data







####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](page.php?p=25261) | send all elements of vertices
optional | updatable | boolean | @param updatable
---

###setVerticesData(kind, data, updatable, stride) → void
Set vertices data







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | Use one element of vertice
 | data | number[] | @param data
optional | updatable | boolean | @param updatable
optional | stride | number | 
---

###updateVerticesDataDirectly(kind, data, offset) → void
Update vertices data directly







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
 | data | Float32Array | @param data
 | offset | number | 
---

###updateVerticesData(kind, data, updateExtends) → void
Update vertices data







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
 | data | number[] | @param data
optional | updateExtends | boolean | @param updateExtends
---

###getTotalVertices() → number
Get total vertices








###getVerticesData(kind, copyWhenShared) → number[]
Get total vertices data







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
optional | copyWhenShared | boolean | 
---

###getVertexBuffer(kind) → [VertexBuffer](page.php?p=25272)
Get vertex buffer for this kind







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | Use only one parameters
---

###getVertexBuffers() → [VertexBuffer](page.php?p=25272)[]
Get vertex buffers, use all element of vertex buffer








###isVerticesDataPresent(kind) → boolean
Return true if vertices data are present







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###getVerticesDataKinds() → string[]
Get the kinds of vertices data








###setIndices(indices, totalVertices) → void
Set indices







####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | @param indices
optional | totalVertices | number | 
---

###getTotalIndices() → number
Get all indices








###getIndices(copyWhenShared) → number[]
Get the last indices







####Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean | 
---

###getIndexBuffer() → any
Get index buffer








###releaseForMesh(mesh, shouldDispose) → void
Release for mesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=25147) | your mesh
optional | shouldDispose | boolean | true if mesh is dispose, false if is not.
---

###applyToMesh(mesh) → void
Apply to a mesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=25147) | the mesh
---

###load(scene, onLoaded) → void
Load function







####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=25150) | the platform
optional | onLoaded | () => void | @param onLoaded
---

###isDisposed() → boolean


###dispose() → void
Dispose this geometry object








###copy(id) → [Geometry](page.php?p=25259)
Copy function







####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | this geometry object
---

###static ExtractFromMesh(mesh, id) → [Geometry](page.php?p=25259)
Extract From [Mesh](page.php?p=25147)







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=25147) | the mesh
 | id | string | Given this id to the new geometry object
---

###static RandomId() → string
