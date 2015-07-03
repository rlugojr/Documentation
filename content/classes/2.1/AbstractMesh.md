---
ID_PAGE: 6657
PG_TITLE: AbstractMesh
PG_VERSION: 2.1
TAGS:
    - testTag1
    - testTag2
    - testTag3
---

The [AbstractMesh](page.php?p=6657) Class extends [Node](page.php?p=6630)

This class represents a mesh which can't be instantiated
##new [AbstractMesh](page.php?p=6657)(name, scene)



The [AbstractMesh](page.php?p=6657) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the mesh
 | scene | [Scene](page.php?p=6662) | The scene where the mesh is.
---

##Extends
 [Node](page.php?p=6630)
##Members

###static BILLBOARDMODE_NONE : number




The billboard Mode None, the object is normal by default

@default [BABYLON](page.php?p=6625).AbstractMesh.BILLBOARDMODE_NONE



###static BILLBOARDMODE_X : number




The billboard Mode X

@default [BABYLON](page.php?p=6625).AbstractMesh.BILLBOARDMODE_X



###static BILLBOARDMODE_Y : number




The billboard Mode Y

@default [BABYLON](page.php?p=6625).AbstractMesh.BILLBOARDMODE_Y



###static BILLBOARDMODE_Z : number




The billboard Mode Z

@default [BABYLON](page.php?p=6625).AbstractMesh.BILLBOARDMODE_Z



###static BILLBOARDMODE_ALL : number




The billboard Mode

@default [BABYLON](page.php?p=6625).AbstractMesh.BILLBOARDMODE_ALL



###definedFacingForward : boolean




###position : [Vector3](page.php?p=6751)




The mesh position

@default [BABYLON](page.php?p=6625).Vector3(0, 0, 0)



###rotation : [Vector3](page.php?p=6751)




The mesh rotation

@default [BABYLON](page.php?p=6625).Vector3(0, 0, 0)



###rotationQuaternion : [Quaternion](page.php?p=6753)




The mesh rotation [Quaternion](page.php?p=6753)

@default [BABYLON](page.php?p=6625).Quaternion(x, y, z, w)



###scaling : [Vector3](page.php?p=6751)




The mesh scaling

@default [BABYLON](page.php?p=6625).Vector3(1,1,1)



###billboardMode : number




The mesh billboardMode

@default [BABYLON](page.php?p=6625).AbstractMesh.BILLBOARDMODE_NONE



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



###skeleton : [Skeleton](page.php?p=6703)




The skeleton



###renderingGroupId : number




The rendering group ID

@default 0



###material : [Material](page.php?p=6726)




The material



###receiveShadows : boolean




Receive shadows

@default false



###actionManager : [ActionManager](page.php?p=6678)




The action manager



###renderOutline : boolean




Render Outline



###outlineColor : [Color3](page.php?p=6748)




outline color



###outlineWidth : number




outline Width



###renderOverlay : boolean




###overlayColor : [Color3](page.php?p=6748)




###overlayAlpha : number




###hasVertexAlpha : boolean




###useVertexColors : boolean




###applyFog : boolean




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


###ellipsoid : [Vector3](page.php?p=6751)




Ellipsoid



###ellipsoidOffset : [Vector3](page.php?p=6751)




Ellipsoid offset



###subMeshes : [SubMesh](page.php?p=6783)[]




subMeshes



###isBlocked : boolean




###useBones : boolean




###worldMatrixFromCache : [Matrix](page.php?p=6754)




World [Matrix](page.php?p=6754) from cache



###absolutePosition : [Vector3](page.php?p=6751)




Absolute Position









###isWorldMatrixFrozen : boolean


###checkCollisions : boolean




Is check collisions

@default false





##Methods

###getLOD(camera) &rarr; [AbstractMesh](page.php?p=6657)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=6631) | 
---

###getTotalVertices() &rarr; number
Get the total vertices






###getIndices() &rarr; number[]
To access the mesh vertices data






###getVerticesData(kind) &rarr; number[]
To access the mesh vertices data





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | The kind of the vertice data
---

###isVerticesDataPresent(kind) &rarr; boolean
Is vertices data present





####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###getBoundingInfo() &rarr; [BoundingInfo](page.php?p=6714)
Get the bounding info






###getWorldMatrix() &rarr; [Matrix](page.php?p=6754)
Get the world matrix






###freezeWorldMatrix() &rarr; void


###unfreezeWorldMatrix() &rarr; void


###rotate(axis, amount, space) &rarr; void
Rotate this mesh with the given axis and the given angle in the mesh's space





####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](page.php?p=6751) | the rotation axis
 | amount | number | the rotation angle
 | space | [Space](page.php?p=6852) | local or global
---

###translate(axis, distance, space) &rarr; void
Translate the mesh with the given axis, with the given distance





####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](page.php?p=6751) | the rotation axis
 | distance | number | the distance from the origin to the next position
 | space | [Space](page.php?p=6852) | local or global
---

###getAbsolutePosition() &rarr; [Vector3](page.php?p=6751)
Returns the absolute position






###setAbsolutePosition(absolutePosition) &rarr; void
Set the absolute position





####Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](page.php?p=6751) | @param absolutePosition
---

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
---

###calcMovePOV(amountRight, amountUp, amountForward) &rarr; [Vector3](page.php?p=6751)
Calculate relative position change from the point of view of behind the front of the mesh.
This is performed taking into account the meshes current rotation, so you do not have to care.
Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | amountRight | number | 
 | amountUp | number | 
 | amountForward | number | 
---

###rotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; void
Perform relative rotation change from the point of view of behind the front of the mesh.
Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number | 
 | twirlClockwise | number | 
 | tiltRight | number | 
---

###calcRotatePOV(flipBack, twirlClockwise, tiltRight) &rarr; [Vector3](page.php?p=6751)
Calculate relative rotation change from the point of view of behind the front of the mesh.
Supports definition of mesh facing forward or backward.

####Parameters
 | Name | Type | Description
---|---|---|---
 | flipBack | number | 
 | twirlClockwise | number | 
 | tiltRight | number | 
---

###setPivotMatrix(matrix) &rarr; void
Set the pivot matrix





####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](page.php?p=6754) | @param matrix
---

###getPivotMatrix() &rarr; [Matrix](page.php?p=6754)
Get the pivot matrix






###markAsDirty(property) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | @param property
---

###computeWorldMatrix(force) &rarr; [Matrix](page.php?p=6754)
Compute the world matrix, recalculate the world matrix
@default false





####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | force or not if you want to recalculate
---

###registerAfterWorldMatrixUpdate(func) &rarr; void
If you'd like to be callbacked after the mesh position, rotation or scaling has been updated

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](page.php?p=6657)) =&gt; void | 
---

###unregisterAfterWorldMatrixUpdate(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | (mesh: [AbstractMesh](page.php?p=6657)) =&gt; void | 
---

###setPositionWithLocalVector(vector3) &rarr; void
Set the position with a local vector





####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](page.php?p=6751) | @param vector3
---

###getPositionExpressedInLocalSpace() &rarr; [Vector3](page.php?p=6751)
Get the position in local space






###locallyTranslate(vector3) &rarr; void
Translate mesh in local space





####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](page.php?p=6751) | the translation contact information
---

###lookAt(targetPoint, yawCor, pitchCor, rollCor) &rarr; void
Orients a mesh towards a target point. [Mesh](page.php?p=6659) must be drawn facing user.





####Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](page.php?p=6751) | The position (must be in same space as current mesh) to look at
 | yawCor | number | optional yaw (y-axis) correction in radians
 | pitchCor | number | optional pitch (x-axis) correction in radians
 | rollCor | number | optional roll (z-axis) correction in radians
---

###isInFrustum(frustumPlanes) &rarr; boolean
Is in frustum





####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=6755)[] | is between near frustum plan and far frustum plan view
---

###isCompletelyInFrustum(camera) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](page.php?p=6631) | 
---

###intersectsMesh(mesh, precise) &rarr; boolean
Intersects [Mesh](page.php?p=6659)
For precise : default value is false





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | The mesh
optional | precise | boolean | If true, the abstractMesh is closer to the mesh,
---

###intersectsPoint(point) &rarr; boolean
Intersects Point





####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=6751) | the intersect point
---

###setPhysicsState(impostor, options) &rarr; any
Set physics state to mesh





####Parameters
 | Name | Type | Description
---|---|---|---
optional | impostor | any | The physics impostor [Sphere](page.php?p=6867)/Box/Plane
optional | options | PhysicsBodyCreationOptions | Is this object should move ? If yes, set it to true.
---

###getPhysicsImpostor() &rarr; number
Get a physics impostor






###getPhysicsMass() &rarr; number
Get the physics mass






###getPhysicsFriction() &rarr; number
Get the physics friction






###getPhysicsRestitution() &rarr; number
Get the physics restitution






###getPositionInCameraSpace(camera) &rarr; [Vector3](page.php?p=6751)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](page.php?p=6631) | 
---

###getDistanceToCamera(camera) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](page.php?p=6631) | 
---

###applyImpulse(force, contactPoint) &rarr; void
Apply a force





####Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](page.php?p=6751) | the force direction
 | contactPoint | [Vector3](page.php?p=6751) | the contact point
---

###setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; void
Link the impostor in order to keep meshes linked





####Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](page.php?p=6659) | the impostor
 | pivot1 | [Vector3](page.php?p=6751) | link the impostor with this mesh
 | pivot2 | [Vector3](page.php?p=6751) | link the impostor with this mesh
optional | options | any | @param options
---

###updatePhysicsBodyPosition() &rarr; void
Update physics body position






###moveWithCollisions(velocity) &rarr; void
Move a mesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](page.php?p=6751) | change the velocity
---

###createOrUpdateSubmeshesOctree(maxCapacity, maxDepth) &rarr; Octree&lt;SubMesh&gt;
This function will create an octree to help select the right submeshes for rendering, picking and collisions
Please note that you must have a decent number of submeshes to get performance improvements when using octree

####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | @param maxCapacity
optional | maxDepth | number | @param maxDepth
---

###intersects(ray, fastCheck) &rarr; [PickingInfo](page.php?p=6712)
Intersects
if false, infinite ray !





####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=6758) | The ray
optional | fastCheck | boolean | if true, stop at the first result
---

###clone(name, newParent, doNotCloneChildren) &rarr; [AbstractMesh](page.php?p=6657)
Clone this abstract mesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The new name
 | newParent | [Node](page.php?p=6630) | @param newParent
optional | doNotCloneChildren | boolean | Set true if you want to clone children, false otherwise
---

###releaseSubMeshes() &rarr; void
Release submeshes






###dispose(doNotRecurse) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
