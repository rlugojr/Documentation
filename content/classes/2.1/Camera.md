---
ID_PAGE: 6631
PG_TITLE: Camera
PG_VERSION: 2.1
---
##new [Camera](page.php?p=6631)(name, position, scene)



Creates a new [Camera](page.php?p=6631).
A tutorial about [ArcRotateCamera](page.php?p=6632) can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The camera name
 | position | [Vector3](page.php?p=6751) | The camera position
 | scene | [Scene](page.php?p=6662) | The scene linked to this camera
---

##Extends [Node](page.php?p=6630)
##Members

###position : [Vector3](page.php?p=6751)




Position of the camera



###static PERSPECTIVE_CAMERA : number






###static ORTHOGRAPHIC_CAMERA : number






###static FOVMODE_VERTICAL_FIXED : number




###static FOVMODE_HORIZONTAL_FIXED : number




###static RIG_MODE_NONE : number


###static RIG_MODE_STEREOSCOPIC_ANAGLYPH : number


###static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : number


###static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED : number


###static RIG_MODE_STEREOSCOPIC_OVERUNDER : number


###static RIG_MODE_VR : number


###upVector : [Vector3](page.php?p=6751)



 [Camera](page.php?p=6631) up



###orthoLeft : any




For orthographic camera, it's the left side of point of view



###orthoRight : any




For orthographic camera, it's the right side of point of view



###orthoBottom : any




For orthegraphic camera, it's the bottom side of point of view



###orthoTop : any




For orthographic camera, it's the top side of point of view



###fov : number




Field of view of the camera



###minZ : number




Minimum distance of view



###maxZ : number




Maximum distance of view



###inertia : number




Inertia of the camera



###mode : number




0 = PERSPECTIVE

1 = ORTHOGRAPHIC



###isIntermediate : boolean




True if this camera is a subcamera, false otherwise



###viewport : [Viewport](page.php?p=6756)




The viewport



###layerMask : number




The layerMask






###fovMode : number







###cameraRigMode : number


###globalPosition : [Vector3](page.php?p=6751)




##Methods

###getActiveMeshes() &rarr; SmartArray&lt;Mesh&gt;


###isActiveMesh(mesh) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=6659) | 
---

###attachControl(element) &rarr; void
Attach the control and display of the camera to the element





####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element to attach control and display
---

###detachControl(element) &rarr; void
Detach the control and display of the camera from the element





####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element to detach control and display
---

###attachPostProcess(postProcess, insertAt) &rarr; number
Attaches a given post process





####Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](page.php?p=6790) | @param postProcess
optional | insertAt | number | Index of postProcess to add
---

###detachPostProcess(postProcess, atIndices) &rarr; number[]
Detach a fiven post process





####Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](page.php?p=6790) | @param postProcess
optional | atIndices | any | Index of postProcess to detach
---

###getWorldMatrix() &rarr; [Matrix](page.php?p=6754)
Get the worldMatrix






###getViewMatrix(force) &rarr; [Matrix](page.php?p=6754)
Get the viewMatrix





####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 
---

###getProjectionMatrix(force) &rarr; [Matrix](page.php?p=6754)
Get the projectionMatrix





####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 
---

###dispose() &rarr; void


###setCameraRigMode(mode, rigParams) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number | 
 | rigParams | any | 
---

###setCameraRigParameter(name, value) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | any | 
---

###createRigCamera(name, cameraIndex) &rarr; [Camera](page.php?p=6631)
May needs to be overridden by children so sub has required properties to be copied

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 
---
