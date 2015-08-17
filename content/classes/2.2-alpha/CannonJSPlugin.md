---
ID_PAGE: 25276
PG_TITLE: CannonJSPlugin
PG_VERSION: 2.1
TAGS:
    -   Plugins
---
##Description

class [CannonJSPlugin](/classes/2.2-alpha/CannonJSPlugin)



##Members

###checkWithEpsilon : (value: number) =&gt; number

Tests if the given value is under the epsilon value

###updateBodyPosition : (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void

Updates the position of the body using the given mesh rotation

##Methods

###initialize(iterations) &rarr; void

Initializes the engine

####Parameters
 | Name | Type | Description
---|---|---|---
optional | iterations | number | 

###runOneStep(delta) &rarr; void

Step the physics world forward in time.

####Parameters
 | Name | Type | Description
---|---|---|---
 | delta | number | 

###setGravity(gravity) &rarr; void

Applies the given gravity into the world

####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.2-alpha/Vector3) | 

###registerMesh(mesh, impostor, options) &rarr; any

Registers a mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | impostor | number | 
optional | options | PhysicsBodyCreationOptions | 

###registerMeshesAsCompound(parts, options) &rarr; any

Registers meshes as compound

####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | PhysicsCompoundBodyPart[] | 
 | options | PhysicsBodyCreationOptions | 

###unregisterMesh(mesh) &rarr; void

Removes a mesh from the workd

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###applyImpulse(mesh, force, contactPoint) &rarr; void

Applies a force to the given mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | force | [Vector3](/classes/2.2-alpha/Vector3) | 
 | contactPoint | [Vector3](/classes/2.2-alpha/Vector3) | 

###createLink(mesh1, mesh2, pivot1, pivot2) &rarr; boolean

Create a physical link between two given meshes

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh1 | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | mesh2 | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | pivot1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | pivot2 | [Vector3](/classes/2.2-alpha/Vector3) | 

###dispose() &rarr; void

Disposes the [CannonJSPlugin](/classes/2.2-alpha/CannonJSPlugin)
###isSupported() &rarr; boolean


