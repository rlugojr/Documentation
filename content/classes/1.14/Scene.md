---
ID_PAGE: 3274
PG_TITLE: Scene
PG_VERSION: 1.14
---
##new [Scene](page.php?p=3274)(engine)

Constructs a [Scene](page.php?p=3274) object with a given Babylon engine.
####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](page.php?p=3247) | [Engine](page.php?p=3247) The babylon engine
---

##Members

###static FOGMODE_NONE : number


The fog is deactivated

###static FOGMODE_EXP : number


The fog density is following an exponential function

###static FOGMODE_EXP2 : number


The fog density is following an exponential function faster than FOGMODE_EXP

###static FOGMODE_LINEAR : number


The fog density is following a linear function.

###static MinDeltaTime : number


default : 1.0

In milliseconds, the minimum delta time between two steps

###static MaxDeltaTime : number


default : 1000.0

In milliseconds, the maximum delta time between two steps

###autoClear : boolean


default : true

True to clear the color buffer at each render, false either

###clearColor : any


default : [Color3](page.php?p=3324)(0.2, 0.2, 0.3)

The color of the scene when cleared

###ambientColor : [Color3](page.php?p=3324)


default : [Color3](page.php?p=3324)(0, 0, 0)

The scene ambiant color

###beforeRender : () =&gt; void


Function triggered just before rendering the scene

###afterRender : () =&gt; void


Function triggered just after rendering the scene

###onDispose : () =&gt; void


Function triggered when the scene is deleted

###beforeCameraRender : (camera: [Camera](page.php?p=3249)) =&gt; void


Function triggered before the camera is rendered, with the concerned camera passed in argument

###afterCameraRender : (camera: [Camera](page.php?p=3249)) =&gt; void


Function triggered after the camera is rendered, with the concerned camera passed in argument

###forceWireframe : boolean


default : false

Forces the wireframe display of meshes

###clipPlane : [Plane](page.php?p=3330)


###onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](page.php?p=3299)) =&gt; void


Function triggered when the pointer interacts with the scene

The passed argument are the event and the element concerned with this event

###cameraToUseForPointers : [Camera](page.php?p=3249)


The camera used for pointers

###fogMode : number


One of the following values : [Scene](page.php?p=3274).FOGMODE_NONE, [Scene](page.php?p=3274).FOGMODE_EXP, [Scene](page.php?p=3274).FOGMODE_EXP2 , [Scene](page.php?p=3274).FOGMODE_LINEAR

###fogColor : [Color3](page.php?p=3324)


default : [Color3](page.php?p=3324)(0.2, 0.2, 0.3)

The fog color

###fogDensity : number


default : 0.1

The fog density

###fogStart : number


default : 0

Used with the [Scene](page.php?p=3274).FOGMODE_LINEAR fogMode

Where the fog starts

###fogEnd : number


default : 1000.0

Used with the [Scene](page.php?p=3274).FOGMODE_LINEAR fogMode

Where the fog ends

###lightsEnabled : boolean


default : true

Enables or disable lights for this scene

###lights : [Light](page.php?p=3264)[]


The array holding the list of [Light](page.php?p=3264) instances

###cameras : [Camera](page.php?p=3249)[]


The array holding the list of [Camera](page.php?p=3249) instances

###activeCameras : [Camera](page.php?p=3249)[]


The array holding the list of active [Camera](page.php?p=3249) instances

###activeCamera : [Camera](page.php?p=3249)


The active camera for this scene

###meshes : [AbstractMesh](page.php?p=3269)[]


The array holding all meshes of this scene

###materials : [Material](page.php?p=3312)[]


The array holding all materials of this scene

###multiMaterials : [MultiMaterial](page.php?p=3313)[]


The array holding all multimaterials of this scene

###defaultMaterial : [StandardMaterial](page.php?p=3315)


The default material used on meshes when no material is affected

###texturesEnabled : boolean


True if texture should be enabled, false otherwise

###textures : [BaseTexture](page.php?p=3317)[]


The array holding all textures used in the scene

###particlesEnabled : boolean


True if Particles should be enabled, false otherwise

###particleSystems : [ParticleSystem](page.php?p=3342)[]


The array holding all particle systems of this scene

###spriteManagers : [SpriteManager](page.php?p=3367)[]


The array holding all sprite managers of this scene

###layers : [Layer](page.php?p=3305)[]


The array holding all layers of this scene

###skeletons : [Skeleton](page.php?p=3296)[]


The array holding all skeletons of this scene

###lensFlareSystems : [LensFlareSystem](page.php?p=3307)[]


The array holding all lensflare systems of this scene

###collisionsEnabled : boolean


True if collisions should be enabled, false otherwise

###gravity : [Vector3](page.php?p=3327)


Defines the gravity applied to this scene

###postProcessesEnabled : boolean


True if postProcesses should be enabled, false otherwise

###postProcessManager : [PostProcessManager](page.php?p=3357)


The post process manager of this scene

###postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](page.php?p=3361)


The post process render pipeline manager of this scene

###renderTargetsEnabled : boolean


True if custom render target should be enabled, false otherwise

###customRenderTargets : [RenderTargetTexture](page.php?p=3321)[]


The array holding all custom render targets of this scene

###useDelayedTextureLoading : boolean


True if the texture loading should be delayed, false otherwise

###importedMeshesFiles : String[]


The array holding all imported mesh files

###database : any


The database this scene is saved into

###actionManager : [ActionManager](page.php?p=3288)


The action manager of this scene

###meshUnderPointer : [AbstractMesh](page.php?p=3269)


Contains the mesh under the pointer

###pointerX : number


The x coordinate of the pointer in this scene

###pointerY : number


The y coordinate of the pointer in this scene



##Methods

###getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](page.php?p=3362)
Returns the bounding box renderer


###getOutlineRenderer() &rarr; [OutlineRenderer](page.php?p=3363)
Returns the outline rendrer


###getEngine() &rarr; [Engine](page.php?p=3247)
Returns the engine


###getTotalVertices() &rarr; number
Returns all the vertices of this scene


###getActiveVertices() &rarr; number
Returns all the active vertices of this scene


###getActiveParticles() &rarr; number
Returns all the active particles of this scene


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


###attachControl() &rarr; void
Attaches mouse/keyboard control to this scene.
The canvas registering all controls is the canvas used to create the babylon engine.


###detachControl() &rarr; void
Detaches mouse/keyboard control to this scene


###isReady() &rarr; boolean
Returns true when the scene is ready to be displayed (all meshes are ready and all materials are ready)


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

###getWaitingItemsCount() &rarr; number
Returns the length of pending data (not ready yet)


###executeWhenReady(func) &rarr; void
Registers in an array the given function which will be called when the scene is ready

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | The given function to call
---

###beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](page.php?p=3293)
Begin an animation. All children animations will be launched too.

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | The animation target
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop
optional | speedRatio | number | default : 1. The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void | The function triggered on the end of the animation
optional | animatable | [Animatable](page.php?p=3293) | An optional specific animation
---

###beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](page.php?p=3293)
Begins a direct animation (no children animations)

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | The animation target
 | animations | [Animation](page.php?p=3294)[] | An array of animations
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop
optional | speedRatio | number | default : 1.The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void | The function triggered on the end of the animation
---

###getAnimatableByTarget(target) &rarr; [Animatable](page.php?p=3293)
Returns the first [Animatable](page.php?p=3293) instance having the given target in the active animatable array

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | the given target
---

###stopAnimation(target) &rarr; void
Stops the animation of the given target

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | The given target
---

###getViewMatrix() &rarr; [Matrix](page.php?p=3329)
Returns the view [Matrix](page.php?p=3329)


###getProjectionMatrix() &rarr; [Matrix](page.php?p=3329)
Returns the projection [Matrix](page.php?p=3329)


###getTransformMatrix() &rarr; [Matrix](page.php?p=3329)
Returns the transform [Matrix](page.php?p=3329)


###setTransformMatrix(view, projection) &rarr; void
Sets the transform matrix by multiplying the given view [Matrix](page.php?p=3329) by the given projection [Matrix](page.php?p=3329)

####Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](page.php?p=3329) | The given view [Matrix](page.php?p=3329)
 | projection | [Matrix](page.php?p=3329) | The given projection [Matrix](page.php?p=3329)
---

###setActiveCameraByID(id) &rarr; [Camera](page.php?p=3249)
Sets the given camera as the active camera using its given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id of the [Camera](page.php?p=3249)
---

###setActiveCameraByName(name) &rarr; [Camera](page.php?p=3249)
Sets the given [Camera](page.php?p=3249) as the active [Camera](page.php?p=3249) using its given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name of the [Camera](page.php?p=3249)
---

###getMaterialByID(id) &rarr; [Material](page.php?p=3312)
Returns the first [Material](page.php?p=3312) instance corresponding to the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getMaterialByName(name) &rarr; [Material](page.php?p=3312)
Returns the first [Material](page.php?p=3312) instance having the given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getCameraByID(id) &rarr; [Camera](page.php?p=3249)
Returns the first [Camera](page.php?p=3249) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getCameraByName(name) &rarr; [Camera](page.php?p=3249)
Returns the first [Camera](page.php?p=3249) instance corresponding to the given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLightByName(name) &rarr; [Light](page.php?p=3264)
Returns the first [Light](page.php?p=3264) instance corresponding to the given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLightByID(id) &rarr; [Light](page.php?p=3264)
Returns the first [Light](page.php?p=3264) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getGeometryByID(id) &rarr; [Geometry](page.php?p=3336)
Returns the first [Geometry](page.php?p=3336) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###pushGeometry(geometry, force) &rarr; boolean
Pushes the given [Geometry](page.php?p=3336) to into the list of geometries of this scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=3336) | The given geometry
optional | force | boolean | True to push the geometry even if it is not found in the list of geometries of the scene, false otherwise
---

###getGeometries() &rarr; [Geometry](page.php?p=3336)[]
Returns the list of geometries of this scene


###getMeshByID(id) &rarr; [AbstractMesh](page.php?p=3269)
Returns the first [Mesh](page.php?p=3271) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getLastMeshByID(id) &rarr; [AbstractMesh](page.php?p=3269)
Returns the last [Mesh](page.php?p=3271) instance of the array of meshes using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getLastEntryByID(id) &rarr; [Node](page.php?p=3248)
Returns one of the last mesh, camera or light having the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getMeshByName(name) &rarr; [AbstractMesh](page.php?p=3269)
Returns the [Mesh](page.php?p=3271) instance having the given name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLastSkeletonByID(id) &rarr; [Skeleton](page.php?p=3296)
Returns the last instance of [Skeleton](page.php?p=3296) using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getSkeletonById(id) &rarr; [Skeleton](page.php?p=3296)
Returns the first [Skeleton](page.php?p=3296) instance using the given id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getSkeletonByName(name) &rarr; [Skeleton](page.php?p=3296)
Returns the first [Skeleton](page.php?p=3296) instance corresponding to the given name

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
 | mesh | [Mesh](page.php?p=3271) | The given mesh
---

###updateTransformMatrix(force) &rarr; void
Updates the transform matrix of this scene with the one of the active camera

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | True to force the transform matrix update even if the projection is synchronized, false otherwise
---

###render() &rarr; void
Renders this [Scene](page.php?p=3274)


###dispose() &rarr; void
Remove of this scene all lights, meshes, cameras, materials, particle systems, spritemanagers.


###createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; Octree&lt;AbstractMesh&gt;
Creates a new octree for this scene or update it if existing.

####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | default : 64 The maximum capacity of the octree
optional | maxDepth | number | default : 2 The maximum depth of the octree
---

###createPickingRay(x, y, world, camera) &rarr; [Ray](page.php?p=3333)
Creates a picking ray in the current view.

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The mouse X coordinate in the render canvas
 | y | number | The mouse Y coordinate in the render canvas
 | world | [Matrix](page.php?p=3329) | The world [Matrix](page.php?p=3329)
 | camera | [Camera](page.php?p=3249) | The given [Camera](page.php?p=3249)
---

###pick(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](page.php?p=3299)
Launch a ray to try to pick a mesh in the scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | X position on screen
 | y | number | Y position on screen
optional | predicate | (mesh: [AbstractMesh](page.php?p=3269)) =&gt; boolean | Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean | Launch a fast check only using the bounding boxes. Can be set to null.
optional | camera | [Camera](page.php?p=3249) | [Camera](page.php?p=3249) to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used
---

###pickWithRay(ray, predicate, fastCheck) &rarr; [PickingInfo](page.php?p=3299)
Function used to pick a mesh by giving a ray (instead of a position).

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=3333) | The given [Ray](page.php?p=3333)
 | predicate | (mesh: [Mesh](page.php?p=3271)) =&gt; boolean | Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean | Launch a fast check only using the bounding boxes. Can be set to null.
---

###setPointerOverMesh(mesh) &rarr; void
The action OnPointerOutTrigger and OnPointerOverTrigger are triggered for the given mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=3269) | The given mesh
---

###getPointerOverMesh() &rarr; [AbstractMesh](page.php?p=3269)
Returns the pointer over the mesh


###getPhysicsEngine() &rarr; [PhysicsEngine](page.php?p=3343)
Returns the physic engine used for this scene


###enablePhysics(gravity, plugin) &rarr; boolean
Enable the physic engine in this scene.

####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](page.php?p=3327) | default : [Vector3](page.php?p=3327)(0, 0, -9.82). The scene gravity
optional | plugin | IPhysicsEnginePlugin | default : [OimoJSPlugin](page.php?p=3345). The physics plugin used
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
 | gravity | [Vector3](page.php?p=3327) | The given gravity
---

###createCompoundImpostor(parts, options) &rarr; any
Creates an impostor composed of the given parts

####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | any | The array of object build this way {mesh: [Mesh](page.php?p=3271), impostor: number}
 | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###deleteCompoundImpostor(compound) &rarr; void
Unregister the compound impostor in the physic engine.

####Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any | The param type is the one used by the physics plugin
---

###getMeshesByTags(tagsQuery) &rarr; [Mesh](page.php?p=3271)[]
Returns the list of meshes corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
---

###getCamerasByTags(tagsQuery) &rarr; [Camera](page.php?p=3249)[]
Returns the list of cameras corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
---

###getLightsByTags(tagsQuery) &rarr; [Light](page.php?p=3264)[]
Returns the list of lights corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
---

###getMaterialByTags(tagsQuery) &rarr; [Material](page.php?p=3312)[]
Returns the list of materials corresponding to the tag query given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
---
