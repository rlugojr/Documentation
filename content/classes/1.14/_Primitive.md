---
ID_PAGE: 3395
PG_TITLE: _Primitive
PG_VERSION: 1.14
---

The _Primitives class
##new [_Primitive](page.php?p=3395)(id, scene, vertexData, canBeRegenerated, mesh)

The _Primitives constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=3274) | @param scene
optional | vertexData | [VertexData](page.php?p=3338) | @param vertexData
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=3271) | @param mesh
---

##Extends [Geometry](page.php?p=3336)


##Methods

###canBeRegenerated() &rarr; boolean
True if with can be updated, false if is not


###regenerate() &rarr; void
Regenerate the primitive


###asNewGeometry(id) &rarr; [Geometry](page.php?p=3336)
Copy object and assign a new id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
---

###setAllVerticesData(vertexData, updatable) &rarr; void
Set all vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](page.php?p=3338) | @param vertexData
optional | updatable | boolean | true if you want to be able to update vertices, false to be sure not to update vertices
---

###setVerticesData(kind, data, updatable) &rarr; void
Set kind of vertices, its data,

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | the kind of vertex data
 | data | number[] | @param data
optional | updatable | boolean | true if you want to be able to update vertices, false to be sure not to update vertices
---

###copy(id) &rarr; [Geometry](page.php?p=3336)
Throw error

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
