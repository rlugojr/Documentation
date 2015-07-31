---
ID_PAGE: 6668
PG_TITLE: PlayAnimationAction
PG_VERSION: 2.1
TAGS:
    - Action
---
##new [PlayAnimationAction](page.php?p=6668)(triggerOptions, target, from, to, loop, condition)



Launch an animation on a specified target




####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | target | any | The specified target
 | from | number | The starting frame index
 | to | number | The ending frame index
optional | loop | boolean | True to loop the animation
optional | condition | [Condition](page.php?p=6679) | The condition to play animation
---

##Extends
 [Action](page.php?p=6663)
##Members

###from : number




The starting frame index



###to : number




The ending frame index



###loop : boolean




 [Animation](page.php?p=6684) loop or not











##Methods

###execute() &rarr; void

