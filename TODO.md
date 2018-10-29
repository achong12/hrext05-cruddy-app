### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items
- [ ] delete individual items
- [ ] edit individual items

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
(to be filled out by you)



------------------------------------------------------------------------

#### Basic Improvments (Plan): finish by October 30th
- [ ] create indivdiual items
  -create individual items by using append method.
    - the latest entry to the input will be at the top of the show text.
    
- [ ] delete individual items
  - I want to have a small delete button next to the todo items text. SO everytime an item gets added to the todo List, a delete button gets created simultaneously.
  -clicked on the button will only delete that specific item only, both in the dom and local storage 
- [ ] edit individual items ??
  -Edit button will be next to the todo item text as well. once clicked on, the item can be edited. the changes will reflect both the local storage and dom.

#### My Spin(2 features): finish by ocotber 31 - novemebr 1
-design the webpage with css
  -I want more practice with CSS and designing a webpage.
-create some animation on the todo list.
  -I have never worked with animations while building my website. this is a good opportunity to learn some animation methods.
  