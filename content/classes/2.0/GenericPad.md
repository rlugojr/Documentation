---
ID_PAGE: 5877
PG_TITLE: GenericPad
PG_VERSION: 2.0
---
##new [GenericPad](page.php?p=5877)(id, index, gamepad)


Builds a [Gamepad](page.php?p=5876) object


####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The gamepad id
 | index | number | The gamepad index
 | gamepad | any | The object that holds the gamepad informations
---

##Extends [Gamepad](page.php?p=5876)
##Members

###id : string



The gamepad id


###index : number



The gamepad index


###gamepad : any



The gamepad object access this way : gamepad.buttons[]







##Methods

###onbuttondown(callback) &rarr; void
Binds an action to the button pressed, recognized by the button's index in the array



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: number) =&gt; void | The function to execute
---

###onbuttonup(callback) &rarr; void
Binds an action to the button released, recognized by the button's index in the array



####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: number) =&gt; void | The function to execute
---

###update() &rarr; void

