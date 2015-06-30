---
ID_PAGE: 3260
PG_TITLE: WebVRCamera
PG_VERSION: 1.14
---
##new [WebVRCamera](page.php?p=3260)(name, position, scene)

Create a new [WebVRCamera](page.php?p=3260)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the camera
 | position | [Vector3](page.php?p=3327) | Begin position of the camera
 | scene | [Scene](page.php?p=3274) | The scene which contain the camera
---

##Extends [OculusCamera](page.php?p=3258)


##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera controls and display to an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element which controls and display the camera
optional | noPreventDefault | boolean | @param noPreventDefault
---

###detachControl(element) &rarr; void
Detach the camera controls and display from an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from where detach the controls and display of the camera
---
