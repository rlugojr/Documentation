---
ID_PAGE: 5864
PG_TITLE: Sprite
PG_VERSION: 2.0
---
##new [Sprite](page.php?p=5864)(name, manager)


Create a new [Sprite](page.php?p=5864).
A tutorial about sprites can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/08-Sprites)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite
 | manager | [SpriteManager](page.php?p=5865) | The sprite manager
---

##Members

###name : string



The sprite name


###position : [Vector3](page.php?p=5808)



The sprite position


###color : [Color4](page.php?p=5806)



The sprite color


###size : number



The sprite size


###angle : number



The sprite angle


###cellIndex : number



The index of the cell


###invertU : number



True if invert in U axis ; False otherwise


###invertV : number



True if invert in V axis ; False otherwise


###disposeWhenFinishedAnimating : boolean



True if dispose when finished animating ; False otherwise


###animations : [Animation](page.php?p=5747)[]



Animations array







##Methods

###playAnimation(from, to, loop, delay) &rarr; void
Function to play the sprite animation



####Parameters
 | Name | Type | Description
---|---|---|---
 | from | number | Number of the first frame
 | to | number | Number of the last frame
 | loop | boolean | True : loop ; False : don't loop
 | delay | number | Delay between each frame
---

###stopAnimation() &rarr; void
Function to stop the sprite animation




###dispose() &rarr; void
