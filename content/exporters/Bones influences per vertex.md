---
ID_PAGE: 25089
PG_TITLE: Bones influences per vertex
---
This is a common error you may have when working with bones:

*"Too many bones influences per vertex: 5. Babylon.js only support 4 bones influences per vertex."*

This is because Babylon.js support a maximum of 4 bones influences per vertex.

Here is how to solve this in 3ds max (By default 3ds max has a limit of 20):

![bones influences parameter](http://www.visualiser.fr/img/max.jpg)

Simply add '4' in the red part of the image and you're done!