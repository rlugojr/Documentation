---
ID_PAGE: 24463
PG_TITLE: AnaglyphFreeCamera
PG_VERSION: 1.14
---
##new [AnaglyphFreeCamera](/classes/AnaglyphFreeCamera)(name, position, eyeSpace, scene)

The AnaglyphCamera is a camera package that is a more generic (non-Oculus) stereoscopic 3D camera.
There are actually two types of AnaglyphCamera. This one is a [AnaglyphFreeCamera](/classes/AnaglyphFreeCamera) : Stereoscopic 3D with two [FreeCamera](/classes/FreeCamera).
Tutorial [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The camera name
 | position | [Vector3](/classes/Vector3) | The camera position
 | eyeSpace | number | In degrees. Sets the amount of shift between the left eye view and the right eye view. Once you are wearing your 3D glasses, you might want to experiment with this float value.
 | scene | [Scene](/classes/Scene) | The scene which contain the camera
---

##Extends [FreeCamera](/classes/FreeCamera)


##Methods
