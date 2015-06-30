---
ID_PAGE: 6788
PG_TITLE: CannonJSPlugin
PG_VERSION: 2.1
---

The cannonJS physic engine, more info [there](http://cannonjs.org/)





##Members

###checkWithEpsilon : (value: number) =&gt; number




Tests if the given value is under the epsilon value



###updateBodyPosition : (mesh: [AbstractMesh](page.php?p=6657)) =&gt; void




Updates the position of the body using the given mesh rotation











##Methods

###initialize(iterations) &rarr; void
Initializes the engine





####Parameters
 | Name | Type | Description
---|---|---|---
optional | iterations | number | default : 10. The bigger are the iterations the more precise will be the equations but while calculating more the performance impacted
---

###runOneStep(delta) &rarr; void
Step the physics world forward in time.





####Parameters
 | Name | Type | Description
---|---|---|---
 | delta | number | The fixed time step size to use.
---

###setGravity(gravity) &rarr; void
Applies the given gravity into the world





####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](page.php?p=6751) | The given gravity
---

###registerMesh(mesh, impostor, options) &rarr; any
Registers a mesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | The mesh to register
 | impostor | number | The impostor to use
optional | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###registerMeshesAsCompound(parts, options) &rarr; any
Registers meshes as compound





####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | PhysicsCompoundBodyPart[] | The array of object build this way {mesh: [Mesh](page.php?p=6659), impostor: number}
 | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###unregisterMesh(mesh) &rarr; void
Removes a mesh from the workd





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | The given mesh
---

###applyImpulse(mesh, force, contactPoint) &rarr; void
Applies a force to the given mesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | The given mesh
 | force | [Vector3](page.php?p=6751) | The force to apply
 | contactPoint | [Vector3](page.php?p=6751) | The contact point on the given mesh
---

###createLink(mesh1, mesh2, pivot1, pivot2) &rarr; boolean
Create a physical link between two given meshes





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh1 | [AbstractMesh](page.php?p=6657) | The first mesh to link
 | mesh2 | [AbstractMesh](page.php?p=6657) | The second mesh to link
 | pivot1 | [Vector3](page.php?p=6751) | The point relative to the center of mass of the first given mesh
 | pivot2 | [Vector3](page.php?p=6751) | The point relative to the center of mass of the second given mesh
---

###dispose() &rarr; void
Disposes the [CannonJSPlugin](page.php?p=6788)






###isSupported() &rarr; boolean

