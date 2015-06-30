---
ID_PAGE: 5778
PG_TITLE: LensFlareSystem
PG_VERSION: 2.0
---

Create a lens Flare system
##new [LensFlareSystem](page.php?p=5778)(name, emitter, scene)


The lens Flare system


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the lens flare system
 | emitter | any | The Emitter of the lens flare system : it can be a camera, a light or a mesh.
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) where the lens flare system is.
---

##Members

###name : string



The name of the lens Flare system


###lensFlares : [LensFlare](page.php?p=5777)[]



Lens flares array containing all lens flares


###borderLimit : number



Lens flare system border limit.


###meshesSelectionPredicate : (mesh: [Mesh](page.php?p=5722)) =&gt; boolean



Verify that a mesh can receive lens flares.


###isEnabled : boolean



Lens flare system is enabled







##Methods

###getScene() &rarr; [Scene](page.php?p=5725)
Get the scene where the lens flare system is.




###getEmitter() &rarr; any
Get the emitter




###getEmitterPosition() &rarr; [Vector3](page.php?p=5808)
Get the emitter position. Returns its absolute position if the emitter has an absolute position.




###computeEffectivePosition(globalViewport) &rarr; boolean
Compute the effective position



####Parameters
 | Name | Type | Description
---|---|---|---
 | globalViewport | [Viewport](page.php?p=5813) | The global viewport
---

###render() &rarr; boolean
Render the lens flare system




###dispose() &rarr; void

