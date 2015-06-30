---
ID_PAGE: 3368
PG_TITLE: MeshAssetTask
PG_VERSION: 1.14
---

Load the task on the given [Mesh](page.php?p=3271)
##new [MeshAssetTask](page.php?p=3368)(name, meshesNames, rootUrl, sceneFilename)

The [MeshAssetTask](page.php?p=3368) constructor
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

###loadedMeshes : [AbstractMesh](page.php?p=3269)[]


The loaded meshes

###loadedParticleSystems : [ParticleSystem](page.php?p=3342)[]


The loaded Particule system linked to this mesh

###loadedSkeletons : [Skeleton](page.php?p=3296)[]


The loaded Skeletons linked to this mesh

###onSuccess : (task: IAssetTask) =&gt; void


Function call when the mesh is load successfully

###onError : (task: IAssetTask) =&gt; void


Function call when the mesh isn't load successfully

###isCompleted : boolean


True if is completed, false otherwise.



##Methods

###run(scene, onSuccess, onError) &rarr; void
Run the loading

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=3274) | The scene where mesh is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh isn't load successfully
---
