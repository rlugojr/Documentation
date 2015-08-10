---
ID_PAGE: 24479
PG_TITLE: Mesh
PG_VERSION: 1.14
---

The [Mesh](/classes/Mesh) class extends [AbstractMesh](/classes/AbstractMesh)
##new [Mesh](/classes/Mesh)(name, scene)

The [Mesh](/classes/Mesh) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](/classes/Scene) | The scene where the mesh is
---

##Extends [AbstractMesh](/classes/AbstractMesh)
##Members

###delayLoadState : number


Delay load mesh state

###instances : [InstancedMesh](/classes/InstancedMesh)[]


Instances [Mesh](/classes/Mesh)

###delayLoadingFile : string


Delay load mesh file



##Methods

###getTotalVertices() &rarr; number
Returns the total number of vertices in this mesh


###getVerticesData(kind) &rarr; number[]
Returns the data of a specific vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | The kind of vertex buffer
---

###getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/VertexBuffer)
Get the vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | any | The kind of vertex buffer (Defined in class [VertexBuffer](/classes/VertexBuffer))
---

###isVerticesDataPresent(kind) &rarr; boolean
Returns true if the kind vertex buffer given in parameter exists for this mesh, false otherwise

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | The kind of vertex buffer
---

###getVerticesDataKinds() &rarr; string[]
Get vertices data kinds


###getTotalIndices() &rarr; number
Get the total indices


###getIndices() &rarr; number[]
Returns the indices of this mesh


###isReady() &rarr; boolean
Returns true if this mesh is ready to be rendered, false otherwise.


###isDisposed() &rarr; boolean
Returns true if this mesh is disposed, false otherwise.


###refreshBoundingInfo() &rarr; void
Refresh this mesh bounding infos


###subdivide(count) &rarr; void
Subdivide this mesh by creating &quot;count&quot; submeshes stored in this.subMeshes

####Parameters
 | Name | Type | Description
---|---|---|---
 | count | number | The number of subdivision
---

###setVerticesData(kind, data, updatable) &rarr; void
Set the vertex buffer data of this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | any | The kind of vertex buffer
 | data | any | The new data of vertex buffer
optional | updatable | boolean | @param updatable
---

###updateVerticesData(kind, data, updateExtends, makeItUnique) &rarr; void
Update a specific kind of vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | The kind of vertex buffer as defined in class Vertex Buffer
 | data | number[] | The new data of vertex buffer
optional | updateExtends | boolean | @param updateExtends
optional | makeItUnique | boolean | @param makeItUnique
---

###updateVerticesDataDirectly(kind, data, makeItUnique) &rarr; void
Update a specific kind of vertex buffer directly

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | The kind of vertex buffer as defined in class Vertex Buffer
 | data | Float32Array | The new data of vertex buffer
optional | makeItUnique | boolean | @param makeItUnique
---

###makeGeometryUnique() &rarr; void
Make geometry unique


###setIndices(indices) &rarr; void
Set the indices of this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | @param indices
---

###registerBeforeRender(func) &rarr; void
Set the callback function to call before starting a frame rendering

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | Callback function
---

###unregisterBeforeRender(func) &rarr; void
Unregister the callback function which the name is given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | Callback function to delete
---

###registerAfterRender(func) &rarr; void
Set the callback function to call after starting a frame rendering

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | Callback function
---

###unregisterAfterRender(func) &rarr; void
Unregister the callback function which the name is given in parameter.

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | Callback function to delete
---

###render(subMesh) &rarr; void
Render the mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/SubMesh) | The subMesh
---

###getEmittedParticleSystems() &rarr; [ParticleSystem](/classes/ParticleSystem)[]
Returns the list of particle system in which this mesh is the emitter.


###getHierarchyEmittedParticleSystems() &rarr; [ParticleSystem](/classes/ParticleSystem)[]
Returns a list of particle system. For all results, at least one descendant of this mesh is the emitter of it.


###getChildren() &rarr; [Node](/classes/Node)[]
Returns the list of children of this mesh.


###isInFrustum(frustumPlanes) &rarr; boolean
Returns true if this mesh is in the frustrum defined by the 6 planes given in parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/Plane)[] | [Frustum](/classes/Frustum) plan of the mesh
---

###setMaterialByID(id) &rarr; void
Set this mesh material within all material present in the scene.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The ID of the material this mesh should get
---

###getAnimatables() &rarr; IAnimatable[]
Returns an array containing the mesh material if it exists.


###bakeTransformIntoVertices(transform) &rarr; void
Apply the given transformation to this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/Matrix) | The transform matrix
---

###clone(name, newParent, doNotCloneChildren) &rarr; [Mesh](/classes/Mesh)
Clone a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the mesh
 | newParent | [Node](/classes/Node) | His parent
optional | doNotCloneChildren | boolean | True if you want to clone children, false if you don't want to.
---

###dispose(doNotRecurse) &rarr; void
Dispose a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---

###applyDisplacementMap(url, minHeight, maxHeight) &rarr; void
Apply displacement map

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | The url
 | minHeight | number | The minimum height
 | maxHeight | number | The maximum height
---

###applyDisplacementMapFromBuffer(buffer, heightMapWidth, heightMapHeight, minHeight, maxHeight) &rarr; void
Apply displacement map from the buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | Uint8Array | The buffer
 | heightMapWidth | number | The height map width
 | heightMapHeight | number | The height map height
 | minHeight | number | The minimum height
 | maxHeight | number | The maximum height
---

###convertToFlatShadedMesh() &rarr; void
Updates normals and vertices to get a flat shading rendering.
Warning: This may imply adding vertices to the mesh in order to get exactly 3 vertices per face.


###createInstance(name) &rarr; [InstancedMesh](/classes/InstancedMesh)
Create a new instance of [InstanceMesh](/classes/InstanceMesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The instance mesh name
---

###synchronizeInstances() &rarr; void
Synchronize the instances


###static CreateBox(name, size, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a box with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the box
 | size | number | The size of the box
 | scene | [Scene](/classes/Scene) | The [Scene](/classes/Scene) contains the new [Box](/classes/Box)
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateSphere(name, segments, diameter, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a [Sphere](/classes/Sphere) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the sphere
 | segments | number | The segments of the sphere
 | diameter | number | The diameter of the sphere
 | scene | [Scene](/classes/Scene) | The scene contains the new sphere
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateCylinder(name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a cylinder with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the cylinder
 | height | number | The Height of the cylinder
 | diameterTop | number | Diameter at top of the cylinder
 | diameterBottom | number | Diameter at bottom of the cylinder
 | tessellation | number | Number of vertex to create each cercle
 | subdivisions | any | Subdivision of the cylinder
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | any | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateTorus(name, diameter, thickness, tessellation, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a [Torus](/classes/Torus) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the [Torus](/classes/Torus)
 | diameter | number | The diameter of the [Torus](/classes/Torus)
 | thickness | number | The thickness of the [Torus](/classes/Torus)
 | tessellation | number | The tessellation of the [Torus](/classes/Torus)
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a TorusKnut with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the TorusKnut
 | radius | number | The radius of the TorusKnut
 | tube | number | @param tube
 | radialSegments | number | @param radialSegments
 | tubularSegments | number | @param tubularSegments
 | p | number | Describes up-and-down (P) winding numbers
 | q | number | Describes around-the-center (Q) winding numbers
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateLines(name, points, scene, updatable) &rarr; [LinesMesh](/classes/LinesMesh)
Create a Line with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the Line
 | points | [Vector3](/classes/Vector3)[] | The points of the Line
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreatePlane(name, size, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a [Plane](/classes/Plane) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the [Plane](/classes/Plane)
 | size | number | The size of the plane
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateGround(name, width, height, subdivisions, scene, updatable) &rarr; [Mesh](/classes/Mesh)
Create a [Ground](/classes/Ground) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the [Ground](/classes/Ground)
 | width | number | The width of the [Ground](/classes/Ground)
 | height | number | The height of the [Ground](/classes/Ground)
 | subdivisions | number | The subdivision of the [Ground](/classes/Ground)
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateTiledGround(name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) &rarr; [Mesh](/classes/Mesh); 
Create a [TiledGround](/classes/TiledGround) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the [TiledGround](/classes/TiledGround)
 | xmin | number | The xmin of the [Ground](/classes/Ground)
 | zmin | number | The zmin of the [Ground](/classes/Ground)
 | xmax | number | The xmax of the [Ground](/classes/Ground)
 | zmax | number | The zmax of the [Ground](/classes/Ground)
 | subdivisions | {w: number; h: number; } | The number of tiles (subdivisions.w : in width; subdivisions.h : in height)
 | precision | { w: number; h: number; } | The number of subdivisions in each tile (precision.w : in width; precision.h : in height)
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static CreateGroundFromHeightMap(name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable) &rarr; [GroundMesh](/classes/GroundMesh)
Create a GroundFromHeightMap

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the GroundFromHeightMap
 | url | string | URL of the GroundFromHeightMap
 | width | number | The width of the GroundFromHeightMap
 | height | number | The height of the GroundFromHeightMap
 | subdivisions | number | The number of subdivisions in the GroundFromHeightMap
 | minHeight | number |  minHeight of the new GFHM
 | maxHeight | number | The maximum height of the Height map
 | scene | [Scene](/classes/Scene) | The scene contains the mesh
optional | updatable | boolean | True if the vertices buffers'll be updated afterwards, false otherwise
---

###static MinMax(meshes) &rarr; {min: [Vector3](/classes/Vector3); max: [Vector3](/classes/Vector3); }; 

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | [AbstractMesh](/classes/AbstractMesh)[] | @param meshes
---

###static Center(meshesOrMinMaxVector) &rarr; [Vector3](/classes/Vector3)

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVector | any | @param meshesOrMinMaxVector
---
