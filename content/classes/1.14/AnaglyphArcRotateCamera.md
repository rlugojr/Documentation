---
ID_PAGE: 3251
PG_TITLE: AnaglyphArcRotateCamera
PG_VERSION: 1.14
---
##new [AnaglyphArcRotateCamera](page.php?p=3251)(name, alpha, beta, radius, target, eyeSpace, scene)

The AnaglyphCamera is a camera package that is a more generic (non-Oculus) stereoscopic 3D camera.
There are actually two types of AnaglyphCamera. This one is a [AnaglyphArcRotateCamera](page.php?p=3251) : Stereoscopic 3D with two [ArcRotateCamera](page.php?p=3250).
Tutorial [here](https://github.com/BabylonJS/Babylon.js/wiki/05-Cameras)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The camera name
 | alpha | number | @param alpha
 | beta | number | @param beta
 | radius | number | @param radius
 | target | any | The target of the camera
 | eyeSpace | number | In degrees. Sets the amount of shift between the left eye view and the right eye view. Once you are wearing your 3D glasses, you might want to experiment with this float value.
 | scene | any | The scene which contain the camera
---

##Extends [ArcRotateCamera](page.php?p=3250)


##Methods
