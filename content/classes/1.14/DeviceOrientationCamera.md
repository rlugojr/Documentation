---
ID_PAGE: 3256
PG_TITLE: DeviceOrientationCamera
PG_VERSION: 1.14
---
##new [DeviceOrientationCamera](page.php?p=3256)(name, position, scene)

Create a new [DeviceOrientationCamera](page.php?p=3256). It's a camera controlled by device orientation
A tutorial about [DeviceOrientationCamera](page.php?p=3256) can be found [here](http://blogs.msdn.com/b/eternalcoding/archive/2013/10/07/understanding-deviceorientation-events-by-creating-a-small-3d-game-with-babylon-js.aspx)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](page.php?p=3327) | 
 | scene | [Scene](page.php?p=3274) | 
---

##Extends [FreeCamera](page.php?p=3254)
##Members

###angularSensibility : number


The angular sensibility of the camera

###moveSensibility : number


The move sensibility of the camera



##Methods

###attachControl(canvas, noPreventDefault) &rarr; void
Attach the camera controls and display to a canvas

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | Element to attach the controls and display
 | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(canvas) &rarr; void
Detach the camera controls and display from a canvas

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | Element to detach the controls and display
---
