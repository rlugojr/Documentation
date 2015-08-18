---
ID_PAGE: 25318
PG_TITLE: GenericPad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
##Description

class [GenericPad](/classes/2.2-alpha/GenericPad) extends [Gamepad](/classes/2.2-alpha/Gamepad)



##Constructor

##new [GenericPad](/classes/2.2-alpha/GenericPad)(id, index, gamepad)

Builds a [Gamepad](/classes/2.2-alpha/Gamepad) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | index | number | 
 | gamepad | any | 

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
 | callback | (buttonPressed: number) =&gt; void | 

###onbuttonup(callback) &rarr; void

Binds an action to the button released, recognized by the button's index in the array

####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: number) =&gt; void | 

###update() &rarr; void


