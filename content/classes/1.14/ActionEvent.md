---
ID_PAGE: 3287
PG_TITLE: ActionEvent
PG_VERSION: 1.14
---
##new [ActionEvent](page.php?p=3287)(source, pointerX, pointerY, meshUnderPointer, sourceEvent)

See more about Actions [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions)
####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](page.php?p=3269) | Source of the action event
 | pointerX | number | The pointer X
 | pointerY | number | The pointer Y
 | meshUnderPointer | [AbstractMesh](page.php?p=3269) | The mesh under the pointer
optional | sourceEvent | any | The source event
---

##Members

###source : [AbstractMesh](page.php?p=3269)


The source of the action event

###pointerX : number


The pointer X position

###pointerY : number


The pointer Y position

###meshUnderPointer : [AbstractMesh](page.php?p=3269)


The mesh under the pointer position

###sourceEvent : any


The source of the event



##Methods

###static CreateNew(source) &rarr; [ActionEvent](page.php?p=3287)
Create a new action event

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](page.php?p=3269) | Source to the action event
---

###static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](page.php?p=3287)
Create a new action from the specified scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=3274) | The scene to create the new action
 | evt | Event | The event to action event
---
