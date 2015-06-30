---
ID_PAGE: 3261
PG_TITLE: OculusGamepadCamera
PG_VERSION: 1.14
---
##new [OculusGamepadCamera](page.php?p=3261)(name, position, scene)

Create a new [OculusGamepadCamera](page.php?p=3261)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the [OculusGamepadCamera](page.php?p=3261)
 | position | [Vector3](page.php?p=3327) | Position of the [OculusGamepadCamera](page.php?p=3261)
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the [OculusGamepadCamera](page.php?p=3261)
---

##Extends [FreeCamera](page.php?p=3254)
##Members

###angularSensibility : number


Angular sensibility of the camera

###moveSensibility : number


Move sensibility of the camera



##Methods

###attachControl(element, noPreventDefault) &rarr; void
Attach the camera controls and display to an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element where attach the camera controls and display
optional | noPreventDefault | boolean | Prevent the default
---

###detachControl(element) &rarr; void
Detach the camera controls and display from an element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | The element from which detach the camera controls and display
---

###dispose() &rarr; void
Dispose the camera

