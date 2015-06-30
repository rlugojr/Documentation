---
ID_PAGE: 3269
PG_TITLE: AbstractMesh
PG_VERSION: 1.14
---

The [AbstractMesh](page.php?p=3269) Class extends [Node](page.php?p=3248)

This class represents a mesh which can't be instantiated
##new [AbstractMesh](page.php?p=3269)(name, scene)

The [AbstractMesh](page.php?p=3269) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the mesh
 | scene | [Scene](page.php?p=3274) | The scene where the mesh is.
---

##Extends [Node](page.php?p=3248)
##Members

###static BILLBOARDMODE_NONE : number


The billboard Mode None, the object is normal by default

@default [BABYLON](page.php?p=3243).AbstractMesh.BILLBOARDMODE_NONE

###static BILLBOARDMODE_X : number


The billboard Mode X

@default [BABYLON](page.php?p=3243).AbstractMesh.BILLBOARDMODE_X

###static BILLBOARDMODE_Y : number


The billboard Mode Y

@default [BABYLON](page.php?p=3243).AbstractMesh.BILLBOARDMODE_Y

###static BILLBOARDMODE_Z : number


The billboard Mode Z

@default [BABYLON](page.php?p=3243).AbstractMesh.BILLBOARDMODE_Z

###static BILLBOARDMODE_ALL : number


The billboard Mode

@default [BABYLON](page.php?p=3243).AbstractMesh.BILLBOARDMODE_ALL

###position : [Vector3](page.php?p=3327)


The mesh position

@default [BABYLON](page.php?p=3243).Vector3(0, 0, 0)

###rotation : [Vector3](page.php?p=3327)


The mesh rotation

@default [BABYLON](page.php?p=3243).Vector3(0, 0, 0)

###rotationQuaternion : [Quaternion](page.php?p=3328)


The mesh rotation [Quaternion](page.php?p=3328)

@default [BABYLON](page.php?p=3243).Quaternion(x, y, z, w)

###scaling : [Vector3](page.php?p=3327)


The mesh scaling

@default [BABYLON](page.php?p=3243).Vector3(1,1,1)

###billboardMode : number


The mesh billboardMode

@default [BABYLON](page.php?p=3243).AbstractMesh.BILLBOARDMODE_NONE

###visibility : number


The mesh visibility

@default 1.0

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

###checkCollisions : boolean


Is check collisions

@default false

###isBlocker : boolean


Is blocker

@default false

###skeleton : [Skeleton](page.php?p=3296)


The skeleton

###renderingGroupId : number


The rendering group ID

@default 0

###material : [Material](page.php?p=3312)


The material

###receiveShadows : boolean


Receive shadows

@default false

###actionManager : [ActionManager](page.php?p=3288)


The action manager

###renderOutline : boolean


Render Outline

###outlineColor : [Color3](page.php?p=3324)


outline color

###outlineWidth : number


outline Width

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

###ellipsoid : [Vector3](page.php?p=3327)


Ellipsoid

###ellipsoidOffset : [Vector3](page.php?p=3327)


Ellipsoid offset

###subMeshes : [SubMesh](page.php?p=3339)[]


subMeshes

###worldMatrixFromCache : [Matrix](page.php?p=3329)


World [Matrix](page.php?p=3329) from cache

###absolutePosition : [Vector3](page.php?p=3327)


Absolute Position



##Methods

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

###getBoundingInfo() &rarr; [BoundingInfo](page.php?p=3301)
Get the bounding info


###getWorldMatrix() &rarr; [Matrix](page.php?p=3329)
Get the world matrix


###rotate(axis, amount, space) &rarr; void
Rotate this mesh with the given axis and the given angle in the mesh's space

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](page.php?p=3327) | the rotation axis
 | amount | number | the rotation angle
 | space | [Space](page.php?p=3386) | local or global
---

###translate(axis, distance, space) &rarr; void
Translate the mesh with the given axis, with the given distance

####Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [Vector3](page.php?p=3327) | the rotation axis
 | distance | number | the distance from the origin to the next position
 | space | [Space](page.php?p=3386) | local or global
---

###getAbsolutePosition() &rarr; [Vector3](page.php?p=3327)
Returns the absolute position


###setAbsolutePosition(absolutePosition) &rarr; void
Set the absolute position

####Parameters
 | Name | Type | Description
---|---|---|---
 | absolutePosition | [Vector3](page.php?p=3327) | @param absolutePosition
---

###setPivotMatrix(matrix) &rarr; void
Set the pivot matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](page.php?p=3329) | @param matrix
---

###getPivotMatrix() &rarr; [Matrix](page.php?p=3329)
Get the pivot matrix


###markAsDirty(property) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | property | string | @param property
---

###computeWorldMatrix(force) &rarr; [Matrix](page.php?p=3329)
Compute the world matrix, recalculate the world matrix
@default false

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | force or not if you want to recalculate
---

###setPositionWithLocalVector(vector3) &rarr; void
Set the position with a local vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](page.php?p=3327) | @param vector3
---

###getPositionExpressedInLocalSpace() &rarr; [Vector3](page.php?p=3327)
Get the position in local space


###locallyTranslate(vector3) &rarr; void
Translate mesh in local space

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector3 | [Vector3](page.php?p=3327) | the translation contact information
---

###lookAt(targetPoint, yawCor, pitchCor, rollCor) &rarr; void
Orients a mesh towards a target point. [Mesh](page.php?p=3271) must be drawn facing user.

####Parameters
 | Name | Type | Description
---|---|---|---
 | targetPoint | [Vector3](page.php?p=3327) | The position (must be in same space as current mesh) to look at
 | yawCor | number | optional yaw (y-axis) correction in radians
 | pitchCor | number | optional pitch (x-axis) correction in radians
 | rollCor | number | optional roll (z-axis) correction in radians
---

###isInFrustum(frustumPlanes) &rarr; boolean
Is in frustum

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=3330)[] | is between near frustum plan and far frustum plan view
---

###intersectsMesh(mesh, precise) &rarr; boolean
Intersects [Mesh](page.php?p=3271)
For precise : default value is false

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=3269) | The mesh
optional | precise | boolean | If true, the abstractMesh is closer to the mesh,
---

###intersectsPoint(point) &rarr; boolean
Intersects Point

####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=3327) | the intersect point
---

###setPhysicsState(impostor, options) &rarr; void
Set physics state to mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | impostor | any | The physics impostor [Sphere](page.php?p=3397)/Box/Plane
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


###applyImpulse(force, contactPoint) &rarr; void
Apply a force

####Parameters
 | Name | Type | Description
---|---|---|---
 | force | [Vector3](page.php?p=3327) | the force direction
 | contactPoint | [Vector3](page.php?p=3327) | the contact point
---

###setPhysicsLinkWith(otherMesh, pivot1, pivot2, options) &rarr; void
Link the impostor in order to keep meshes linked

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherMesh | [Mesh](page.php?p=3271) | the impostor
 | pivot1 | [Vector3](page.php?p=3327) | link the impostor with this mesh
 | pivot2 | [Vector3](page.php?p=3327) | link the impostor with this mesh
optional | options | any | @param options
---

###updatePhysicsBodyPosition() &rarr; void
Update physics body position


###moveWithCollisions(velocity) &rarr; void
Move a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | velocity | [Vector3](page.php?p=3327) | change the velocity
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

###intersects(ray, fastCheck) &rarr; [PickingInfo](page.php?p=3299)
Intersects
if false, infinite ray !

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=3333) | The ray
optional | fastCheck | boolean | if true, stop at the first result
---

###clone(name, newParent, doNotCloneChildren) &rarr; [AbstractMesh](page.php?p=3269)
Clone this abstract mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The new name
 | newParent | [Node](page.php?p=3248) | @param newParent
optional | doNotCloneChildren | boolean | Set true if you want to clone children, false otherwise
---

###releaseSubMeshes() &rarr; void
Release submeshes


###dispose(doNotRecurse) &rarr; void
Dispose this abstract mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
