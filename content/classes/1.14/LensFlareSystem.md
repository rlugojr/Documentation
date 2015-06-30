---
ID_PAGE: 3307
PG_TITLE: LensFlareSystem
PG_VERSION: 1.14
---

Create a lens Flare system
##new [LensFlareSystem](page.php?p=3307)(name, emitter, scene)

The lens Flare system
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the lens flare system
 | emitter | any | The Emitter of the lens flare system : it can be a camera, a light or a mesh.
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) where the lens flare system is.
---

##Members

###name : string


The name of the lens Flare system

###lensFlares : [LensFlare](page.php?p=3306)[]


Lens flares array containing all lens flares

###borderLimit : number


Lens flare system border limit.

###meshesSelectionPredicate : (mesh: [Mesh](page.php?p=3271)) =&gt; boolean


Verify that a mesh can receive lens flares.

###isEnabled : boolean


Lens flare system is enabled



##Methods

###getScene() &rarr; [Scene](page.php?p=3274)
Get the scene where the lens flare system is.


###getEmitter() &rarr; any
Get the emitter


###getEmitterPosition() &rarr; [Vector3](page.php?p=3327)
Get the emitter position. Returns its absolute position if the emitter has an absolute position.


###computeEffectivePosition(globalViewport) &rarr; boolean
Compute the effective position

####Parameters
 | Name | Type | Description
---|---|---|---
 | globalViewport | [Viewport](page.php?p=3331) | The global viewport
---

###render() &rarr; boolean
Render the lens flare system


###dispose() &rarr; void
Delete the lens flare system.

