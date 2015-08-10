---
ID_PAGE: 24499
PG_TITLE: PredicateCondition
PG_VERSION: 1.14
---

This condition uses a predicate to determine its state
##new [PredicateCondition](/classes/PredicateCondition)(actionManager, predicate)

The predicate condition constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | actionManager | [ActionManager](/classes/ActionManager) | The action manager
 | predicate | () =&gt; boolean | The predicate
---

##Extends [Condition](/classes/Condition)
##Members

###predicate : () =&gt; boolean


The predicate



##Methods

###isValid() &rarr; boolean
Return true if condition is valid, false otherwise.

