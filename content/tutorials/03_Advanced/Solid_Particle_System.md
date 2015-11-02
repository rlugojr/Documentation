#Solid Particle System (SPS)

## Introduction

The SPS is a single updatable mesh. The solid particles are simply separate parts or faces fo this big mesh.  
As it is just a mesh, the SPS has all the same properties than any other BJS mesh : not more, not less. It can be scaled, rotated, translated, enlighted, textured, moved, etc.  

The SPS is also a particle system. It provides some methods to manage the particles.  
However it is behavior agnostic. This means it has no emitter, no particle physics, no particle recycler. You have to implement your own behavior.  

The particles can be built from any BJS existing mesh as a model. Actually, each particle is a copy of some BJS mesh geometry : vertices, indices, uvs.    

The expected usage if this one :  
* First, create your SPS with `new SolidParticleSystem()`.  
* Then, add particles in the SPS from a mesh model with `addShape(model, number)`.  
* Redo this as many times as needed with any model.  
* When done, build the SPS mesh with `buildMesh()`.   

Your SPS is then ready to manage particles. So now :   
* Init all your particles : set their positions, colors, uvs, age, etc with `initParticles()`  
* Call `setParticles()` to update the SPS mesh and to draw it.  
* If you particles have to be animated, define their individual behavior in `updateParticle(particle)` and just call `setParticles()` within the render loop.  


## Basic Usage

### SPS Creation
First you create an empty SPS and you add particles to it with the _addShape(mesh, nb)_ method as many times you need.  
The SPS name will be its underlying mesh name.   


Then you build the mesh.  
Example :
```javascript
var SPS = new SolidParticleSystem("SPS", scene);
var sphere = BABYLON.MeshBuilder.CreateSphere("s", {}, scene);
var poly = BABYLON.MeshBuilder.CreatePolyhedron("p", {type: 2}, scene);
SPS.addShape(sphere, 20);      // 20 spheres
SPS.addShape(poly, 120);       // 120 polyhedrons 
SPS.addShape(sphere, 80);      // 80 other spheres
sphere.dispose();
poly.dispose();

var mesh = SPS.buildMesh();  // finally builds and displays the real mesh
```
Now your SPS is visible as it is just built.  
If just want to create immutable things (not moving, not rotating, not changing their colors, etc) set somewhere in your scene, you would probably stop here.  

However the SPS is ready to get a behavior.  
Once the behavior will be given (or not), you actually display the particles at their current updated positions with current properties with :
```javascript
SPS.billboard = true; // or false by default
SPS.setParticles();
```
_SPS.billboard_ is a boolean (default _false_). If set to _true_, all the particles will face the cam and their _x_ and _y_ rotation values will be ignored. This is rather useful if you display only plane particles.  
You need to call _SPS.setParticles()_ within the _scene.registerBeforeRender()_ function in order to display the SPS in billboard mode.   
Here is an example with plane particles in billboard mode : http://www.babylonjs-playground.com/#WCDZS  
The same but with plane particle rotations and no billboard mode : http://www.babylonjs-playground.com/#WCDZS#1  
The same with solid particles, boxes and tetrahedrons : http://www.babylonjs-playground.com/#WCDZS#2  


### Particle Management

The _setParticles()_ function can be used in the BJS render loop.  
It is mandatory to use this function to update and display the mesh.  

You can give your SPS a behavior by setting some custom functions :  

* **_initParticles()_** : lets you set all the initial particle properties. You must iterate over all the particles by using the _SPS.nbParticles_ property. The usage of this function is not mandatory.
* **_recycleParticle(particle)_** : lets you set a particle to be recycled. It is called per particle. The usage of this function is not mandatory. 
* **_updateParticle(particle)_** : lets you set the particle properties. This function is called per particle by _SPS.setParticles()_. The usage of this function is not mandatory.  
* **_beforeUpdateParticles()_** : lets you make things within the call to _SPS.setParticles()_ just before iterating over all the particles.  The usage of this function is not mandatory.   
* **_afterUpdateParticles()_** : lets you make things within the call to _SPS.setParticles()_  just after the iteration over all the particles is done. The usage of this function is not mandatory.   
* 
So to better understand how it works, here is a pseudo-code schema :
```javascript
var particles: SolidParticles[] = [array of SolidParticle objects];
function setParticles() {
  beforeUpdateParticles();                 // custom function
  for (var p = 0; p < nbParticles; p++) {
    updateParticles(particles[p]);         // custom function
  }
  updateTheWholeMesh();                   // does the WebGL work
  afterUpdateParticles();                 // custom function
}
```
So you could call _recycleParticle(particle)_ in your own _updateParticle(particle)_ function for instance :
```javascript
SPS.updateParticle = function(particle) {
  particle.velocity--;
  if (particle.velocity < 0) {
    particle.alive = false;
    SPS.recycleParticle(particle);    // call to your own recycle function
    }
}
```

The particle properties that can be set are :

* **_position_** : Vector3  default = (0, 0, 0)
* **_rotation_** : Vector3  default = (0, 0, 0)  
* **_quaternion_** : Vector3  default = undefined
* **_velocity_** : Vector3  default = (0, 0, 0)
* **_color_** : Vector4  default = (1, 1, 1, 1)
* **_scale_** : Vector3  default = (1, 1, 1)
* **_uvs_** : Vector(4) default = (0,0, 1,1)
* **_alive_** : boolean  default = true

If you set a particle rotation quaternion, its rotation property will then be ignored.    
If you set your SPS in billboard mode, you should only set a _rotation.z_ value.   

Please note that all positions are expressed in the mesh **local space** and not in the World space.  

You can obviously also create your own properties like _acceleration: Vector3_ or _age_, in _initParticles()_ for instance.  
```javascript
SPS.initParticles = function() {
  for (var p = 0; p < SPS.nbParticles; p++) {
    particles[p].age = Math.random() * 20;
  }
}
```
You may also access to some read-only properties :   

* **_idx_** : particle index
* **_shapeId_** : shape model ID

Actually each time you call the _SPS.addShape()_ method, the related newly created particle set shapeID is returned.
```javascript
var plane = BABYLON.MeshBuilder.CreatePlane("", {}, scene);
var quadsID = SPS.addShape(plane, 20);
```
This is usefull if you want to apply a given behavior to some particle types only.   
<br/>

## SPS Management
You have access to some SPS properties :

* **SPS.particles** : this is the array containing all the particles. You should iterate over this array in _initParticles()_ function for instance.
* **SPS.nbParticles** : this is number of particles in the SPS.
* **SPS.counter** : this is a counter for your own usage. It's not set by any SPS default functions.

Here again, you can add your own properties like _capacity_ or _rate_ if needed.

If you don't need some given features (ex : particle colors), you can disable/enable them at any time (disabling a feature will improve the performance) : 
```javascript
SPS.computeParticleRotation = false;       // prevents from computing particle.rotation
SPS.computeParticleTexture = false;        // prevents from computing particle.uvs
SPS.computeParticleColor = false;          // prevents from computing particle.color
SPS.computeParticleVertex = false;         // prevents from calling the custom updateParticleVertex() function
```
All these properties, except _SPS.computeParticleVertex_, are enabled set to _true_ by default. These affect the _SPS.setParticles()_ process only.   
If these properties are set to _false_, they don't prevent from using the related feature (ie : the particles can still have a color even if _SPS.computeParticleColor_ is set to _false_), they just prevent from updating the value of the particle property on the next _setParticle()_ call.  
Example : if your particles have colors, you can set their colors wihtin the _initParticles()_ call and you can call then once the _setParticles()_ method to set these colors. If you need to animate them later on and these colors don't change, just set then _SPS.computeParticleColor_ to _false_ once before runing the render loop which will call _setParticles()_ each frame.  
If you are familiar with how BJS works, you could compare the SPS and its mesh creation to some classical BJS mesh creation (vertex and indice settings) and the particle management to the World Matrix computation (rotation, scaling, positioning).  

Note you can also use the standard BJS mesh _freezeXXX()_ methods if the SPS mesh is immobile or if the normals aren't needed :   
```javascript
SPS.mesh.freezeWorldMatrix();       // prevents from re-computing the World Matrix each frame
SPS.mesh.freezeNormals();           // prevents from re-computing the normals each frame
```

If you don't need your SPS any longer, you can dispose it to free the memory
```javascript
SPS.dispose();
SPS = null    // tells the GC the reference can be cleaned up also
```

Example :

```javascript
 var cube = BABYLON.MeshBuilder.CreateBox("b", {}, scene);
 // Particle system
  var speed = 2;
  var gravity = -0.01;
  var SPS = new SolidParticleSystem('SPS', scene);
  SPS.addShape(cube, 1000);
  var mesh = SPS.buildMesh();
  mesh.freezeWorldMatrix();
  cube.dispose();


  // define a custom SPS behavior

  SPS.initParticles = function() {
    // just recycle everything
    for (var p = 0; p < this.nbParticles; p++) {
      this.recycleParticle(this.particles[p]);
    }
  };

  SPS.recycleParticle = function(particle) {
    // set particle new velocity, scale and rotation
    particle.position = BABYLON.Vector3.Zero();  
    particle.velocity = (new BABYLON.Vector3(Math.random() - 0.5, Math.random(), Math.random() - 0.5)).scaleInPlace(speed);
    particle.scale = (new BABYLON.Vector3(1, 1, 1)).scaleInPlace(Math.random() * 3 + 1);
    particle.rotation = (new BABYLON.Vector3(Math.random(), Math.random(), Math.random())).scaleInPlace(0.1);
    particle.color = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), Math.random());
  };

  SPS.updateParticle = function(particle) {
  if (particle.position.y < 0) {
      this.recycleParticle(particle);
    }
    particle.velocity.y += gravity;                         // apply gravity to y
    (particle.position).addInPlace(particle.velocity);      // update particle new position
    particle.position.y += speed / 2;
    var sign = (particle.idx % 2 == 0) ? 1 : -1;            // rotation sign and new value
    particle.rotation.z += 0.1 * sign;
    particle.rotation.x += 0.05 * sign;
    particle.rotation.y += 0.008 * sign;
  };

  // Main Program
  // ============

  // init all particle values
  SPS.initParticles();

  // animate the SPS
  scene.registerBeforeRender(function() {
    SPS.setParticles();
  });
  ```
<br/>
<br/>
## Advanced Features
### Create a immutable SPS
You may have to create many similar objects in your scene that won't change afterwards : buildings in the distance, asteroids, scraps, etc. It may thus be useful to use the SPS to set only one mesh in your scene, so one draw call for the rendering.  

You can achieve this by two different ways.  
* You can just build your SPS as explained before and then call just once _setParticles()_, before and outside the render loop, to set your particles where and how you need.  
This method is quite simple. Though, in order to allow you to set the final particle locations, the SPS mesh is built as _updatable_ by default. This means its vertex buffer isn't passed once for all to the GPU, but is cached, waiting for a hypothetical further change.  
So this is a simple solution if you don't have many draw calls to handle for the other really moving or changing meshes of your scene.  
Remember also that, if you need to display your SPS in billboard mode, this is the only way to do it and you'll have to call _setParticles()_ in the render loop also even if the particles don't move.  

* Else you can build your mesh as non _updatable_.  
Actually the SPS contructor expects a parameter _updatable_ what is _true_ by default.  
So, to build a non-updatable mesh, just call explicitly :
```javascript
var SPS = new SolidParticleSystem(name, scene, {updatable: false});
```
As the mesh can't be updated now, _setParticles()_ won't have any effect any longer : don't call it, you'll spare some CPU. Actually the _particles_ array is not even populated !  
No particle management function called **after** _SPS.buildMesh()_ will then have any effect.  
Note that the particles won't move but you can still move, scale or rotate the whole mesh.  

So how to set the initial particle positions, colors, uvs, scales, and so on if the mesh can't be updated ?  

To achieve this, you need to change the mesh at construction time, when adding the shapes.  
You will have to define your own function to set these particle (what don't exist at this time) properties by modifying the way the shapes are added.  
Actually, you can pass to `SPS.addShape()` an exra parameter which is your particle setting function.  
This parameter is an object with the property `positionFunction` to what you will assign your custom function.   
```javascript
SPS.addShape(mesh, nb, {positionFunction: myCustomFunction});
```
Your own function will be called, for a given shape, as many times as the wanted number of particles for this shape. It will be passed two parameters : a _particle_ object and its current position in the total number wanted for this shape.  
So your function must have this kind of signature : 
```javascript
var myBuilder = function(particle, i, s) {
  // particle is the current copy of the shape, the i-th one in the SPS and the s-th one in its shape
};
```
This _particle_ object has the following properties : 

property|type|default
--------|----|-------
position|Vector3|(0,0,0)
rotation|Vector3|(0,0,0)
quaternion|Quaternion|null, if _quaternion_ is set, _rotation_ is ignored
scale|Vector3|(1,1,1)
color|Color4|null
uvs|Vector4|(0,0,1,1)

The expected usage is thus for instance:
```javascript
var myBuilder = function(particle, i, s) {
  // particle is the current particle
  // i is its global index in the SPS
  // s is its index in its shape, so here from 0 to 149
  copy.rotation.y = s / 150;
  copy.position.x = s - 150;
  copy.uvs = new BABYLON.Vector4(0, 0, 0.33, 0.33); // first image from an atlas
  copy.scale.y = Math.random() + 1;
}
var box = BABYLON.MeshBuilder.CreateBox('b', {}, scene);
var SPS = new BABYLON.SolidParticleSystem('SPS', scene);
SPS.addShape(box, 150, {positionFunction: myBuilder)}; // myBuilder will be called for each of the 150 boxes
var mesh = SPS.buildMesh(false);                       // the mest is not updatable
```
In this former example, each box particle will have its own rotation, position, scale and uvs set once for all at construction time. As the mesh is not updatable, the particles are then not manageable with _setParticles()_.  
You've got here a real immutable mesh. You can still translate it, rotate it, scale it globally as any other mesh until you freeze its World Matrix.  

Note that this feature (modifying the mesh at construction time) is not directly related to the mesh _updatable_ parameter. This means you can use it even with a default _updatable_ mesh although it is easier to set the particles the classical war with _setParticles()_.  

**Going further in immutable SPS**  
You've just seen how to modify for ever the SPS mesh at creation time in order to set the particles to your own initial positions, rotations, colors, etc by using the _positionFunction_ property with your custom function.  
You can also modify the shape of each particle in the SPS mesh at creation time the same way.  
You will then to use the _vertexPosition_ property, just like you used the _positionFunction_ property, by defining your own function to set each vertex of each particle from its original value.  
Your function will be then be called once by _SPS.buildMesh()_ for each vertex of each particle object as defined in the former part.
```javascript
var myVertexFunction = function(particle, vertex, i) {
  // particle : the current particle
  // vertex : the current vertex, a Vector3
  // i : index of the vertex in the particle shape
  vertex.x *= Math.random() + 1;
};
SPS.addShape(box, 150, {vertexFunction: myVertexFunction}); // the 150 boxes will have their vertices moved randomly
SPS.buildMesh(false);
```
Of course you can use the both properties together :
```javascript
SPS.addShape(box, 150, {vertexFunction: myVertexFunction, positionFunction: myPositionFunction});
```
Example : http://www.babylonjs-playground.com/#2FPT1A#2  

<br/>
<br/>

### Start and End indexes for setParticles()
If you manage a big SPS with dozens of thousands particles, you may want, for performance reasons, not to compute all the new status of all the particles each frame. _setParticles()_ expects three optional parameters to help you to choose what to compute or not : _start_, _end_, _update_  

parameter|definition|default value
---------|----------|-------------
start|_(number)_ the index from where to start to iterate in the _particles_ array|0
stop|_(number)_ the index (included) where to stop to iterate in the _particles_ array|nbParticles - 1
update|_(boolean)_ to force the SPS mesh vertex buffer to be updated|true

Example : you may want to update your 10K particle mesh only every three frames  
* frame 1 : _setParticles(0, 3300, false)_ computes everything for particles from 0 to 3300 and doesn't update the mesh.
* frame 2 : _setParticles(3301, 6600, false)_ computes everything for particles from 3301 to 6600 and doesn't update the mesh.
* frame 3 : _setParticles(6601, 9999, true)_ computes everything for particles from 6601 to 9999 and finally updates the mesh.  

If you pass a _end_ value greater than _nbParticles_ - 1, the iteration will stop anyway at _nbParticles_ - 1 to prevent you from trying to access to undefined elements.

### _colors and uvs usages_
_soon_

<br/>
### Update each particle shape
* _SPS.updateParticleVertex() usage_ :  
It happens before particle scaling, rotation and translation and it allows to update the vertex coordinates of each particle.   
This function will be called for each vertex of each particle and it will be passed the current particlen the current vertex and its current index in the particle shape.
```javascript
SPS.computeParticleVertex = true; // false by default for performance reason
SPS.updateParticleVertex = function(particle, vertex, v) {
  // particle : the current particle object
  // vertex : the current vertex, a Vector3
  // the index of the current vertex in the particle shape
  // example :
  if (particle.shapeID == 1) {
    vertex.x *= Math.random() + 1;
    vertex.y *= Math.random() + 1;
    vertex.z *= Math.random() + 1;
}
```
Note well that this vertex update is not stored (the particle shape isn't modified) but just computed in the next call to _setParticles()_. So there is no value accumulation : the vertex coordinates are always the initial ones when entering this function.  
Note also that the shape reference for each particle is the original shape of the mesh model you passed in _addShape()_, even if you had passed also a custom _vertexFunction_ (see in the part : "Going furhter in immutable SPS").  
The good news is that the very same function can be use for _SPS.updateParticleVertex_ and for the custom _vertexFunction_ expected by _addShape()_.  
So to better understand how it works, here is another global pseudo-code schema :
```javascript
var particles: SolidParticles[] = [array of SolidParticle objects];
function setParticles() {
  beforeUpdateParticles();                 // your custom function
  for (var p = 0; p < nbParticles; p++) {
    var particle = particles[p];
    updateParticles(particle);             // your custom position function
    for(var v = 0; particle.vertices.length; v++) {
      var vertex = particle.vertices[v];
      updateParticleVertex(particle, vertex, v);   // your ustom vertex function
      computeAllTheVertexStuff();
    }
  }
  updateTheWholeMesh();                   // does the WebGL work
  afterUpdateParticles();                 // your ustom function
}
```
Example : http://www.babylonjs-playground.com/#1X7SUN#5  

###Garbage Collector Concerns  
In Javascript, the Garbage Collector is usually your friend : it takes care about cleaning up all the not any longer needed variables you could have declared and thus it sets the memory free.  
However, it can sometimes become an awkward friend because it can start its cleaning just when you want to display a very smooth animation, so it takes the CPU for itself and leaves to you only those nice lags on the screen.  
So the best to do to avoid the GC unpredictable behavior is to keep as low as possible the creation of temporary objects or variables in the render loop.  
As you know now, _updateParticle()_ and _updateParticleVertex()_ are called each frame for each particle or each particle vertex. 
So imagine that you have a SPS with 30 000 particles. What if you code something like that to simulate some particle acceleration :  
```javascript
SPS.updateParticle = function(particle) {
  var velStep = 0.05;
  particle.velocity += velStep;
  // ...
}
```
The _velStep_ temporary variable will be created 30 000 times and then be requested then for collection by the GC !  
So it is better to declare once _velStep_ outside the _udpateParticle()_ method.  
The SPS provides to you a way to declare once all your variable needed for it at its own level instead of creating global variables.  
Just use the SPS _vars_ property :
```javascript
SPS.vars.velStep = 0.05;
SPS.updateParticle = function(particle) {
  particle.velocity += SPS.vars.velStep;
  // ...
}
```
This will allow you to keep these variables in the SPS object only (and as long as the SPS will exist) and to clean them up gracefully when you will dispose it.  
```javascript
SPS.dispose();  // cleans explicitly all your SPS.vars !
```
A good JS practice for the compiler is to **never** change the variable type once it has been set :
```javascript
SPS.vars.myFloat = 0.01;   // just keep setting float values to myFloat afterwards
SPS.vars.myInt = 5;        // just keep setting integer values to myInt afterwards
SPS.vars.myString = "foo"; // just keep setting string values to myString afterwards
```


###Rebuild the mesh
if the mesh has been by modified with _setParticles()_ ...


_(edition in progress + add many PG example everywhere)_
