---
ID_PAGE: 24576
PG_TITLE: MeshAssetTask
PG_VERSION: 1.14
---

Load the task on the given [Mesh](/classes/Mesh)
##new [MeshAssetTask](/classes/MeshAssetTask)(name, meshesNames, rootUrl, sceneFilename)

The [MeshAssetTask](/classes/MeshAssetTask) constructor
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

###loadedMeshes : [AbstractMesh](/classes/AbstractMesh)[]


The loaded meshes

###loadedParticleSystems : [ParticleSystem](/classes/ParticleSystem)[]


The loaded Particule system linked to this mesh

###loadedSkeletons : [Skeleton](/classes/Skeleton)[]


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
 | scene | [Scene](/classes/Scene) | The scene where mesh is.
 | onSuccess | () =&gt; void | Function call when the mesh is load successfully
 | onError | () =&gt; void | Function call when the mesh isn't load successfully
---
