# ARQuest
A basic dungeon-crawler game

## Classes
- There are four basic classes; fighter, thief, cleric, and mage
- There are no class-specific skills, but the classes have different chances of success
- The classes may modify some of the base stat ratings

## Stats
- Players have different stats depending on their class
- Stats may be increased or decreased by various means
- A stat can never be increased above the double of its original value
- All stats other than moving rate default to 3
- Default movement rating is 4
- Stats may determine other in-game mechanics; e.g. Str influences the weight a player is capable of carrying

## Moving
- Players cannot move diagonally
- Players cannot end their move on an occupied square
- Players can move through a square occupied by a friendly
- Players cannot move through a square occupied by an unfriendly, by a trap or a wall
- Players can move a distance up to their movement rating

## Actions
- Players have two actions per turn
- Players can spend an action to move, attack, or perform some other action
- Players can freely choose whether to move first or attack first
- Players can choose to spend both actions to move if they choose
- Fighting, shooting, casting magic all counts as an attack action
- Other actions include searching for traps, treasures, or hidden doorways, using abilities, and removing traps
- The same action cannot be performed twice, except for moving
- Players are not allowed to attack twice in the same round (except where special abilities permit)
- Switching equipment does not count as an action

## Combat
- An attack may be performed against any target in sight and witin range
- Attacks may be performed diagonally
- Melee range is only allowed against squares in base-to-base contact (except where special abilities permit)
- Ranged combat is only allowed at a distance; so not in base-to-base contact (except where special abilities permit)
- Attack range is specified by the details of the weapon, spell, or item
- Moving through a figure in melee combat risks drawing a free opportunity attack
- Attacks hitting more than one square may cause friendly fire

## Traps
- When a player steps in a trap or successfully searches for a trap it is revealed
- Revealed traps stay visible for the rest of the game
- Toucing a square with an invisible trap ends the current move action immediately
- Certain types of traps may also end current turn

## Creatures
- Creatures abide by the same rules as players, except where otherwise specified
- Creatures do not trigger traps
- Creatures cannot loot treasure
- Creatures may have different strategies for picking targets