---
ID_PAGE: 25277
PG_TITLE: OimoJSPlugin
PG_VERSION: 2.1
TAGS:
    - Plugins
---
##Description

class [OimoJSPlugin](/classes/2.2-alpha/OimoJSPlugin)



##Members

###updateBodyPosition : (mesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void

Update the body position according to the mesh position

@param mesh

##Methods

###initialize(iterations) &rarr; void

Initializes the OIMO engine

####Parameters
 | Name | Type | Description
---|---|---|---
optional | iterations | number | 

###setGravity(gravity) &rarr; void

Sets the gravity

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
 | options | PhysicsBodyCreationOptions | 

###registerMeshesAsCompound(parts, options) &rarr; any

Register meshes as compound

####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | PhysicsCompoundBodyPart[] | 
 | options | PhysicsBodyCreationOptions | 

###unregisterMesh(mesh) &rarr; void

Removes the mesh from the world

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###applyImpulse(mesh, force, contactPoint) &rarr; void

Applies a force to the mesh at a contact point

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | force | [Vector3](/classes/2.2-alpha/Vector3) | 
 | contactPoint | [Vector3](/classes/2.2-alpha/Vector3) | 

###createLink(mesh1, mesh2, pivot1, pivot2, options) &rarr; boolean

Creates a physical link between two meshes

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh1 | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | mesh2 | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | pivot1 | [Vector3](/classes/2.2-alpha/Vector3) | 
 | pivot2 | [Vector3](/classes/2.2-alpha/Vector3) | 
optional | options | any | 

###dispose() &rarr; void

Destroys the engine object
###isSupported() &rarr; boolean

Tests if the plugin is usable in the current environement
###runOneStep(time) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | time | number | 

