---
ID_PAGE: 25272
PG_TITLE: VertexBuffer
PG_VERSION: 2.1
---
##Description

class [VertexBuffer](/classes/2.2-alpha/VertexBuffer)



##Constructor

##new [VertexBuffer](/classes/2.2-alpha/VertexBuffer)(engine, data, kind, updatable, postponeInternalCreation, stride)

[VertexBuffer](/classes/2.2-alpha/VertexBuffer) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any | 
 | data | number[] | 
 | kind | string | 
 | updatable | boolean | 
optional | postponeInternalCreation | boolean | 
optional | stride | number | 

##Members

###static PositionKind : string

The position kind

###static NormalKind : string

The normal kind

###static UVKind : string

The UV kind

###static UV2Kind : string

The UV2 kind

###static UV3Kind : string



###static UV4Kind : string



###static UV5Kind : string



###static UV6Kind : string



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
optional | data | number[] | 

###update(data) &rarr; void

Update vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] | 

###updateDirectly(data, offset) &rarr; void

Update vertex buffer directly

####Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | 
 | offset | number | 

###dispose() &rarr; void


