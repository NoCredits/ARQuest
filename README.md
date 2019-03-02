# ARQuest


## Rw, 2019-03-02 added comments in italics and changed some rules

Game rules

Just an idea again. Please add yours!!

Moving
Please cannot move diagonal
cannot move to an occupied Square
They are allowed to pass through an occupied Square
cannot move through Monsters, traps or walls
 
Players are allowed to do different kinds of actions throughout their turn

They can move in straight lines. Basically ~~5~~ 4 squares.
Or:
They can fight, 
cast spells or use magic, 
can search for traps or treasures or hidden doorways,
open doors,
use abilities ,
remove traps

Players are allowed to first move and then do an action 
Or:
do an action and then move. 

**Or: move and then move**

They are not allowed to fight twice.

**An action consists of two phases: in one of them it is possible to use magic/abilities etc and in the  other it is possible to fight or move**

Combats
Melee  are only allowed at touching squares to monsters
Distance  damage is  only allowed at a distance. the distance depends on the kind of weapon or magic.

when a player steps in a trap  the trap  stays visible. there are  different kind of  traps. 


## Anders, 2019-02-28
I agree with your basic principles for **moving**; can move through friends but not hostiles.
Maybe some things can modify movement rate? (e.g. heavy armour or light-footed elf/thief?), I'd say no more than 1-2 in either direction (if we base at 4 then +1 is a 25% increase after all). 

*OK, Base movement will be 4 squares. 25% increase at light armour. However, the defense stats will be less then, cause there must also be a downside. Lets make chainmail and plate heavy armor and leather, cloth light armour.*

Agreed on **actions**.
Is it possible to use both magic and normal weapons?

*Perhaps magic can be used as an interupt during an action? Or we allow two phases in battle, one where you can use special abilities or magic and one where you use weapons?*

Do we have ranged attacks? If so, may you both ranged and melee attack? (and do they use the same stats?)

*I would say no. Range can only be used from a distance and melee nearby*

Agreed on not fight+fight (maybe specific things would allow it; e.g. berserking or potion of heroism?)
I think it's okay to move+move though?

*move+move is fine by me. About the heroism stuff: lets create that two phase action. You can use a potion/spell in the first fase which allow you to fight again?*


**Monsters** abide by the same rules as players (do monsters also have classes? Or just archtypes? Maybe only "hero"-monsters have classes?)

*in the basics, they apply to the same rule. However: they don't fall into hidden traps, if the trap is visible, they have to avoid them (go around). Do monsters loot treasures? Every kind of monster has its special kind of abilities, spells etc. But fighting goes by the same rules: two actions each with two phases*

**fighting**
Agreed on **range**; you need to touch base to fight in melee (diagonal/corner-corner touch allowed?).

*diagonal allowed. @ ranged it will need some calculations, but we can keep it simple. Perhaps the max distance will be the walls/obstacles/foe's and calculate if tha path is clear*

If you move through a figure that is in melee, then you risk getting hit?

*nice addition, I would say only by an AOE, or multiple target spell?*

Are there weapons that can reach further (e.g. spears or halberds) and attack 1 square away?

*Lets start by melee only @ touching tiles, just to keep the rules and programming simple*

Can you shoot arrows/magic through friendlies? (do you risk friendly-fire?)

*I would say yes, friendly fire will not hurt. Its difficult to use AOE if you can hurt other players*

How do we determine line-of-sight for shooting? (especially in corner situations)

*lets calculate if the range is possible (any walls or other obstacles, distance)? Perhaps incorrect spells Fizzle?*

**Traps**.
If you step in a trap, then you lose the rest of your turn? Or just lose the rest of the move you were executing?

*definitly end of move. The type of trap determines if your turn is over. A shallow Pit trap makes it still possible to do something else. Perhaps there are traps that lasts more turns or that you need to get released from?*

I like the idea of having different kinds of traps (and not necessarily the one stepping in it is hit; e.g. someone standing in the way? :))

*thumbs up*

Simple **classes** for simplicity? Maybe even just the 4 basic AD&D classes? (fighter, thief, cleric, mage)
Everyone can do all skills but with different success chances? Or skills are locked for specific classes?

*I like the idea if different kind of success.*

*If we focus on single player, it doens't mather, cause you control all the players, but @ multiplayer you want players give an equal chance of finishing te dungeon?*

*Are all classes able to use magic? Perhaps the impact of a spells depends on the class again?*

**gear**
Is there a weight/number-limited of loot you can carry?

*ok with me. Weight is more realistic*

Does it cost an action to switch gear? To switch to another weapon? To switch from melee to ranged (and vice versa)?

*I would say swithing gear doesn't cost an action. It may even be done out of turn. Magic however is not allowed. melee and range switch during combat makes only sense if a monster is fleeing or closing in on you.*

**meta-game**
I think meta-game (i.e. some kind of map to travel around on) is a bit overkill for starters, right?
But how do you actually get around between dungeons and maps? Let's start with a "go adventure/explore"-button and then see if other stuff comes on top later?

*Completely right. First create a simple explorable dungeon with an entrance and an exit/goal. Just somehow transport to the entrance and start exploring*