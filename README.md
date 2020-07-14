# Popover.mood

## Description

Popover.mood is an intelligent popover component designed with Vue.js. It can be integrated into any Vue.js project and with several options and functionalities.

## Installing

```PowerShell
# npm
npm i --save popover.mood

# yarn
yarn add popover.mood

```

## Usage

Popover.mood is very simple to use.

### Overall use

```Javascript
import Vue from 'vue';
import Popover from 'popover.mood';

// You can change the name of the component if you wish
Vue.use(Popover, { name: 'Popover' } );
```

### Single file

```Vue
<script lang="js">
import Popover from "popover.mood";

export default {
  components: {
    Popover
  }
}
</script>
```

### In your vue.js file

After that you can use the component in your code as follows.

```Vue
<template>
  <div id="app">
    <div id="join-element-id">
      join element
    </div>
    <popover join="#join-element-id" style="max-width: 250px">
      <!-- Your code hear -->
    </popover>
  </div>
</template>
```

## Props

### join

- **type**: _any_
- **requred**: _true_

It is a valid html selector as an id, a class or any other properties allowing to select the element attached to the popover. The popover position will be calculated based on the position of the join element.

### align

- **type**: _string_
- **requred**: _false_
- **value**: _left_ | _right_ | _top_ | _bottom_

This property defines the popover alignment. The latter can be placed on the left, right, top or bottom. If it is not, the alignment will be calculated automatically with respect to the
**direction** property.

### direction

- **type**: _string_
- **requred**: _false_
- **value**: _x_ | _y_

This property defines the alignment direction of the popover. If its value is _x_, the popover will align either to the left or to the right of the join element. If its value is **y**, the popover will be aligned either at the top or at the bottom of the join element. The default value is **y**. If the **align** property is defined, the **direction** property is not taken into account to calculate the position of the popover.

### hide-arrow

This property allows you to display or hide the arrow.

- **type**: _boolean_
- **requred**: _false_
- **value**: _true_ | _false_

### justify

- **type**: _boolean_
- **requred**: _false_
- **value**: _true_ | _false_

If true, the popover will be placed in the middle of the join element. This property is only taken into account if the display screen allows centered alignment.

### show-on

- **type**: _string_
- **requred**: _false_
- **default**: _hover_
- **value**: _hover_ | _click_

this property defines the events of the join element which will trigger the opening of the popover. It can be a
**hover** or **click**.

### z-index

- **type**: _number_
- **requred**: _true_
- **default**: _5000_

Choose a large value so that the popover is not hidden by other popovers.

### position-on-resize

- **type**: _boolean_
- **requred**: _true_

If true, the position of the popover will be calculated each time the size of the window is modified.

### position-on-scroll

- **type**: _boolean_
- **requred**: _false_

If true, the position of the popover will be calculated with each scroll of the window.

### close-on-esc

Triggers when the escape button is pressed while the popover is open.

- **type**: _boolean_
- **default**: _true_

### close-on-other-area-clicked

Fires when a zone other than the popover receives a click while the popover is open.

- **type**: _boolean_
- **default**: _true_

## Events

### open

The event is triggered each time the popover opens.

### close

The event is triggered each time the popover closes.

### align

**type**: _string_
**value**: _left_ | _right_ | _top_ | _bottom_

Returns the position of the popover relative to the join element after opening. The values that can be sent are: left, right, top, bottom.

### arrow-align

**type**: _string_
**value**: _left_ | _right_ | _top_ | _bottom_

Returns the position of the arrow relative to the popover join after opening. The values that can be sent are: left, right, top, bottom.

### arrow-on

**type**: _string_
**value**: _left_ | _right_ | _top_ | _bottom_ | _middle_

Returns the position of the arrow relative to the popover join after opening.

### justify

**type**: _boolean_
**value**: _true_ | _false_

Returns true if the popover is positioned in the middle of the join element, and false otherwise.

### esc-keydown

Triggers when the escape button is pressed while the popover is open.

### other-area-clicked

Fires when a zone other than the popover receives a click while the popover is open.

## Functions

You can access certain popover functions such as **open** and **close**. These two functions will respectively allow you to open and close the popover. Here is an example of using the functions.

```Vue
<template>
  <div id="app">
    <div id="id-join-element" @click="openPopover">
      My join element
    </div>
    <popover
      join="#id-join-element"
      ref="popover"
      @esc-keydown="closePopover"
      @other-area-clicked="closePopover"
      class="my-super-popover"
      style="width: 250px; background-color: yellow; color: black; border-radius: .3em;"
    >
        <!-- Your code hear -->
    </popover>

    <button @click="openPopover">
      open popover
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  // ...

  methods: {
    methods: {
      openPopover() {
        const popover = this.$refs.popover;
        popover.open();
      }

      closePopover() {
        const popover = this.$refs.popover;
        popover.close();
      }
    }
  }
}
</script>
```

## Author

**[@domutala](https://github.com/domutala)**

## License

mit
