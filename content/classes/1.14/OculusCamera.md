---
ID_PAGE: 3258
PG_TITLE: OculusCamera
PG_VERSION: 1.14
---
##new [OculusCamera](page.php?p=3258)(name, position, scene)

Create a new [OculusCamera](page.php?p=3258)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the camera
 | position | [Vector3](page.php?p=3327) | The position of the camera
 | scene | [Scene](page.php?p=3274) | The scene where add the camera
---

##Extends [FreeCamera](page.php?p=3254)


##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera controls / display to an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | Element where attach the camera
optional | noPreventDefault | boolean | 
---

###detachControl(element) &rarr; void
Detach the controls / display of the camera from the element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from where detach the camera
---
