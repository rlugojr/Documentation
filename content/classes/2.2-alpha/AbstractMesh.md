---
ID_PAGE: 25145
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [AbstractMesh](/classes/2.2-alpha/AbstractMesh) extends [Node](/classes/2.2-alpha/Node)



##Constructor

##new [AbstractMesh](/classes/2.2-alpha/AbstractMesh)(name, scene)

The [AbstractMesh](/classes/2.2-alpha/AbstractMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###static BILLBOARDMODE_NONE : number

The billboard Mode None, the object is normal by default

@default [AbstractMesh](/classes/2.2-alpha/AbstractMesh).BILLBOARDMODE_NONE

###static BILLBOARDMODE_X : number

The billboard Mode X

@default [AbstractMesh](/classes/2.2-alpha/AbstractMesh).BILLBOARDMODE_X

###static BILLBOARDMODE_Y : number

The billboard Mode Y

@default [AbstractMesh](/classes/2.2-alpha/AbstractMesh).BILLBOARDMODE_Y

###static BILLBOARDMODE_Z : number

The billboard Mode Z

@default [AbstractMesh](/classes/2.2-alpha/AbstractMesh).BILLBOARDMODE_Z

###static BILLBOARDMODE_ALL : number

The billboard Mode

@default [AbstractMesh](/classes/2.2-alpha/AbstractMesh).BILLBOARDMODE_ALL

###definedFacingForward : boolean



###position : [Vector3](/classes/2.2-alpha/Vector3)

The mesh position

@default [Vector3](/classes/2.2-alpha/Vector3)(0, 0, 0)

###rotation : [Vector3](/classes/2.2-alpha/Vector3)

The mesh rotation

@default [Vector3](/classes/2.2-alpha/Vector3)(0, 0, 0)

###rotationQuaternion : [Quaternion](/classes/2.2-alpha/Quaternion)

The mesh rotation [Quaternion](/classes/2.2-alpha/Quaternion)

@default [Quaternion](/classes/2.2-alpha/Quaternion)(x, y, z, w)

###scaling : [Vector3](/classes/2.2-alpha/Vector3)

The mesh scaling

@default [Vector3](/classes/2.2-alpha/Vector3)(1,1,1)

###billboardMode : number

The mesh billboardMode

@default [AbstractMesh](/classes/2.2-alpha/AbstractMesh).BILLBOARDMODE_NONE

###visibility : number

The mesh visibility

@default 1.0

###alphaIndex : number



###infiniteDistance : boolean

Is infinite distance

@default false

###isVisible : boolean

Is visible

@default true

###isPickable : boolean

Is pickable

@default true

###showBoundingBox : boolean

Show bounding box

@default false

###showSubMeshesBoundingBox : boolean

Show submeshes Bounding box

@default false

###onDispose : any

On dispose

@default null

###isBlocker : boolean

Is blocker

@default false

###skeleton : [Skeleton](/classes/2.2-alpha/Skeleton)

The skeleton

###renderingGroupId : number

The rendering group ID

@default 0

###material : [Material](/classes/2.2-alpha/Material)

The material

###receiveShadows : boolean

Receive shadows

@default false

###actionManager : [ActionManager](/classes/2.2-alpha/ActionManager)

The action manager

###renderOutline : boolean

Render Outline

###outlineColor : [Color3](/classes/2.2-alpha/Color3)

outline color

###outlineWidth : number

outline Width

###renderOverlay : boolean



###overlayColor : [Color3](/classes/2.2-alpha/Color3)



###overlayAlpha : number



###hasVertexAlpha : boolean



###useVertexColors : boolean



###applyFog : boolean



###computeBonesUsingShaders : boolean



###useOctreeForRenderingSelection : boolean

Is use octree for rendering selection

@default true

###useOctreeForPicking : boolean

Is use octree for picking

@default true

###useOctreeForCollisions : boolean

Is use octree for collisions

@default true

###layerMask : number

The layer mask

@default 0xFFFFFFFF

###alwaysSelectAsActiveMesh : boolean



###ellipsoid : [Vector3](/classes/2.2-alpha/Vector3)

Ellipsoid

###ellipsoidOffset : [Vector3](/classes/2.2-alpha/Vector3)

Ellipsoid offset

###onCollide : (collidedMesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void



###subMeshes : [SubMesh](/classes/2.2-alpha/SubMesh)[]

subMeshes

###isBlocked : boolean



###useBones : boolean



###worldMatrixFromCache : [Matrix](/classes/2.2-alpha/Matrix)

World [Matrix](/classes/2.2-alpha/Matrix) from cache

###absolutePosition : [Vector3](/classes/2.2-alpha/Vector3)

Absolute Position

###isWorldMatrixFrozen : boolean



###checkCollisions : boolean

Is check collisions

@default false

##Methods

###getLOD(camera) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2-alpha/Camera) | 

###getTotalVertices() &rarr; number

Get the total vertices
###getIndices() &rarr; number[]

To access the mesh vertices data
###getVerticesData(kind) &rarr; number[]

To access the mesh vertices data

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###isVerticesDataPresent(kind) &rarr; boolean

Is vertices data present

####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

###getBoundingInfo() &rarr; [BoundingInfo](/classes/2.2-alpha/BoundingInfo)

Get the bounding info
###getWorldMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the world matrix
###freezeWorldMatrix() &rarr; void


###unfreezeWorldMatrix() &rarr; void


###rotate(axis, amount, space) &rarr; void

Rotate this mesh with the given axis and the given angle in the mesh's space

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.2-alpha/Vector3) | 
 | amount | number | 
 | space | [Space](/classes/2.2-alpha/Space) | 

###translate(axis, distance, space) &rarr; void

Translate the mesh with the given axis, with the given distance

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](/classes/2.2-alpha/Vector3) | 
 | distance | number | 
 | space | [Space](/classes/2.2-alpha/Space) | 

###getAbsolutePosition() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Returns the absolute position
###setAbsolutePosition(absolutePosition) &rarr; void

Set the absolute position

####Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](/classes/2.2-alpha/Vector3) | 

###movePOV(amountRight, amountUp, amountForward) &rarr; void

Perform relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number | 
 | amountUp | number | 
 | amountForward | number | 

###calcMovePOV(amountRight, amountUp, amountForward) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Calculate relative position change from the point of view of behind the front of the mesh.

This is performed taking into account the meshes current rotation, so you do not have to care.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number | 
 | amountUp | number | 
 | amountForward | number | 

###rotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; void

Perform relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number | 
 | twirlClockwise | number | 
 | tiltRight | number | 

###calcRotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Calculate relative rotation change from the point of view of behind the front of the mesh.

Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number | 
 | twirlClockwise | number | 
 | tiltRight | number | 

###setPivotMatrix(matrix) &rarr; void

Set the pivot matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###getPivotMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the pivot matrix
###markAsDirty(property) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | 

###computeWorldMatrix(force) &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Compute the world matrix, recalculate the world matrix
@default false

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

###registerAfterWorldMatrixUpdate(func) &rarr; void

If you'd like to be callbacked after the mesh position, rotation or scaling has been updated

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | : callback function to add

###unregisterAfterWorldMatrixUpdate(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 

###setPositionWithLocalVector(vector3) &rarr; void

Set the position with a local vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.2-alpha/Vector3) | 

###getPositionExpressedInLocalSpace() &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Get the position in local space
###locallyTranslate(vector3) &rarr; void

Translate mesh in local space

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](/classes/2.2-alpha/Vector3) | 

###lookAt(targetPoint, yawCor, pitchCor, rollCor) &rarr; void

Orients a mesh towards a target point. [Mesh](/classes/2.2-alpha/Mesh) must be drawn facing user.

####Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](/classes/2.2-alpha/Vector3) | 
 | yawCor | number | 
 | pitchCor | number | 
 | rollCor | number | 

###attachToBone(bone, affectedMesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | bone | [Bone](/classes/2.2-alpha/Bone) | 
 | affectedMesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###detachFromBone() &rarr; void


###isInFrustum(frustumPlanes) &rarr; boolean

Is in frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 

###isCompletelyInFrustum(camera) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2-alpha/Camera) | 

###intersectsMesh(mesh, precise) &rarr; boolean

Intersects [Mesh](/classes/2.2-alpha/Mesh)
For precise : default value is false

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
optional | precise | boolean | 

###intersectsPoint(point) &rarr; boolean

Intersects Point

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.2-alpha/Vector3) | 

###setPhysicsState(impostor, options) &rarr; any

Set physics state to mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | impostor | any | 
optional | options | PhysicsBodyCreationOptions | 

###getPhysicsImpostor() &rarr; number

Get a physics impostor
###getPhysicsMass() &rarr; number

Get the physics mass
###getPhysicsFriction() &rarr; number

Get the physics friction
###getPhysicsRestitution() &rarr; number

Get the physics restitution
###getPositionInCameraSpace(camera) &rarr; [Vector3](/classes/2.2-alpha/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2-alpha/Camera) | 

###getDistanceToCamera(camera) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/2.2-alpha/Camera) | 

###applyImpulse(force, contactPoint) &rarr; void

Apply a force

####Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](/classes/2.2-alpha/Vector3) | 
 | contactPoint | [Vector3](/classes/2.2-alpha/Vector3) | 

###setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; void

Link the impostor in order to keep meshes linked

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](/classes/2.2-alpha/Mesh) | 
 | pivot1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | pivot2 | [Vector3](/classes/2.2-alpha/Vector3) | 
optional | options | any | 

###updatePhysicsBodyPosition() &rarr; void

Update physics body position
###moveWithCollisions(velocity) &rarr; void

Move a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](/classes/2.2-alpha/Vector3) | 

###createOrUpdateSubmeshesOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/2.2-alpha/Octree)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;

This function will create an octree to help select the right submeshes for rendering, picking and collisions

Please note that you must have a decent number of submeshes to get performance improvements when using octree

####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | 
optional | maxDepth | number | 

###intersects(ray, fastCheck) &rarr; [PickingInfo](/classes/2.2-alpha/PickingInfo)

Intersects
if false, infinite ray !

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 
optional | fastCheck | boolean | 

###clone(name, newParent, doNotCloneChildren) &rarr; [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

Clone this abstract mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | newParent | [Node](/classes/2.2-alpha/Node) | 
optional | doNotCloneChildren | boolean | 

###releaseSubMeshes() &rarr; void

Release submeshes
###dispose(doNotRecurse) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

