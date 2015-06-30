---
ID_PAGE: 6824
PG_TITLE: AssetsManager
PG_VERSION: 2.1
---

This class can be used to import meshes into a scene or load text and binary files.
##new [AssetsManager](page.php?p=6824)(scene)



The [AssetsManager](page.php?p=6824) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=6662) | The current scene
---

##Members

###onFinish : (tasks: IAssetTask[]) =&gt; void




The callback



###onTaskSuccess : (task: IAssetTask) =&gt; void




The callback



###onTaskError : (task: IAssetTask) =&gt; void




Function call when the element



###useDefaultLoadingScreen : boolean




Default value is true, you can set false if you don't want to see the loading screen











##Methods

###addMeshTask(taskName, meshesNames, rootUrl, sceneFilename) &rarr; IAssetTask
Add and return the new [MeshAssetTask](page.php?p=6819)





####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | meshesNames | any | The meshes name
 | rootUrl | string | The root url of this mesh
 | sceneFilename | string | The scene file name
---

###addTextFileTask(taskName, url) &rarr; IAssetTask
Add and return the new [TextFileAssetTask](page.php?p=6820)





####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this text file
---

###addBinaryFileTask(taskName, url) &rarr; IAssetTask
Add and return the new [BinaryFileAssetTask](page.php?p=6821)





####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this binary file
---

###addImageTask(taskName, url) &rarr; IAssetTask
Add and return the new [TextFileAssetTask](page.php?p=6820)





####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this image
---

###addTextureTask(taskName, url, noMipmap, invertY, samplingMode) &rarr; IAssetTask
Add and return the new [TextFileAssetTask](page.php?p=6820)





####Parameters
 | Name | Type | Description
---|---|---|---
 | taskName | string | The task name
 | url | string | The url of this texture
optional | noMipmap | boolean | Set true if you want to activate Mipmap, false otherwise.
optional | invertY | boolean | Invert the y axis
optional | samplingMode | number | The sampling mode
---

###reset() &rarr; [AssetsManager](page.php?p=6824)
Reset all tasks






###load() &rarr; [AssetsManager](page.php?p=6824)

