# Assignment 1: Blacksmith — The Tiny Forge

**Course:** MTM6302 — Web Development with JavaScript  
**Due:** See the assignment deadline in Brightspace.

## Your task

Bring a tiny blacksmith’s forge to life using JavaScript. Heat the forge, make swords, and display the results on the page.

Use the same approach as the monster demo:

**Call an action → check or change the state → update the page.**

Play through commands in the browser console. The web page shows the forge’s current condition and your progress.

## Getting started

1. Select **Fork** to create a copy of the starter repository in your own GitHub account.
2. Clone **your fork**, then open the folder in VS Code.
3. Open `index.html` in your browser and open the console.
4. Write your JavaScript in `script.js`.

Use the assignment’s HTML and CSS starter files. Your assessed work is the JavaScript behaviour; you do not need to redesign the page.

## Game rules

Track only two changing numbers:

| Variable | Starting value | Rule |
|---|---:|---|
| Forge heat | 20 | Stays between 0 and 100. |
| Swords made | 0 | Increases by one after successful crafting. |

Making one sword requires **at least 30 heat** and uses **30 heat**. You do not need to buy supplies or sell swords.

The forge’s appearance depends on its heat:

| Heat | Status | Can you make a sword? |
|---|---|---|
| Below 30 | Too cold | No |
| 30 to below 70 | Ready to forge | Yes |
| 70 to 100 | Roaring fire | Yes |

“Roaring fire” is a visual state, not a restriction on crafting.

## Required functions

Build these five functions. The first three are the player’s console commands; the last two support the display.

### 1. `heatForge(amount)`

- Add `amount` to the current heat.
- Stop the heat at 100 if the addition would exceed 100.
- Display a short message confirming that the forge was heated.
- Call `updateForge()`.

For this assignment, the player will supply whole-number amounts from 0 to 100. You do not need to handle text, missing arguments, or other invalid inputs.

Example command: `heatForge(20)`.

### 2. `makeSword()`

- If heat is at least 30, subtract 30 heat and add one sword.
- Display a success message when a sword is made.
- Otherwise, leave both numbers unchanged and display a message explaining that more heat is needed.
- Call `updateForge()` after either result.

Exactly 30 heat is enough. Each call makes at most one sword.

### 3. `resetForge()`

- Restore heat to 20 and swords made to 0.
- Replace the previous action message with a starting message.
- Call `updateForge()`.

### 4. `getForgeStatus(heatValue)`

- Use `if / else if / else` to choose the status from the table above.
- Return the status as a string.
- Keep this function focused on choosing a value; it should not change the page.

### 5. `updateForge()`

- Display the current heat and sword count using `textContent`.
- Call `getForgeStatus()` and display its returned value.
- Use `classList` to apply the matching starter CSS class: `is-cold`, `is-ready`, or `is-roaring`.
- Remove the previous status classes so only one remains.
- Update the supplied image’s `src` and `alt` attributes to match the heat, as in the monster demo:

  | Status | Image | Alternative text |
  |---|---|---|
  | Too cold | `assets/forge-cold.svg` | A stone forge with dark coals and no flames |
  | Ready to forge | `assets/forge-ready.svg` | A stone forge with a small orange fire |
  | Roaring fire | `assets/forge-roaring.svg` | A stone forge with tall bright flames and sparks |

- Keep the most recent action message visible. Updating the status must not erase a success or failure message.

Call `resetForge()` once when the script loads so the page starts in the correct state.

## Page requirements

The page must show:

- Current heat, out of 100.
- Number of swords made.
- Forge status as text.
- A short message describing the most recent action.
- A matching forge graphic and visual styling for each status.

Use text as well as colour to communicate the forge’s status. Use the three supplied graphics; you do not need to create artwork, new HTML elements, or animations.

## Plan your approach

Before coding, write a few pseudocode comments at the top of `script.js`. Describe how making a sword will work. Use plain language rather than JavaScript syntax.

Build in this order:

1. Select the existing page elements and create the two state variables.
2. Build `getForgeStatus()` and `updateForge()`.
3. Build `resetForge()` and call it to initialize the page.
4. Build and test `heatForge(amount)`.
5. Build and test both outcomes of `makeSword()`.

Refer to the monster demo for the patterns. Adapt them to the forge’s rules and use clear names related to this game.

## Test your game

Run each row independently, starting with `resetForge()`. Check the numbers, status text, class, image, alternative text, and action message.

| Commands after resetting | Expected result |
|---|---|
| No additional command | Heat 20; swords 0; Too cold. |
| `makeSword()` | Heat 20; swords 0; a message explaining that more heat is needed. |
| `heatForge(9)` | Heat 29; swords 0; Too cold. |
| `heatForge(10)` | Heat 30; swords 0; Ready to forge. |
| `heatForge(10)`, then `makeSword()` | Heat 0; swords 1; Too cold; success message. |
| `heatForge(49)` | Heat 69; swords 0; Ready to forge. |
| `heatForge(50)` | Heat 70; swords 0; Roaring fire. |
| `heatForge(100)` | Heat capped at 100; swords 0; Roaring fire. |
| `heatForge(100)`, then call `makeSword()` four times | Three swords are made; the fourth attempt fails. Heat 10; swords 3. |

Finally, call `resetForge()` after playing. Confirm that the numbers, status, styling, and message return to their starting values.

## Scope

The required game is complete when the functions and tests above work. You can complete the assignment with the Week 3 concepts used in the monster demo.

## Submission

1. Test the required behaviours and fix console errors.
2. Create a commit with the message `Completes the assignment.`
3. Push your work to your fork on GitHub.
4. Submit the URL of **your fork** in Brightspace, not the instructor’s starter repository. You do not need to open a pull request.

Your submission should include the working page, supplied styles, and your JavaScript file. No separate report or video is required.

## Assessment focus

- Correct state changes and conditions, including the boundary cases.
- Functions with clear responsibilities, including a parameter and a returned value.
- Accurate DOM text, class, and image attribute updates after each action.
- Readable JavaScript and a short pseudocode plan.
