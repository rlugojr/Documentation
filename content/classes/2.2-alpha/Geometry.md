---
ID_PAGE: 25259
PG_TITLE: Geometry
PG_VERSION: 2.1
TAGS:
    - Geometry
---
##Description

class [Geometry](/classes/2.2-alpha/Geometry)



##Constructor

##new [Geometry](/classes/2.2-alpha/Geometry)(id, scene, vertexData, updatable, mesh)

The [Geometry](/classes/2.2-alpha/Geometry) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | vertexData | [VertexData](/classes/2.2-alpha/VertexData) | 
optional | updatable | boolean | 
optional | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

##Members

###id : string



###delayLoadState : number



###delayLoadingFile : string



###onGeometryUpdated : (geometry: [Geometry](/classes/2.2-alpha/Geometry), kind: string) =&gt; void



##Methods

###getScene() &rarr; [Scene](/classes/2.2-alpha/Scene)

Get the scene
###getEngine() &rarr; [Engine](/classes/2.2-alpha/Engine)

Get the engine
###isReady() &rarr; boolean

True if is ready, false if is not
###setAllVerticesData(vertexData, updatable) &rarr; void

Set all vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](/classes/2.2-alpha/VertexData) | 
optional | updatable | boolean | 

###setVerticesData(kind, data, updatable, stride) &rarr; void

Set vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] | 
optional | updatable | boolean | 
optional | stride | number | 

###updateVerticesDataDirectly(kind, data, offset) &rarr; void

Update vertices data directly

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | Float32Array | 
 | offset | number | 

###updateVerticesData(kind, data, updateExtends) &rarr; void

Update vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] | 
optional | updateExtends | boolean | 

###getTotalVertices() &rarr; number

Get total vertices
###getVerticesData(kind, copyWhenShared) &rarr; number[]

Get total vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
optional | copyWhenShared | boolean | 

###getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/2.2-alpha/VertexBuffer)

Get vertex buffer for this kind

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###getVertexBuffers() &rarr; [VertexBuffer](/classes/2.2-alpha/VertexBuffer)[]

Get vertex buffers, use all element of vertex buffer
###isVerticesDataPresent(kind) &rarr; boolean

Return true if vertices data are present

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###getVerticesDataKinds() &rarr; string[]

Get the kinds of vertices data
###setIndices(indices, totalVertices) &rarr; void

Set indices

####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | 
optional | totalVertices | number | 

###getTotalIndices() &rarr; number

Get all indices
###getIndices(copyWhenShared) &rarr; number[]

Get the last indices

####Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean | 

###getIndexBuffer() &rarr; any

Get index buffer
###releaseForMesh(mesh, shouldDispose) &rarr; void

Release for mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 
optional | shouldDispose | boolean | 

###applyToMesh(mesh) &rarr; void

Apply to a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###load(scene, onLoaded) &rarr; void

Load function

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | onLoaded | () =&gt; void | 

###isDisposed() &rarr; boolean


###dispose() &rarr; void

Dispose this geometry object
###copy(id) &rarr; [Geometry](/classes/2.2-alpha/Geometry)

Copy function

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###static ExtractFromMesh(mesh, id) &rarr; [Geometry](/classes/2.2-alpha/Geometry)

Extract From [Mesh](/classes/2.2-alpha/Mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 
 | id | string | 

###static RandomId() &rarr; string


