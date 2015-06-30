---
ID_PAGE: 3369
PG_TITLE: TextFileAssetTask
PG_VERSION: 1.14
---

Load task on the given text file
##new [TextFileAssetTask](page.php?p=3369)(name, url)

The [TextFileAssetTask](page.php?p=3369) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name
 | url | string | The url to this text file
---

##Members

###name : string


The name

###url : string


The url to this text file

###onSuccess : (task: IAssetTask) =&gt; void


Function call when the mesh is load successfully

###onError : (task: IAssetTask) =&gt; void


Function call when the mesh isn't load successfully

###isCompleted : boolean


True if is completed, false otherwise.

###text : string


The text



##Methods

###run(scene, onSuccess, onError) &rarr; void
Run the loading

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=3274) | The scene where the text file is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh isn't load successfully
---
