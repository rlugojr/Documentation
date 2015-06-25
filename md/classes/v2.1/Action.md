---
Tags: 
    - Action
    - Mesh
---
##new [Action](page.php?p=25151)(triggerOptions, condition)




Actions are a simple way to add interactions in your scenes. An action is launched when its trigger is fired.
See more [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions)






####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | Options of the trigger
optional | condition | [Condition](page.php?p=25167) | [Condition](page.php?p=25167) to trigger the action
---

##Members

###triggerOptions : any





The trigger options




###trigger : number





Number of the trigger















##Methods

###getTriggerParameter() → any
Get the trigger parameter








###execute(evt) → void
Execute the trigger







####Parameters
 | Name | Type | Description
---|---|---|---
 | evt | [ActionEvent](page.php?p=25165) | An event to trigger
---

###then(action) → [Action](page.php?p=25151)

####Parameters
 | Name | Type | Description
---|---|---|---
 | action | [Action](page.php?p=25151) | The action to do
---