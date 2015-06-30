---
ID_PAGE: 5714
PG_TITLE: OculusGamepadCamera
PG_VERSION: 2.0
---
##new [OculusGamepadCamera](page.php?p=5714)(name, position, scene)


Create a new [OculusGamepadCamera](page.php?p=5714)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the [OculusGamepadCamera](page.php?p=5714)
 | position | [Vector3](page.php?p=5808) | Position of the [OculusGamepadCamera](page.php?p=5714)
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) which contain the [OculusGamepadCamera](page.php?p=5714)
---

##Extends [FreeCamera](page.php?p=5707)
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

