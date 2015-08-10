---
ID_PAGE: 24488
PG_TITLE: PlayAnimationAction
PG_VERSION: 1.14
---
##new [PlayAnimationAction](/classes/PlayAnimationAction)(triggerOptions, target, from, to, loop, condition)

Launch an animation on a specified target
####Parameters
 | Name | Type | Description
---|---|---|---
 | triggerOptions | any | The trigger options
 | target | any | The specified target
 | from | number | The starting frame index
 | to | number | The ending frame index
optional | loop | boolean | True to loop the animation
optional | condition | [Condition](/classes/Condition) | The condition to play animation
---

##Extends [Action](/classes/Action)
##Members

###from : number


The starting frame index

###to : number


The ending frame index

###loop : boolean

 [Animation](/classes/Animation) loop or not



##Methods

###execute() &rarr; void
Execute the action

