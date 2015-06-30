---
ID_PAGE: 3375
PG_TITLE: FilesInput
PG_VERSION: 1.14
---
##new [FilesInput](page.php?p=3375)(p_engine, p_scene, p_canvas, p_sceneLoadedCallback, p_progressCallback, p_additionnalRenderLoopLogicCallback, p_textureLoadingCallback, p_startingProcessingFilesCallback)

####Parameters
 | Name | Type | Description
---|---|---|---
 | p_engine | [Engine](page.php?p=3247) | @param p_engine
 | p_scene | [Scene](page.php?p=3274) | @param p_scene
 | p_canvas | HTMLCanvasElement | @param p_canvas
 | p_sceneLoadedCallback | any | @param p_sceneLoadedCallback
 | p_progressCallback | any | @param p_progressCallback
 | p_additionnalRenderLoopLogicCallback | any | @param p_additionnalRenderLoopLogicCallback
 | p_textureLoadingCallback | any | @param p_textureLoadingCallback
 | p_startingProcessingFilesCallback | any | @param p_startingProcessingFilesCallback
---

##Members

###static FilesTextures : any[]


The array that holds the png textures to load

###static FilesToLoad : any[]


The array that holds the vnd.ms-dds files to load



##Methods

###monitorElementForDragNDrop(p_elementToMonitor) &rarr; void
Sets an HTML element that will listen to drag'n'drop events

####Parameters
 | Name | Type | Description
---|---|---|---
 | p_elementToMonitor | HTMLElement | It could be the rendering canvas or whatever element on the page
---
