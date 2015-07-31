---
ID_PAGE: 6817
PG_TITLE: Sprite
PG_VERSION: 2.1
TAGS:
    - Sprite
---
##new [Sprite](page.php?p=6817)(name, manager)



Create a new [Sprite](page.php?p=6817).
A tutorial about sprites can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/08-Sprites)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite
 | manager | [SpriteManager](page.php?p=6818) | The sprite manager
---

##Members

###name : string




The sprite name



###position : [Vector3](page.php?p=6751)




The sprite position



###color : [Color4](page.php?p=6749)




The sprite color



###width : number


###height : number


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



###animations : [Animation](page.php?p=6684)[]




Animations array









###size : number




The sprite size





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

