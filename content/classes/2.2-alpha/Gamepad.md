---
ID_PAGE: 25317
PG_TITLE: Gamepad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
##Description

class [Gamepad](/classes/2.2-alpha/Gamepad)



##Constructor

##new [Gamepad](/classes/2.2-alpha/Gamepad)(id, index, browserGamepad)

Builds a [Gamepad](/classes/2.2-alpha/Gamepad) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | index | number | 
 | browserGamepad | any | 

##Members

###id : string

The gamepad id

###index : number

The gamepad index

###browserGamepad : any

The gamepad browser, sets the sticks axes

###leftStick : [StickValues](/classes/2.2-alpha/StickValues)

The left stick values

###rightStick : [StickValues](/classes/2.2-alpha/StickValues)

The right stick values

##Methods

###onleftstickchanged(callback) &rarr; void

Binds an action to the left stick

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/2.2-alpha/StickValues)) =&gt; void | 

###onrightstickchanged(callback) &rarr; void

Binds an action to the right stick

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/2.2-alpha/StickValues)) =&gt; void | 

###update() &rarr; void


