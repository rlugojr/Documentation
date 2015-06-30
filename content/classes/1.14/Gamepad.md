---
ID_PAGE: 3378
PG_TITLE: Gamepad
PG_VERSION: 1.14
---
##new [Gamepad](page.php?p=3378)(id, index, browserGamepad)

Builds a [Gamepad](page.php?p=3378) object
####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The gamepad id
 | index | number | The gamepad index
 | browserGamepad | any | The object that holds the gamepad informations
---

##Members

###id : string


The gamepad id

###index : number


The gamepad index

###browserGamepad : any


The gamepad browser, sets the sticks axes

###leftStick : [StickValues](page.php?p=3377)


The left stick values

###rightStick : [StickValues](page.php?p=3377)


The right stick values



##Methods

###onleftstickchanged(callback) &rarr; void
Binds an action to the left stick

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](page.php?p=3377)) =&gt; void | The action to bind
---

###onrightstickchanged(callback) &rarr; void
Binds an action to the right stick

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](page.php?p=3377)) =&gt; void | The action to bind
---

###update() &rarr; void
Updates the values of the sticks with the values of the gamepad's sticks

