---
ID_PAGE: 3262
PG_TITLE: TouchCamera
PG_VERSION: 1.14
---
##new [TouchCamera](page.php?p=3262)(name, position, scene)

Create a new [TouchCamera](page.php?p=3262) (camera controlled by touch with touchscreen)
A tutorial about [ArcRotateCamera](page.php?p=3250) can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the camera
 | position | [Vector3](page.php?p=3327) | Begin position of the camera (in [Vector3](page.php?p=3327))
 | scene | [Scene](page.php?p=3274) | The scene which contain camera
---

##Extends [FreeCamera](page.php?p=3254)
##Members

###angularSensibility : number


The angular sensibility of the camera

###moveSensibility : number


The move sensibility of the camera



##Methods

###attachControl(canvas, noPreventDefault) &rarr; void
Attach the camera controls and display to a canvas element

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | Element where the camera controls and display will be attached
 | noPreventDefault | boolean | No prevent default
---

###detachControl(canvas) &rarr; void
Detach the camera controls and display from a canvas element

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | The element from which the camera controls and display will be detached
---
