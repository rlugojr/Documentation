---
ID_PAGE: 25147
PG_TITLE: Mesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [Mesh](/classes/2.2-alpha/Mesh) extends [AbstractMesh](/classes/2.2-alpha/AbstractMesh)



##Constructor

##new [Mesh](/classes/2.2-alpha/Mesh)(name, scene, parent, source, doNotCloneChildren)

@constructor

                 When false, achieved by calling a clone(), also passing False.

                 This will make creation of children, recursive.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | parent | [Node](/classes/2.2-alpha/Node) | 
optional | source | [Mesh](/classes/2.2-alpha/Mesh) | 
optional | doNotCloneChildren | boolean | 

##Members

###static FRONTSIDE : number



###static BACKSIDE : number



###static DOUBLESIDE : number



###static DEFAULTSIDE : number



###static NO_CAP : number



###static CAP_START : number



###static CAP_END : number



###static CAP_ALL : number



###delayLoadState : number

Delay load mesh state

###instances : [InstancedMesh](/classes/2.2-alpha/InstancedMesh)[]

Instances [Mesh](/classes/2.2-alpha/Mesh)

###delayLoadingFile : string

Delay load mesh file

###onLODLevelSelection : (distance: number, mesh: [Mesh](/classes/2.2-alpha/Mesh), selectedLevel: [Mesh](/classes/2.2-alpha/Mesh)) =&gt; void



###hasLODLevels : boolean



###geometry : [Geometry](/classes/2.2-alpha/Geometry)



###isBlocked : boolean



###sideOrientation : number



###areNormalsFrozen : boolean



##Methods

###addLODLevel(distance, mesh) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Add a mesh as LOD level triggered at the given distance.

@return {BABYLON.[Mesh](/classes/2.2-alpha/Mesh)} this mesh (for chaining)

####Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number | 
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###getLODLevelAtDistance(distance) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | distance | number | 

###removeLODLevel(mesh) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Remove a mesh from the LOD array

@return {BABYLON.[Mesh](/classes/2.2-alpha/Mesh)} this mesh (for chaining)

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###getLOD(camera, boundingSphere) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2-alpha/Camera) | 
optional | boundingSphere | [BoundingSphere](/classes/2.2-alpha/BoundingSphere) | 

###getTotalVertices() &rarr; number

Returns the total number of vertices in this mesh
###getVerticesData(kind, copyWhenShared) &rarr; number[]

Returns the data of a specific vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
optional | copyWhenShared | boolean | 

###getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/2.2-alpha/VertexBuffer)

Get the vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | any | 

###isVerticesDataPresent(kind) &rarr; boolean

Returns true if the kind vertex buffer given in parameter exists for this mesh, false otherwise

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###getVerticesDataKinds() &rarr; string[]

Get vertices data kinds
###getTotalIndices() &rarr; number

Get the total indices
###getIndices(copyWhenShared) &rarr; number[]

Returns the indices of this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean | 

###isReady() &rarr; boolean

Returns true if this mesh is ready to be rendered, false otherwise.
###isDisposed() &rarr; boolean

Returns true if this mesh is disposed, false otherwise.
###freezeNormals() &rarr; void


###unfreezeNormals() &rarr; void


###refreshBoundingInfo() &rarr; void

Refresh this mesh bounding infos
###subdivide(count) &rarr; void

Subdivide this mesh by creating &quot;count&quot; submeshes stored in this.subMeshes

####Parameters
 | Name | Type | Description
---|---|---|---
 | count | number | 

###setVerticesData(kind, data, updatable, stride) &rarr; void

Set the vertex buffer data of this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | any | 
 | data | any | 
optional | updatable | boolean | 
optional | stride | number | 

###updateVerticesData(kind, data, updateExtends, makeItUnique) &rarr; void

Update a specific kind of vertex buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] | 
optional | updateExtends | boolean | 
optional | makeItUnique | boolean | 

###updateVerticesDataDirectly(kind, data, offset, makeItUnique) &rarr; void

Update a specific kind of vertex buffer directly

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | Float32Array | 
optional | offset | number | 
optional | makeItUnique | boolean | 

###updateMeshPositions(positionFunction, computeNormals) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | positionFunction | any | 
optional | computeNormals | boolean | 

###makeGeometryUnique() &rarr; void

Make geometry unique
###setIndices(indices, totalVertices) &rarr; void

Set the indices of this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | 
optional | totalVertices | number | 

###registerBeforeRender(func) &rarr; void

Set the callback function to call before starting a frame rendering

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 

###unregisterBeforeRender(func) &rarr; void

Unregister the callback function which the name is given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 

###registerAfterRender(func) &rarr; void

Set the callback function to call after starting a frame rendering

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 

###unregisterAfterRender(func) &rarr; void

Unregister the callback function which the name is given in parameter.

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 

###render(subMesh, enableAlphaMode) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.2-alpha/SubMesh) | 
 | enableAlphaMode | boolean | 

###getEmittedParticleSystems() &rarr; [ParticleSystem](/classes/2.2-alpha/ParticleSystem)[]

Returns the list of particle system in which this mesh is the emitter.
###getHierarchyEmittedParticleSystems() &rarr; [ParticleSystem](/classes/2.2-alpha/ParticleSystem)[]

Returns a list of particle system. For all results, at least one descendant of this mesh is the emitter of it.
###getChildren() &rarr; [Node](/classes/2.2-alpha/Node)[]

Returns the list of children of this mesh.
###isInFrustum(frustumPlanes) &rarr; boolean

Returns true if this mesh is in the frustrum defined by the 6 planes given in parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###setMaterialByID(id) &rarr; void

Set this mesh material within all material present in the scene.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getAnimatables() &rarr; IAnimatable[]

Returns an array containing the mesh material if it exists.
###bakeTransformIntoVertices(transform) &rarr; void

Apply the given transformation to this mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | transform | [Matrix](/classes/2.2-alpha/Matrix) | 

###bakeCurrentTransformIntoVertices() &rarr; void


###clone(name, newParent, doNotCloneChildren) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Clone a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | newParent | [Node](/classes/2.2-alpha/Node) | 
optional | doNotCloneChildren | boolean | 

###dispose(doNotRecurse) &rarr; void

Dispose a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

###applyDisplacementMap(url, minHeight, maxHeight, onSuccess) &rarr; void

Apply displacement map

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | minHeight | number | 
 | maxHeight | number | 
optional | onSuccess | (mesh: [Mesh](/classes/2.2-alpha/Mesh)) =&gt; void | 

###applyDisplacementMapFromBuffer(buffer, heightMapWidth, heightMapHeight, minHeight, maxHeight) &rarr; void

Apply displacement map from the buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | Uint8Array | 
 | heightMapWidth | number | 
 | heightMapHeight | number | 
 | minHeight | number | 
 | maxHeight | number | 

###convertToFlatShadedMesh() &rarr; void

Updates normals and vertices to get a flat shading rendering.
Warning: This may imply adding vertices to the mesh in order to get exactly 3 vertices per face.
###flipFaces(flipNormals) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | flipNormals | boolean | 

###createInstance(name) &rarr; [InstancedMesh](/classes/2.2-alpha/InstancedMesh)

Create a new instance of InstanceMesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###synchronizeInstances() &rarr; void

Synchronize the instances
###simplify(settings, parallelProcessing, simplificationType, successCallback) &rarr; void

Simplify the mesh according to the given array of settings.

Function will return immediately and will simplify async.

####Parameters
 | Name | Type | Description
---|---|---|---
 | settings | Array&lt;ISimplificationSettings&gt; |  a collection of simplification settings.
optional | parallelProcessing | boolean |  should all levels calculate parallel or one after the other.
optional | simplificationType | [SimplificationType](/classes/2.2-alpha/SimplificationType) | 
optional | successCallback | (mesh: [Mesh](/classes/2.2-alpha/Mesh), submeshIndex: number) =&gt; void |  optional success callback to be called after the simplification finished processing all settings.

###optimizeIndices(successCallback) &rarr; void

Optimization of the mesh's indices, in case a mesh has duplicated vertices.

The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.

This should be used together with the simplification to avoid disappearing triangles.

####Parameters
 | Name | Type | Description
---|---|---|---
optional | successCallback | (mesh: [Mesh](/classes/2.2-alpha/Mesh)) =&gt; void |  an optional success callback to be called after the optimization finished.

###static CreateRibbon(name, pathArray, closeArray, closePath, offset, scene, updatable, sideOrientation, ribbonInstance) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | pathArray | [Vector3](/classes/2.2-alpha/Vector3)[][] | 
 | closeArray | boolean | 
 | closePath | boolean | 
 | offset | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | ribbonInstance | [Mesh](/classes/2.2-alpha/Mesh) | 

###static CreateDisc(name, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | radius | number | 
 | tessellation | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreateBox(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a box with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreateSphere(name, segments, diameter, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a [Sphere](/classes/2.2-alpha/Sphere) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | segments | number | 
 | diameter | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreateCylinder(name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a cylinder with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | height | number | 
 | diameterTop | number | 
 | diameterBottom | number | 
 | tessellation | number | 
 | subdivisions | any | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | any | 
optional | sideOrientation | number | 

###static CreateTorus(name, diameter, thickness, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a [Torus](/classes/2.2-alpha/Torus) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | diameter | number | 
 | thickness | number | 
 | tessellation | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreateTorusKnot(name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a TorusKnut with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | radius | number | 
 | tube | number | 
 | radialSegments | number | 
 | tubularSegments | number | 
 | p | number | 
 | q | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreateLines(name, points, scene, updatable, linesInstance) &rarr; [LinesMesh](/classes/2.2-alpha/LinesMesh)

Create a Line with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | points | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | linesInstance | [LinesMesh](/classes/2.2-alpha/LinesMesh) | 

###static CreateDashedLines(name, points, dashSize, gapSize, dashNb, scene, updatable, linesInstance) &rarr; [LinesMesh](/classes/2.2-alpha/LinesMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | points | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | dashSize | number | 
 | gapSize | number | 
 | dashNb | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | linesInstance | [LinesMesh](/classes/2.2-alpha/LinesMesh) | 

###static ExtrudeShape(name, shape, path, scale, rotation, cap, scene, updatable, sideOrientation, extrudedInstance) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | shape | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | path | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | scale | number | 
 | rotation | number | 
 | cap | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | extrudedInstance | [Mesh](/classes/2.2-alpha/Mesh) | 

###static ExtrudeShapeCustom(name, shape, path, scaleFunction, rotationFunction, ribbonCloseArray, ribbonClosePath, cap, scene, updatable, sideOrientation, extrudedInstance) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | shape | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | path | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | scaleFunction | any | 
 | rotationFunction | any | 
 | ribbonCloseArray | boolean | 
 | ribbonClosePath | boolean | 
 | cap | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | extrudedInstance | [Mesh](/classes/2.2-alpha/Mesh) | 

###static CreateLathe(name, shape, radius, tessellation, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | shape | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | radius | number | 
 | tessellation | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreatePlane(name, size, scene, updatable, sideOrientation) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a [Plane](/classes/2.2-alpha/Plane) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 

###static CreateGround(name, width, height, subdivisions, scene, updatable) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a [Ground](/classes/2.2-alpha/Ground) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | width | number | 
 | height | number | 
 | subdivisions | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 

###static CreateTiledGround(name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

; 
Create a [TiledGround](/classes/2.2-alpha/TiledGround) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | xmin | number | 
 | zmin | number | 
 | xmax | number | 
 | zmax | number | 
 | subdivisions | { w: number,  h: number } | 
 | precision | { w: number,  h: number } | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 

###static CreateGroundFromHeightMap(name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable, onReady) &rarr; [GroundMesh](/classes/2.2-alpha/GroundMesh)

Create a GroundFromHeightMap

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
 | width | number | 
 | height | number | 
 | subdivisions | number | 
 | minHeight | number | 
 | maxHeight | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | onReady | (mesh: [GroundMesh](/classes/2.2-alpha/GroundMesh)) =&gt; void | 

###static CreateTube(name, path, radius, tessellation, radiusFunction, cap, scene, updatable, sideOrientation, tubeInstance) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Create a Tube

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | path | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | radius | number | 
 | tessellation | number | 
 | radiusFunction | { (i, distance): number } | 
 | cap | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 
optional | sideOrientation | number | 
optional | tubeInstance | [Mesh](/classes/2.2-alpha/Mesh) | 

###static CreateDecal(name, sourceMesh, position, normal, size, angle) &rarr; [Mesh](/classes/2.2-alpha/Mesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | sourceMesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | position | [Vector3](/classes/2.2-alpha/Vector3) | 
 | normal | [Vector3](/classes/2.2-alpha/Vector3) | 
 | size | [Vector3](/classes/2.2-alpha/Vector3) | 
optional | angle | number | 

###applySkeleton(skeleton) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Update the vertex buffers by applying transformation from the bones

####Parameters
 | Name | Type | Description
---|---|---|---
 | skeleton | [Skeleton](/classes/2.2-alpha/Skeleton) | 

###static MinMax(meshes) &rarr; { min: [Vector3](/classes/2.2-alpha/Vector3),  max: [Vector3](/classes/2.2-alpha/Vector3) }



####Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | [AbstractMesh](/classes/2.2-alpha/AbstractMesh)[] | 

###static Center(meshesOrMinMaxVector) &rarr; [Vector3](/classes/2.2-alpha/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesOrMinMaxVector | any | 

###static MergeMeshes(meshes, disposeSource, allow32BitsIndices, meshSubclass) &rarr; [Mesh](/classes/2.2-alpha/Mesh)

Merge the array of meshes into a single mesh for performance reasons.

####Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | Array&lt;[Mesh](/classes/2.2-alpha/Mesh)&gt; | 
optional | disposeSource | boolean | 
optional | allow32BitsIndices | boolean | 
optional | meshSubclass | [Mesh](/classes/2.2-alpha/Mesh) | 

