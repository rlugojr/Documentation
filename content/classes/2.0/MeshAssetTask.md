---
ID_PAGE: 5866
PG_TITLE: MeshAssetTask
PG_VERSION: 2.0
---

Load the task on the given [Mesh](page.php?p=5722)
##new [MeshAssetTask](page.php?p=5866)(name, meshesNames, rootUrl, sceneFilename)


The [MeshAssetTask](page.php?p=5866) constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name
 | meshesNames | any | The meshes names
 | rootUrl | string | The root url for this mesh
 | sceneFilename | string | The scene file name
---

##Members

###name : string



The task name


###meshesNames : any



The meshes names to load


###rootUrl : string



The root url for this mesh


###sceneFilename : string



The babylon file name


###loadedMeshes : Array&lt;AbstractMesh&gt;



The loaded meshes


###loadedParticleSystems : Array&lt;ParticleSystem&gt;



The loaded Particule system linked to this mesh


###loadedSkeletons : Array&lt;Skeleton&gt;



The loaded Skeletons linked to this mesh


###onSuccess : (task: IAssetTask) =&gt; void



Function call when the mesh is load successfully


###onError : (task: IAssetTask) =&gt; void



Function call when the mesh isn't load successfully


###isCompleted : boolean



True if is completed, false otherwise.







##Methods

###run(scene, onSuccess, onError) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=5725) | The scene where mesh is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh isn't load successfully
---
