---
ID_PAGE: 6677
PG_TITLE: ActionEvent
PG_VERSION: 2.1
TAGS:
    - Action
---

 [ActionEvent](page.php?p=6677) is the event beint sent when an action is triggered.
##new [ActionEvent](page.php?p=6677)(source, pointerX, pointerY, meshUnderPointer, sourceEvent)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](page.php?p=6657) | The mesh that triggered the action.
 | pointerX | number | the X mouse cursor position at the time of the event
 | pointerY | number | the Y mouse cursor position at the time of the event
 | meshUnderPointer | [AbstractMesh](page.php?p=6657) | The mesh that is currently pointed at (can be null)
optional | sourceEvent | any | the original (browser) event that triggered the [ActionEvent](page.php?p=6677)
---

##Members

###source : [AbstractMesh](page.php?p=6657)




The source of the action event



###pointerX : number




The pointer X position



###pointerY : number




The pointer Y position



###meshUnderPointer : [AbstractMesh](page.php?p=6657)




The mesh under the pointer position



###sourceEvent : any




The source of the event











##Methods

###static CreateNew(source, evt) &rarr; [ActionEvent](page.php?p=6677)
Helper function to auto-create an [ActionEvent](page.php?p=6677) from a source mesh.

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [AbstractMesh](page.php?p=6657) | the source mesh that triggered the event
optional | evt | Event | {Event} The original (browser) event
---

###static CreateNewFromScene(scene, evt) &rarr; [ActionEvent](page.php?p=6677)
Helper function to auto-create an [ActionEvent](page.php?p=6677) from a scene. If triggered by a mesh use [ActionEvent](page.php?p=6677).CreateNew

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=6662) | the scene where the event occurred
 | evt | Event | {Event} The original (browser) event
---
