---
ID_PAGE: 3291
PG_TITLE: PredicateCondition
PG_VERSION: 1.14
---

This condition uses a predicate to determine its state
##new [PredicateCondition](page.php?p=3291)(actionManager, predicate)

The predicate condition constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](page.php?p=3288) | The action manager
 | predicate | () =&gt; boolean | The predicate
---

##Extends [Condition](page.php?p=3289)
##Members

###predicate : () =&gt; boolean


The predicate



##Methods

###isValid() &rarr; boolean
Return true if condition is valid, false otherwise.

