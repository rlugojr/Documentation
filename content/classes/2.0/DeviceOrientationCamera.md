---
ID_PAGE: 5709
PG_TITLE: DeviceOrientationCamera
PG_VERSION: 2.0
---
##new [DeviceOrientationCamera](page.php?p=5709)(name, position, scene)


Create a new [DeviceOrientationCamera](page.php?p=5709). It's a camera controlled by device orientation
A tutorial about [DeviceOrientationCamera](page.php?p=5709) can be found [here](http://blogs.msdn.com/b/eternalcoding/archive/2013/10/07/understanding-deviceorientation-events-by-creating-a-small-3d-game-with-babylon-js.aspx)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](page.php?p=5808) | 
 | scene | [Scene](page.php?p=5725) | 
---

##Extends
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

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | Element to detach the controls and display
---