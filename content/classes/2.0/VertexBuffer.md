---
ID_PAGE: 5835
PG_TITLE: VertexBuffer
PG_VERSION: 2.0
---

Creates a new vertexBuffer. Methods of [VertexBuffer](page.php?p=5835) interface are used to manipulate vertex buffer resources
##new [VertexBuffer](page.php?p=5835)(engine, data, kind, updatable, postponeInternalCreation, stride)




####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any | @param engine
 | data | number[] | The data of this vertex buffer
 | kind | string | The kind of vertex buffer (defined as static variables in [VertexBuffer](page.php?p=5835) class)
 | updatable | boolean | True if the vertex buffer should be dynamic, false otherwise.
optional | postponeInternalCreation | boolean | @param postponeInternalCreation
optional | stride | number | 
---

##Members

###static PositionKind : string



The position kind


###static NormalKind : string



The normal kind


###static UVKind : string



The UV kind


###static UV2Kind : string



The UV2 kind


###static ColorKind : string



The color kind


###static MatricesIndicesKind : string



The matrice indice kind


###static MatricesWeightsKind : string



The matrice weight kind







##Methods

###isUpdatable() &rarr; boolean
Return true if it's updatable




###getData() &rarr; number[]
Get the data




###getBuffer() &rarr; WebGLBuffer
Get the buffer




###getStrideSize() &rarr; number
Get stride size




###create(data) &rarr; void
Create a vertex buffer



####Parameters
 | Name | Type | Description
---|---|---|---
optional | data | number[] | @param data
---

###update(data) &rarr; void
Update vertex buffer



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] | [VertexData](page.php?p=5825) into buffer
---

###updateDirectly(data, offset) &rarr; void
Update vertex buffer directly



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | [VertexData](page.php?p=5825) into buffer
 | offset | number | 
---

###dispose() &rarr; void
