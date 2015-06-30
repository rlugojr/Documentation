---
ID_PAGE: 5868
PG_TITLE: BinaryFileAssetTask
PG_VERSION: 2.0
---

Load task on the given binary file
##new [BinaryFileAssetTask](page.php?p=5868)(name, url)


The [BinaryFileAssetTask](page.php?p=5868)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name
 | url | string | The url for this binary file
---

##Members

###name : string



The name


###url : string



The url for this binary file


###onSuccess : (task: IAssetTask) =&gt; void



Function call when the mesh is load successfully


###onError : (task: IAssetTask) =&gt; void



Function call when the mesh isn't load successfully


###isCompleted : boolean



True if is completed, false otherwise.


###data : ArrayBuffer



The data







##Methods

###run(scene, onSuccess, onError) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=5725) | The scene where this binary file is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh is load successfully
---
