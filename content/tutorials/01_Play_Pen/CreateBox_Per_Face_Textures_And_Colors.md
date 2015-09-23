##CreateBox per face textures and colors

In this tutorial, you will learn how to use the _faceUV_ and _faceColors_ parameters of the _CreateBox_ method in order to set a different texture or color per box face.


###Textures


Imagine that you have such an image file : http://jerome.bousquie.fr/BJS/images/spriteAtlas.png

We call it, in video games development,  a sprite atlas because we have 24 different spite images in a single file : 4 rows of 6 sprites, each having the same size.

Well, I'm about to talk about atlases here, but remember it's only an example to illustrate the per-texture feature. It's not mandatory to use an atlas, you can just use a regular texture file and choose what part of it to display on each (or only some) box face.


Let's start...

We create a rectangular box by using the _options_ parameters line 43 and 50 : http://www.babylonjs-playground.com/#1V3CAT

Then we give to its material the texture as usual : http://www.babylonjs-playground.com/#1V3CAT#1

Nothing new until now, right ?



Let's go on.

Please have a look from line 27 :

Line 30, we define a new array called _faceUV_, sized 6 because our box has 6 faces. This array will content Vector4 elements.

Each _Vector4(x, y, z, w)_ will be defined this way :  

x = Utop  
y = Vtop
z = Ubottom
w = Vbottom

all in the range [0, 1]


as _Utop_, _Vtop_ are the 2D coordinates of the top left point where to start to crop the texture file and _Ubottom_, _Vbottom_ the bottom right ones where to stop to crop.

Not clear ?

Let's go back to our sprite atlas : we've got 4 rows of 6 sprites.

So if we iterate i from 0 to 5 (so 6 times as 6 box faces) and if we assign
```javascript
Utop = i / 6
Vtop = 0
Ubottom = (i+1) / 6
Vbottom = 1 / 4
```

to each array element, we actually set a different sprite from the the first horizontal row to each box face in the _faceUV_array

code :
```javascript
  var hSpriteNb =  6;  // 6 sprites per raw
  var vSpriteNb =  4;  // 4 sprite raws

  var faceUV = new Array(6);

  for (var i = 0; i < 6; i++) {
    faceUV[i] = new BABYLON.Vector4(i/hSpriteNb, 0, (i+1)/hSpriteNb, 1 / vSpriteNb);
  }
```

To pass then this array to the _CreateBox_ method, just add a parameter called _faceUV_, valued with this array, to the options :
```javascript
  var options = {
    width: 10,
    height: 3,
    depth: 5,
    faceUV: faceUV
  };

  var box = BABYLON.Mesh.CreateBox('box', options, scene);
  box.material = mat;
```

Here's the result : http://www.babylonjs-playground.com/#1V3CAT#2

Quite easy, isn't it ?




Now look at the red haired character on the top face of the box. He has his head on the left, right ?

What if I want to flip only this face ?

This face is the box face 4 (just make attempts to discover the box geometry). I just then need to swap _y_ and _w_ coordinate values :
```javascript
  var f = 4;
  var temp = faceUV[f].y;
  faceUV[f].y = faceUV[f].w;
  faceUV[f].w = temp;
```

Now, his head in on the right : http://www.babylonjs-playground.com/#1V3CAT#3



Obviously, you're not obliged to set every box face.

Imagine you want to set only the face 4.

Forget about the _for{}_ loop, just initialize your _faceUV_ array and set only _faceUV[4]_ :
```javascript
  var faceUV = new Array(6);
  faceUV[4] = new BABYLON.Vector4(0, 0, 1 / hSpriteNb, 1 / vSpriteNb);
```

Two lines of code only and that's all : http://www.babylonjs-playground.com/#1V3CAT#4




###Colors


Let's go back to our initial rectangular box : http://www.babylonjs-playground.com/#1V3CAT

We are about to apply the same principle here not with textures, but with colors.

Let's define a 6 element array _faceColors_ (as for 6 box faces) and just set the color of the faces we want with _Colors4_
```javascript
  var faceColors = new Array(6);

  faceColors[4] = new BABYLON.Color4(1,0,0,1);   // red top
  faceColors[1] = new BABYLON.Color4(0,1,0,1);   // green front
```
then pass this array to the _CreateBox_ method with the new faceColors parameter of _options_
```javascript
  var options = {
    width: 10,
    height: 3,
    depth: 5,
    faceColors : faceColors
  };

  var box = BABYLON.Mesh.CreateBox('box', options, scene);
```

simple, isn't it ?  http://www.babylonjs-playground.com/#1V3CAT#5



Colors are BJS vertex color4, this mean you can give an alpha if you enable the _hasVertexAlpha_ mesh property : http://www.babylonjs-playground.com/#1V3CAT#6



You can even combine the vertex colors with a colored material, blue here :  http://www.babylonjs-playground.com/#1V3CAT#7



And finally you can of course mix the face colors with the per-face texture feature (and the material color) :
```javascript
  var options = {
    width: 10,
    height: 3,
    depth: 5,
    faceUV: faceUV,
    faceColors : faceColors
  };
```

Enjoy : http://www.babylonjs-playground.com/#1V3CAT#8



No need submaterials or submeshes for so simple things !

