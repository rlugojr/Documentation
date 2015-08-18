---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---
##Description

class [Scene](/classes/2.2-alpha/Scene)

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911

##Constructor

##new [Scene](/classes/2.2-alpha/Scene)(engine)

@constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.2-alpha/Engine) | 

##Members

###static MinDeltaTime : number

default : 1.0

In milliseconds, the minimum delta time between two steps

###static MaxDeltaTime : number

default : 1000.0

In milliseconds, the maximum delta time between two steps

###static FOGMODE_NONE : number

The fog is deactivated

###static FOGMODE_EXP : number

The fog density is following an exponential function

###static FOGMODE_EXP2 : number

The fog density is following an exponential function faster than FOGMODE_EXP

###static FOGMODE_LINEAR : number

The fog density is following a linear function.

###autoClear : boolean

default : true

True to clear the color buffer at each render, false either

###clearColor : any

default : [Color3](/classes/2.2-alpha/Color3)(0.2, 0.2, 0.3)

The color of the scene when cleared

###ambientColor : [Color3](/classes/2.2-alpha/Color3)

default : [Color3](/classes/2.2-alpha/Color3)(0, 0, 0)

The scene ambiant color

###beforeRender : () =&gt; void

A function to be executed before rendering this scene

@type {Function}

###afterRender : () =&gt; void

A function to be executed after rendering this scene

@type {Function}

###onDispose : () =&gt; void

A function to be executed when this scene is disposed.

@type {Function}

###beforeCameraRender : (camera: [Camera](/classes/2.2-alpha/Camera)) =&gt; void

Function triggered before the camera is rendered, with the concerned camera passed in argument

###afterCameraRender : (camera: [Camera](/classes/2.2-alpha/Camera)) =&gt; void

Function triggered after the camera is rendered, with the concerned camera passed in argument

###forceWireframe : boolean

default : false

Forces the wireframe display of meshes

###forcePointsCloud : boolean



###forceShowBoundingBoxes : boolean



###clipPlane : [Plane](/classes/2.2-alpha/Plane)



###animationsEnabled : boolean



###onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.2-alpha/PickingInfo)) =&gt; void

Function triggered when the pointer interacts with the scene

The passed argument are the event and the element concerned with this event

###onPointerUp : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.2-alpha/PickingInfo)) =&gt; void



###cameraToUseForPointers : [Camera](/classes/2.2-alpha/Camera)

The camera used for pointers

###fogEnabled : boolean

is fog enabled on this scene.

@type {boolean}

###fogMode : number

One of the following values : [Scene](/classes/2.2-alpha/Scene).FOGMODE_NONE, [Scene](/classes/2.2-alpha/Scene).FOGMODE_EXP, [Scene](/classes/2.2-alpha/Scene).FOGMODE_EXP2 , [Scene](/classes/2.2-alpha/Scene).FOGMODE_LINEAR

###fogColor : [Color3](/classes/2.2-alpha/Color3)

default : [Color3](/classes/2.2-alpha/Color3)(0.2, 0.2, 0.3)

The fog color

###fogDensity : number

default : 0.1

The fog density

###fogStart : number

default : 0

Used with the [Scene](/classes/2.2-alpha/Scene).FOGMODE_LINEAR fogMode

Where the fog starts

###fogEnd : number

default : 1000.0

Used with the [Scene](/classes/2.2-alpha/Scene).FOGMODE_LINEAR fogMode

Where the fog ends

###shadowsEnabled : boolean

is shadow enabled on this scene.

@type {boolean}

###lightsEnabled : boolean

is light enabled on this scene.

@type {boolean}

###lights : [Light](/classes/2.2-alpha/Light)[]

All of the lights added to this scene.

@see BABYLON.[Light](/classes/2.2-alpha/Light)

@type {BABYLON.[Light](/classes/2.2-alpha/Light)[]}

###onNewLightAdded : (newLight: [Light](/classes/2.2-alpha/Light), positionInArray: number, scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void



###onLightRemoved : (removedLight: [Light](/classes/2.2-alpha/Light)) =&gt; void



###cameras : [Camera](/classes/2.2-alpha/Camera)[]

All of the cameras added to this scene.

@see BABYLON.[Camera](/classes/2.2-alpha/Camera)

@type {BABYLON.[Camera](/classes/2.2-alpha/Camera)[]}

###onNewCameraAdded : (newCamera: [Camera](/classes/2.2-alpha/Camera), positionInArray: number, scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void



###onCameraRemoved : (removedCamera: [Camera](/classes/2.2-alpha/Camera)) =&gt; void



###activeCameras : [Camera](/classes/2.2-alpha/Camera)[]

The array holding the list of active [Camera](/classes/2.2-alpha/Camera) instances

###activeCamera : [Camera](/classes/2.2-alpha/Camera)

The active camera for this scene

###meshes : [AbstractMesh](/classes/2.2-alpha/AbstractMesh)[]

All of the (abstract) meshes added to this scene.

@see BABYLON.[AbstractMesh](/classes/2.2-alpha/AbstractMesh)

@type {BABYLON.[AbstractMesh](/classes/2.2-alpha/AbstractMesh)[]}

###onNewMeshAdded : (newMesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh), positionInArray: number, scene: [Scene](/classes/2.2-alpha/Scene)) =&gt; void



###onMeshRemoved : (removedMesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void



###onGeometryAdded : (newGeometry: [Geometry](/classes/2.2-alpha/Geometry)) =&gt; void



###onGeometryRemoved : (removedGeometry: [Geometry](/classes/2.2-alpha/Geometry)) =&gt; void



###materials : [Material](/classes/2.2-alpha/Material)[]

The array holding all materials of this scene

###multiMaterials : [MultiMaterial](/classes/2.2-alpha/MultiMaterial)[]

The array holding all multimaterials of this scene

###defaultMaterial : [StandardMaterial](/classes/2.2-alpha/StandardMaterial)

The default material used on meshes when no material is affected

###texturesEnabled : boolean

True if texture should be enabled, false otherwise

###textures : [BaseTexture](/classes/2.2-alpha/BaseTexture)[]

The array holding all textures used in the scene

###particlesEnabled : boolean

True if Particles should be enabled, false otherwise

###particleSystems : [ParticleSystem](/classes/2.2-alpha/ParticleSystem)[]

The array holding all particle systems of this scene

###spritesEnabled : boolean



###spriteManagers : [SpriteManager](/classes/2.2-alpha/SpriteManager)[]

The array holding all sprite managers of this scene

###layers : [Layer](/classes/2.2-alpha/Layer)[]

The array holding all layers of this scene

###skeletonsEnabled : boolean



###skeletons : [Skeleton](/classes/2.2-alpha/Skeleton)[]

The array holding all skeletons of this scene

###lensFlaresEnabled : boolean



###lensFlareSystems : [LensFlareSystem](/classes/2.2-alpha/LensFlareSystem)[]

The array holding all lensflare systems of this scene

###collisionsEnabled : boolean

True if collisions should be enabled, false otherwise

###collisionCoordinator : ICollisionCoordinator



###gravity : [Vector3](/classes/2.2-alpha/Vector3)

Defines the gravity applied to this scene

###postProcessesEnabled : boolean

True if postProcesses should be enabled, false otherwise

###postProcessManager : [PostProcessManager](/classes/2.2-alpha/PostProcessManager)

The post process manager of this scene

###postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](/classes/2.2-alpha/PostProcessRenderPipelineManager)

The post process render pipeline manager of this scene

###renderTargetsEnabled : boolean

True if custom render target should be enabled, false otherwise

###dumpNextRenderTargets : boolean



###customRenderTargets : [RenderTargetTexture](/classes/2.2-alpha/RenderTargetTexture)[]

The array holding all custom render targets of this scene

###useDelayedTextureLoading : boolean

True if the texture loading should be delayed, false otherwise

###importedMeshesFiles : String[]

The array holding all imported mesh files

###database : any

The database this scene is saved into

###actionManager : [ActionManager](/classes/2.2-alpha/ActionManager)

This scene's action manager

@type {BABYLON.[ActionManager](/classes/2.2-alpha/ActionManager)}

###proceduralTexturesEnabled : boolean



###mainSoundTrack : [SoundTrack](/classes/2.2-alpha/SoundTrack)



###soundTracks : [SoundTrack](/classes/2.2-alpha/SoundTrack)[]



###simplificationQueue : [SimplificationQueue](/classes/2.2-alpha/SimplificationQueue)



###debugLayer : [DebugLayer](/classes/2.2-alpha/DebugLayer)



###workerCollisions : boolean



###SelectionOctree : [Octree](/classes/2.2-alpha/Octree)&lt;[AbstractMesh](/classes/2.2-alpha/AbstractMesh)&gt;



###meshUnderPointer : [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

The mesh that is currently under the pointer.

@return {BABYLON.[AbstractMesh](/classes/2.2-alpha/AbstractMesh)} mesh under the pointer/mouse cursor or null if none.

###pointerX : number

Current on-screen X position of the pointer

@return {number} X position of the pointer

###pointerY : number

Current on-screen Y position of the pointer

@return {number} Y position of the pointer

###audioEnabled : boolean



###headphone : boolean



##Methods

###getCachedMaterial() &rarr; [Material](/classes/2.2-alpha/Material)


###getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](/classes/2.2-alpha/BoundingBoxRenderer)

Returns the bounding box renderer
###getOutlineRenderer() &rarr; [OutlineRenderer](/classes/2.2-alpha/OutlineRenderer)

Returns the outline rendrer
###getEngine() &rarr; [Engine](/classes/2.2-alpha/Engine)

Returns the engine
###getTotalVertices() &rarr; number

Returns all the vertices of this scene
###getActiveIndices() &rarr; number


###getActiveParticles() &rarr; number

Returns all the active particles of this scene
###getActiveBones() &rarr; number


###getLastFrameDuration() &rarr; number

Returns the duration of the last frame in milliseconds
###getEvaluateActiveMeshesDuration() &rarr; number

Returns the duration of active meshes in milliseconds
###getActiveMeshes() &rarr; [SmartArray](/classes/2.2-alpha/SmartArray)&lt;[Mesh](/classes/2.2-alpha/Mesh)&gt;

Returns the list of acti meshes of this scene
###getRenderTargetsDuration() &rarr; number

Returns the duration of targets render in milliseconds
###getRenderDuration() &rarr; number

Returns the duration of the last render in milliseconds
###getParticlesDuration() &rarr; number

Returns the duration of the last particles processing in milliseconds
###getSpritesDuration() &rarr; number

Returns the duration of the last sprites processing in milliseconds
###getAnimationRatio() &rarr; number

Returns the animation ratio (speed)
###getRenderId() &rarr; number

Returns the render ID of this scene
###incrementRenderId() &rarr; void


###attachControl() &rarr; void

Attaches mouse/keyboard control to this scene.
The canvas registering all controls is the canvas used to create the babylon engine.
###detachControl() &rarr; void

Detaches mouse/keyboard control to this scene
###isReady() &rarr; boolean

Returns true when the scene is ready to be displayed (all meshes are ready and all materials are ready)
###resetCachedMaterial() &rarr; void


###registerBeforeRender(func) &rarr; void

Registers in an array the given function which will be executed before rendering the scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

###unregisterBeforeRender(func) &rarr; void

Removes the given function from the beforeRender array

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

###registerAfterRender(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

###unregisterAfterRender(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

###getWaitingItemsCount() &rarr; number

Returns the length of pending data (not ready yet)
###executeWhenReady(func) &rarr; void

Registers a function to be executed when the scene is ready.

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

###beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](/classes/2.2-alpha/Animatable)

Will start the animation sequence of a given target

@return {BABYLON.[Animatable](/classes/2.2-alpha/Animatable)} the animatable object created for this animation

@see BABYLON.[Animatable](/classes/2.2-alpha/Animatable)

@see http://doc.babylonjs.com/page.php?p=22081

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target
 | from | number | 
 | to | number | 
optional | loop | boolean | 
optional | speedRatio | number | 
optional | onAnimationEnd | () =&gt; void | 
optional | animatable | [Animatable](/classes/2.2-alpha/Animatable) | 

###beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](/classes/2.2-alpha/Animatable)

Begins a direct animation (no children animations)

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 
 | animations | [Animation](/classes/2.2-alpha/Animation)[] | 
 | from | number | 
 | to | number | 
optional | loop | boolean | 
optional | speedRatio | number | 
optional | onAnimationEnd | () =&gt; void | 

###getAnimatableByTarget(target) &rarr; [Animatable](/classes/2.2-alpha/Animatable)

Returns the first [Animatable](/classes/2.2-alpha/Animatable) instance having the given target in the active animatable array

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 

###stopAnimation(target) &rarr; void

Will stop the animation of the given target

@see beginAnimation

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target

###getViewMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Returns the view [Matrix](/classes/2.2-alpha/Matrix)
###getProjectionMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Returns the projection [Matrix](/classes/2.2-alpha/Matrix)
###getTransformMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Returns the transform [Matrix](/classes/2.2-alpha/Matrix)
###setTransformMatrix(view, projection) &rarr; void

Sets the transform matrix by multiplying the given view [Matrix](/classes/2.2-alpha/Matrix) by the given projection [Matrix](/classes/2.2-alpha/Matrix)

####Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](/classes/2.2-alpha/Matrix) | 
 | projection | [Matrix](/classes/2.2-alpha/Matrix) | 

###addMesh(newMesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###removeMesh(toRemove) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###removeLight(toRemove) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Light](/classes/2.2-alpha/Light) | 

###removeCamera(toRemove) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Camera](/classes/2.2-alpha/Camera) | 

###addLight(newLight) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | newLight | [Light](/classes/2.2-alpha/Light) | 

###addCamera(newCamera) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/2.2-alpha/Camera) | 

###setActiveCameraByID(id) &rarr; [Camera](/classes/2.2-alpha/Camera)

sets the active camera of the scene using its ID

@return {BABYLON.[Camera](/classes/2.2-alpha/Camera)|null} the new active camera or null if none found.

@see activeCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###setActiveCameraByName(name) &rarr; [Camera](/classes/2.2-alpha/Camera)

sets the active camera of the scene using its name

@return {BABYLON.[Camera](/classes/2.2-alpha/Camera)|null} the new active camera or null if none found.

@see activeCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getMaterialByID(id) &rarr; [Material](/classes/2.2-alpha/Material)

get a material using its id

@return {BABYLON.[Material](/classes/2.2-alpha/Material)|null} the material or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getMaterialByName(name) &rarr; [Material](/classes/2.2-alpha/Material)

get a material using its name

@return {BABYLON.[Material](/classes/2.2-alpha/Material)|null} the material or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getLensFlareSystemByName(name) &rarr; [LensFlareSystem](/classes/2.2-alpha/LensFlareSystem)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getCameraByID(id) &rarr; [Camera](/classes/2.2-alpha/Camera)

Returns the first [Camera](/classes/2.2-alpha/Camera) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getCameraByUniqueID(uniqueId) &rarr; [Camera](/classes/2.2-alpha/Camera)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 

###getCameraByName(name) &rarr; [Camera](/classes/2.2-alpha/Camera)

get a camera using its name

@return {BABYLON.[Camera](/classes/2.2-alpha/Camera)|null} the camera or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getLightByName(name) &rarr; [Light](/classes/2.2-alpha/Light)

get a light node using its name

@return {BABYLON.[Light](/classes/2.2-alpha/Light)|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getLightByID(id) &rarr; [Light](/classes/2.2-alpha/Light)

get a light node using its ID

@return {BABYLON.[Light](/classes/2.2-alpha/Light)|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getLightByUniqueID(uniqueId) &rarr; [Light](/classes/2.2-alpha/Light)

get a light node using its scene-generated unique ID

@return {BABYLON.[Light](/classes/2.2-alpha/Light)|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 

###getGeometryByID(id) &rarr; [Geometry](/classes/2.2-alpha/Geometry)

get a geometry using its ID

@return {BABYLON.[Geometry](/classes/2.2-alpha/Geometry)|null} the geometry or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###pushGeometry(geometry, force) &rarr; boolean

add a new geometry to this scene.

@return {boolean} was the geometry added or not

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 
optional | force | boolean | 

###removeGeometry(geometry) &rarr; boolean

Removes an existing geometry

@return {boolean} was the geometry removed or not

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 

###getGeometries() &rarr; [Geometry](/classes/2.2-alpha/Geometry)[]

Returns the list of geometries of this scene
###getMeshByID(id) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Get the first added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.2-alpha/AbstractMesh)|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getMeshByUniqueID(uniqueId) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Get a mesh with its auto-generated unique id

@return {BABYLON.[AbstractMesh](/classes/2.2-alpha/AbstractMesh)|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 

###getLastMeshByID(id) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Get a the last added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.2-alpha/AbstractMesh)|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getLastEntryByID(id) &rarr; [Node](/classes/2.2-alpha/Node)

Get a the last added node ([Mesh](/classes/2.2-alpha/Mesh), [Camera](/classes/2.2-alpha/Camera), [Light](/classes/2.2-alpha/Light)) found of a given ID

@return {BABYLON.[Node](/classes/2.2-alpha/Node)|null} the node found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getNodeByName(name) &rarr; [Node](/classes/2.2-alpha/Node)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getMeshByName(name) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Returns the [Mesh](/classes/2.2-alpha/Mesh) instance having the given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getSoundByName(name) &rarr; [Sound](/classes/2.2-alpha/Sound)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getLastSkeletonByID(id) &rarr; [Skeleton](/classes/2.2-alpha/Skeleton)

Returns the last instance of [Skeleton](/classes/2.2-alpha/Skeleton) using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getSkeletonById(id) &rarr; [Skeleton](/classes/2.2-alpha/Skeleton)

Returns the first [Skeleton](/classes/2.2-alpha/Skeleton) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

###getSkeletonByName(name) &rarr; [Skeleton](/classes/2.2-alpha/Skeleton)

Returns the first [Skeleton](/classes/2.2-alpha/Skeleton) instance corresponding to the given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###isActiveMesh(mesh) &rarr; boolean

Tests if the given mesh is active or not

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 

###updateTransformMatrix(force) &rarr; void

Updates the transform matrix of this scene with the one of the active camera

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

###render() &rarr; void

Renders this [Scene](/classes/2.2-alpha/Scene)
###enableDepthRenderer() &rarr; [DepthRenderer](/classes/2.2-alpha/DepthRenderer)


###disableDepthRenderer() &rarr; void


###dispose() &rarr; void

Remove of this scene all lights, meshes, cameras, materials, particle systems, spritemanagers.
###disposeSounds() &rarr; void


###getWorldExtends() &rarr; { min: [Vector3](/classes/2.2-alpha/Vector3),  max: [Vector3](/classes/2.2-alpha/Vector3) }


###createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/2.2-alpha/Octree)&lt;[AbstractMesh](/classes/2.2-alpha/AbstractMesh)&gt;

Creates a new octree for this scene or update it if existing.

####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | 
optional | maxDepth | number | 

###createPickingRay(x, y, world, camera) &rarr; [Ray](/classes/2.2-alpha/Ray)

Creates a picking ray in the current view.

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | world | [Matrix](/classes/2.2-alpha/Matrix) | 
 | camera | [Camera](/classes/2.2-alpha/Camera) | 

###pick(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](/classes/2.2-alpha/PickingInfo)

Launch a ray to try to pick a mesh in the scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
optional | predicate | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; boolean | 
optional | fastCheck | boolean | 
optional | camera | [Camera](/classes/2.2-alpha/Camera) | 

###pickWithRay(ray, predicate, fastCheck) &rarr; [PickingInfo](/classes/2.2-alpha/PickingInfo)

Function used to pick a mesh by giving a ray (instead of a position).

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 
 | predicate | (mesh: [Mesh](/classes/2.2-alpha/Mesh)) =&gt; boolean | 
optional | fastCheck | boolean | 

###setPointerOverMesh(mesh) &rarr; void

The action OnPointerOutTrigger and OnPointerOverTrigger are triggered for the given mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###getPointerOverMesh() &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Returns the pointer over the mesh
###getPhysicsEngine() &rarr; [PhysicsEngine](/classes/2.2-alpha/PhysicsEngine)

Returns the physic engine used for this scene
###enablePhysics(gravity, plugin) &rarr; boolean

Enable the physic engine in this scene.

####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.2-alpha/Vector3) | 
optional | plugin | IPhysicsEnginePlugin | 

###disablePhysicsEngine() &rarr; void

Delete the physics engine of the scene
###isPhysicsEnabled() &rarr; boolean

True if a physic engine is defined, false otherwise
###setGravity(gravity) &rarr; void

Sets the given gracvity to the loaded physic engine

####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.2-alpha/Vector3) | 

###createCompoundImpostor(parts, options) &rarr; any

Creates an impostor composed of the given parts

####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | any | 
 | options | PhysicsBodyCreationOptions | 

###deleteCompoundImpostor(compound) &rarr; void

Unregister the compound impostor in the physic engine.

####Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any | 

###createDefaultCameraOrLight() &rarr; void


###getMeshesByTags(tagsQuery, forEach) &rarr; [Mesh](/classes/2.2-alpha/Mesh)[]

Returns the list of meshes corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 

###getCamerasByTags(tagsQuery, forEach) &rarr; [Camera](/classes/2.2-alpha/Camera)[]

Returns the list of cameras corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (camera: [Camera](/classes/2.2-alpha/Camera)) =&gt; void | 

###getLightsByTags(tagsQuery, forEach) &rarr; [Light](/classes/2.2-alpha/Light)[]

Returns the list of lights corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (light: [Light](/classes/2.2-alpha/Light)) =&gt; void | 

###getMaterialByTags(tagsQuery, forEach) &rarr; [Material](/classes/2.2-alpha/Material)[]



####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (material: [Material](/classes/2.2-alpha/Material)) =&gt; void | 

