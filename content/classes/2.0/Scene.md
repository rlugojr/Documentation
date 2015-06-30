---
ID_PAGE: 5725
PG_TITLE: Scene
PG_VERSION: 2.0
---

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911
##new [Scene](page.php?p=5725)(engine)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](page.php?p=5700) | [Engine](page.php?p=5700) The babylon engine
---

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



default : [Color3](page.php?p=5805)(0.2, 0.2, 0.3)

The color of the scene when cleared


###ambientColor : [Color3](page.php?p=5805)



default : [Color3](page.php?p=5805)(0, 0, 0)

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

###beforeCameraRender : (camera: [Camera](page.php?p=5702)) =&gt; void



Function triggered before the camera is rendered, with the concerned camera passed in argument


###afterCameraRender : (camera: [Camera](page.php?p=5702)) =&gt; void



Function triggered after the camera is rendered, with the concerned camera passed in argument


###forceWireframe : boolean



default : false

Forces the wireframe display of meshes


###forcePointsCloud : boolean


###forceShowBoundingBoxes : boolean


###clipPlane : [Plane](page.php?p=5812)




###animationsEnabled : boolean


###onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](page.php?p=5769)) =&gt; void



Function triggered when the pointer interacts with the scene

The passed argument are the event and the element concerned with this event


###cameraToUseForPointers : [Camera](page.php?p=5702)



The camera used for pointers


###fogEnabled : boolean


is fog enabled on this scene.

@type {boolean}

###fogMode : number



One of the following values : [Scene](page.php?p=5725).FOGMODE_NONE, [Scene](page.php?p=5725).FOGMODE_EXP, [Scene](page.php?p=5725).FOGMODE_EXP2 , [Scene](page.php?p=5725).FOGMODE_LINEAR


###fogColor : [Color3](page.php?p=5805)



default : [Color3](page.php?p=5805)(0.2, 0.2, 0.3)

The fog color


###fogDensity : number



default : 0.1

The fog density


###fogStart : number



default : 0

Used with the [Scene](page.php?p=5725).FOGMODE_LINEAR fogMode

Where the fog starts


###fogEnd : number



default : 1000.0

Used with the [Scene](page.php?p=5725).FOGMODE_LINEAR fogMode

Where the fog ends


###shadowsEnabled : boolean


is shadow enabled on this scene.

@type {boolean}

###lightsEnabled : boolean


is light enabled on this scene.

@type {boolean}

###lights : [Light](page.php?p=5715)[]


All of the lights added to this scene.

@see [BABYLON](page.php?p=5696).Light

@type {BABYLON.Light[]}

###cameras : [Camera](page.php?p=5702)[]


All of the cameras added to this scene.

@see [BABYLON](page.php?p=5696).Camera

@type {BABYLON.Camera[]}

###activeCameras : [Camera](page.php?p=5702)[]



The array holding the list of active [Camera](page.php?p=5702) instances


###activeCamera : [Camera](page.php?p=5702)



The active camera for this scene


###meshes : [AbstractMesh](page.php?p=5720)[]


All of the (abstract) meshes added to this scene.

@see [BABYLON](page.php?p=5696).AbstractMesh

@type {BABYLON.AbstractMesh[]}

###materials : [Material](page.php?p=5783)[]



The array holding all materials of this scene


###multiMaterials : [MultiMaterial](page.php?p=5784)[]



The array holding all multimaterials of this scene


###defaultMaterial : [StandardMaterial](page.php?p=5786)



The default material used on meshes when no material is affected


###texturesEnabled : boolean



True if texture should be enabled, false otherwise


###textures : [BaseTexture](page.php?p=5788)[]



The array holding all textures used in the scene


###particlesEnabled : boolean



True if Particles should be enabled, false otherwise


###particleSystems : [ParticleSystem](page.php?p=5837)[]



The array holding all particle systems of this scene


###spriteManagers : [SpriteManager](page.php?p=5865)[]



The array holding all sprite managers of this scene


###layers : [Layer](page.php?p=5776)[]



The array holding all layers of this scene


###skeletonsEnabled : boolean


###skeletons : [Skeleton](page.php?p=5766)[]



The array holding all skeletons of this scene


###lensFlaresEnabled : boolean


###lensFlareSystems : [LensFlareSystem](page.php?p=5778)[]



The array holding all lensflare systems of this scene


###collisionsEnabled : boolean



True if collisions should be enabled, false otherwise


###gravity : [Vector3](page.php?p=5808)



Defines the gravity applied to this scene


###postProcessesEnabled : boolean



True if postProcesses should be enabled, false otherwise


###postProcessManager : [PostProcessManager](page.php?p=5853)



The post process manager of this scene


###postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](page.php?p=5858)



The post process render pipeline manager of this scene


###renderTargetsEnabled : boolean



True if custom render target should be enabled, false otherwise


###customRenderTargets : [RenderTargetTexture](page.php?p=5793)[]



The array holding all custom render targets of this scene


###useDelayedTextureLoading : boolean



True if the texture loading should be delayed, false otherwise


###importedMeshesFiles : String[]



The array holding all imported mesh files


###database : any



The database this scene is saved into


###actionManager : [ActionManager](page.php?p=5741)


This scene's action manager

@type {BABYLON.ActionManager}

###proceduralTexturesEnabled : boolean


###mainSoundTrack : [SoundTrack](page.php?p=5764)


###soundTracks : [SoundTrack](page.php?p=5764)[]


###debugLayer : [DebugLayer](page.php?p=5775)


###meshUnderPointer : [AbstractMesh](page.php?p=5720)


The mesh that is currently under the pointer.

@return {BABYLON.AbstractMesh} mesh under the pointer/mouse cursor or null if none.

###pointerX : number


Current on-screen X position of the pointer

@return {number} X position of the pointer

###pointerY : number


Current on-screen Y position of the pointer

@return {number} Y position of the pointer



##Methods

###getCachedMaterial() &rarr; [Material](page.php?p=5783)


###getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](page.php?p=5859)
Returns the bounding box renderer




###getOutlineRenderer() &rarr; [OutlineRenderer](page.php?p=5861)
Returns the outline rendrer




###getEngine() &rarr; [Engine](page.php?p=5700)
Returns the engine




###getTotalVertices() &rarr; number
Returns all the vertices of this scene




###getActiveVertices() &rarr; number
Returns all the active vertices of this scene




###getActiveParticles() &rarr; number
Returns all the active particles of this scene




###getActiveBones() &rarr; number


###getLastFrameDuration() &rarr; number
Returns the duration of the last frame in milliseconds




###getEvaluateActiveMeshesDuration() &rarr; number
Returns the duration of active meshes in milliseconds




###getActiveMeshes() &rarr; SmartArray&lt;Mesh&gt;
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
 | func | () =&gt; void | The given function to call
---

###unregisterBeforeRender(func) &rarr; void
Removes the given function from the beforeRender array



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | The given function to remove
---

###registerAfterRender(func) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 
---

###unregisterAfterRender(func) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 
---

###getWaitingItemsCount() &rarr; number
Returns the length of pending data (not ready yet)




###executeWhenReady(func) &rarr; void
Registers a function to be executed when the scene is ready.

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | The given function to call
---

###beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](page.php?p=5746)
Will start the animation sequence of a given target
@return {BABYLON.Animatable} the animatable object created for this animation
@see [BABYLON](page.php?p=5696).Animatable
@see http://doc.babylonjs.com/page.php?p=22081

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | - the target
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop
optional | speedRatio | number | default : 1. The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void | The function triggered on the end of the animation
optional | animatable | [Animatable](page.php?p=5746) | An optional specific animation
---

###beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](page.php?p=5746)
Begins a direct animation (no children animations)



####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | The animation target
 | animations | [Animation](page.php?p=5747)[] | An array of animations
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop
optional | speedRatio | number | default : 1.The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void | The function triggered on the end of the animation
---

###getAnimatableByTarget(target) &rarr; [Animatable](page.php?p=5746)
Returns the first [Animatable](page.php?p=5746) instance having the given target in the active animatable array



####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | the given target
---

###stopAnimation(target) &rarr; void
Will stop the animation of the given target
@see beginAnimation

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | - the target
---

###getViewMatrix() &rarr; [Matrix](page.php?p=5811)
Returns the view [Matrix](page.php?p=5811)




###getProjectionMatrix() &rarr; [Matrix](page.php?p=5811)
Returns the projection [Matrix](page.php?p=5811)




###getTransformMatrix() &rarr; [Matrix](page.php?p=5811)
Returns the transform [Matrix](page.php?p=5811)




###setTransformMatrix(view, projection) &rarr; void
Sets the transform matrix by multiplying the given view [Matrix](page.php?p=5811) by the given projection [Matrix](page.php?p=5811)



####Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](page.php?p=5811) | The given view [Matrix](page.php?p=5811)
 | projection | [Matrix](page.php?p=5811) | The given projection [Matrix](page.php?p=5811)
---

###setActiveCameraByID(id) &rarr; [Camera](page.php?p=5702)
sets the active camera of the scene using its ID
@return {BABYLON.Camera|null} the new active camera or null if none found.
@see activeCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id of the [Camera](page.php?p=5702)
---

###setActiveCameraByName(name) &rarr; [Camera](page.php?p=5702)
sets the active camera of the scene using its name
@return {BABYLON.Camera|null} the new active camera or null if none found.
@see activeCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name of the [Camera](page.php?p=5702)
---

###getMaterialByID(id) &rarr; [Material](page.php?p=5783)
get a material using its id
@return {BABYLON.Material|null} the material or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getMaterialByName(name) &rarr; [Material](page.php?p=5783)
get a material using its name
@return {BABYLON.Material|null} the material or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getCameraByID(id) &rarr; [Camera](page.php?p=5702)
Returns the first [Camera](page.php?p=5702) instance using the given id



####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getCameraByName(name) &rarr; [Camera](page.php?p=5702)
get a camera using its name
@return {BABYLON.Camera|null} the camera or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLightByName(name) &rarr; [Light](page.php?p=5715)
get a light node using its name
@return {BABYLON.Light|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLightByID(id) &rarr; [Light](page.php?p=5715)
get a light node using its ID
@return {BABYLON.Light|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getGeometryByID(id) &rarr; [Geometry](page.php?p=5823)
get a geometry using its ID
@return {BABYLON.Geometry|null} the geometry or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###pushGeometry(geometry, force) &rarr; boolean
add a new geometry to this scene.
@return {boolean} was the geometry added or not

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=5823) | The given geometry
optional | force | boolean | True to push the geometry even if it is not found in the list of geometries of the scene, false otherwise
---

###getGeometries() &rarr; [Geometry](page.php?p=5823)[]
Returns the list of geometries of this scene




###getMeshByID(id) &rarr; [AbstractMesh](page.php?p=5720)
Get a the first added mesh found of a given ID
@return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getLastMeshByID(id) &rarr; [AbstractMesh](page.php?p=5720)
Get a the last added mesh found of a given ID
@return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getLastEntryByID(id) &rarr; [Node](page.php?p=5701)
Get a the last added node (Mesh, [Camera](page.php?p=5702), [Light](page.php?p=5715)) found of a given ID
@return {BABYLON.Node|null} the node found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getNodeByName(name) &rarr; [Node](page.php?p=5701)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
---

###getMeshByName(name) &rarr; [AbstractMesh](page.php?p=5720)
Returns the [Mesh](page.php?p=5722) instance having the given name



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getSoundByName(name) &rarr; [Sound](page.php?p=5763)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
---

###getLastSkeletonByID(id) &rarr; [Skeleton](page.php?p=5766)
Returns the last instance of [Skeleton](page.php?p=5766) using the given id



####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getSkeletonById(id) &rarr; [Skeleton](page.php?p=5766)
Returns the first [Skeleton](page.php?p=5766) instance using the given id



####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getSkeletonByName(name) &rarr; [Skeleton](page.php?p=5766)
Returns the first [Skeleton](page.php?p=5766) instance corresponding to the given name



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###isActiveMesh(mesh) &rarr; boolean
Tests if the given mesh is active or not



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=5722) | The given mesh
---

###updateTransformMatrix(force) &rarr; void
Updates the transform matrix of this scene with the one of the active camera



####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | True to force the transform matrix update even if the projection is synchronized, false otherwise
---

###render() &rarr; void
Renders this [Scene](page.php?p=5725)




###enableDepthRenderer() &rarr; [DepthRenderer](page.php?p=5860)


###disableDepthRenderer() &rarr; void


###dispose() &rarr; void
Remove of this scene all lights, meshes, cameras, materials, particle systems, spritemanagers.




###getWorldExtends() &rarr; {min: [Vector3](page.php?p=5808); max: [Vector3](page.php?p=5808); }; 


###createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; Octree&lt;AbstractMesh&gt;
Creates a new octree for this scene or update it if existing.



####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | default : 64 The maximum capacity of the octree
optional | maxDepth | number | default : 2 The maximum depth of the octree
---

###createPickingRay(x, y, world, camera) &rarr; [Ray](page.php?p=5815)
Creates a picking ray in the current view.



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The mouse X coordinate in the render canvas
 | y | number | The mouse Y coordinate in the render canvas
 | world | [Matrix](page.php?p=5811) | The world [Matrix](page.php?p=5811)
 | camera | [Camera](page.php?p=5702) | The given [Camera](page.php?p=5702)
---

###pick(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](page.php?p=5769)
Launch a ray to try to pick a mesh in the scene



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | X position on screen
 | y | number | Y position on screen
optional | predicate | (mesh: [AbstractMesh](page.php?p=5720)) =&gt; boolean | Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean | Launch a fast check only using the bounding boxes. Can be set to null.
optional | camera | [Camera](page.php?p=5702) | [Camera](page.php?p=5702) to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used
---

###pickWithRay(ray, predicate, fastCheck) &rarr; [PickingInfo](page.php?p=5769)
Function used to pick a mesh by giving a ray (instead of a position).



####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=5815) | The given [Ray](page.php?p=5815)
 | predicate | (mesh: [Mesh](page.php?p=5722)) =&gt; boolean | Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean | Launch a fast check only using the bounding boxes. Can be set to null.
---

###setPointerOverMesh(mesh) &rarr; void
The action OnPointerOutTrigger and OnPointerOverTrigger are triggered for the given mesh



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=5720) | The given mesh
---

###getPointerOverMesh() &rarr; [AbstractMesh](page.php?p=5720)
Returns the pointer over the mesh




###getPhysicsEngine() &rarr; [PhysicsEngine](page.php?p=5838)
Returns the physic engine used for this scene




###enablePhysics(gravity, plugin) &rarr; boolean
Enable the physic engine in this scene.



####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](page.php?p=5808) | default : [Vector3](page.php?p=5808)(0, 0, -9.82). The scene gravity
optional | plugin | IPhysicsEnginePlugin | default : [OimoJSPlugin](page.php?p=5840). The physics plugin used
---

###disablePhysicsEngine() &rarr; void
Delete the physics engine of the scene




###isPhysicsEnabled() &rarr; boolean
True if a physic engine is defined, false otherwise




###setGravity(gravity) &rarr; void
Sets the given gracvity to the loaded physic engine



####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](page.php?p=5808) | The given gravity
---

###createCompoundImpostor(parts, options) &rarr; any
Creates an impostor composed of the given parts



####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | any | The array of object build this way {mesh: [Mesh](page.php?p=5722), impostor: number}
 | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###deleteCompoundImpostor(compound) &rarr; void
Unregister the compound impostor in the physic engine.



####Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any | The param type is the one used by the physics plugin
---

###createDefaultCameraOrLight() &rarr; void


###getMeshesByTags(tagsQuery, forEach) &rarr; [Mesh](page.php?p=5722)[]
Returns the list of meshes corresponding to the tag query given in parameter



####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (mesh: [AbstractMesh](page.php?p=5720)) =&gt; void | 
---

###getCamerasByTags(tagsQuery, forEach) &rarr; [Camera](page.php?p=5702)[]
Returns the list of cameras corresponding to the tag query given in parameter



####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (camera: [Camera](page.php?p=5702)) =&gt; void | 
---

###getLightsByTags(tagsQuery, forEach) &rarr; [Light](page.php?p=5715)[]
Returns the list of lights corresponding to the tag query given in parameter



####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (light: [Light](page.php?p=5715)) =&gt; void | 
---

###getMaterialByTags(tagsQuery, forEach) &rarr; [Material](page.php?p=5783)[]

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (material: [Material](page.php?p=5783)) =&gt; void | 
---
