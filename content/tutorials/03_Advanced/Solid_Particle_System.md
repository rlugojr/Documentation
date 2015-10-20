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
* **_next_** : the next particle in the global _particles_ array
* **_previous_** : the previous particle in the global _particles_ array

Actually each time you call the _SPS.addShape()_ method, the related newly created particle set shapeID is returned.
```javascript
var plane = BABYLON.MeshBuilder.CreatePlane("", {}, scene);
var quadsID = SPS.addShape(plane, 20);
```
This is usefull if you want to apply a given behavior to some particle types only.   
As you can note, all the particles are double-linked to their previous and next neighbours.  

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
  
## Advanced Features
### Create a immutable SPS
You may have to create many similar objects in your scene that won't change afterwards : buildings in the distance, asteroids ,scraps, etc. It may thus be useful to use the SPS to set only one mesh in your scene, so one draw call for the rendering.  

You can achieve this by two different ways.  
* You can just build your SPS as explained before and then call just once _setParticles()_, before and outside the render loop, to set your particles where and how you need.  
This method is quite simple. Though, in order to allow you to set the final particle locations, the SPS mesh is built as _updatable_ by default. This means its vertex buffer isn't passed once for all to the GPU, but is cached, waiting for a hypothetical further change. So this is a simple if you don't have many draw calls to handle for the other really moving or changing meshes of your scene.  

* Else you can build your mesh as non _updatable_.  
Actually the `SPS.buildMesh()` expects a parameter _updatable_ what is _true_ by default.  
So, to build a non-updatable mesh, just call :
```javascript
var mesh = SPS.buildMesh(false);
```
As the mesh can't be updated now, _setParticles()_ won't have any effect any longer (don't call them, you'll spare CPU).  

So how to set the initial particle positions, colors, uvs, scales, and so on if the mesh can't be updated ?  

To achieve this, you need to change the mesh at construction time, when adding the shapes.  
You will have to define your own function to set these particle (what don't exist at this time) properties by modifying the way the shapes are added.  
Actually, you can pass to `SPS.addShape()` an exra parameter which is your particle setting function. At this moment, as the particles don't exist yet, we call this particle object a _copy_ because it's just a copy of the model shape.  

Your own function will be called, for a given shape, as many times as the wanted number of particles for this shape. It will be passed two parameters : a _copy_ object and its current number in the total number wanted.  
So your function must have this king of signature : 
```javascript
var myBuilder = function(copy, i) {
  // copy is the current copy of the shape, the i-th one
};
```
The _copy_ object has the following properties : 

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
var myBuilder = function(copy, i) {
  copy.rotation.y = i / 150;
  copy.position.x = i - 150;
  copy.uvs = new BABYLON.Vector4(0, 0, 0.33, 0.33); // first image from an atlas
  copy.scale.y = Math.random() + 1;
}
var box = BABYLON.MeshBuilder.CreateBox('b', {}, scene);
var SPS = new BABYLON.SolidParticleSystem('SPS', scene);
SPS.addShape(box, 150, myBuilder); // myBuilder will be called for each of the 150 copies (boxes)
var mesh = SPS.buildMesh(false);   // the mest is not updatable
```
In this former example, each box particle will have its own rotation, position, scale and uvs set once for all at construction time. As the mesh is not updatable, the particles are then not manageable with _setParticles()_.  
You've got here a real immutable mesh. You can still translate it, rotate it, scale it globally as any other mesh until you freeze its World Matrix.  

Note that this feature (modifying the mesh at construction time) is not directly related to the mesh _updatable_ parameter. This means you can use it even with a default _updatable_ mesh although it is easier to set the particles the classical war with _setParticles()_.  



* _start, end indexes + update boolean in setParticles()_
* _colors and uvs usages_
* _computeParticleVertex() usage_

_(edition in progress + add many PG example everywhere)_
