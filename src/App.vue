<template>
  <div id="app">
    <button id="join" style="margin: 10em">
      dropper
    </button>
    <Popover
      join="#join"
      style="width: 200px; border-color: #eaeaea;"
      closeOnEsc
      showOn="click"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
      exercitationem harum? Assumenda magnam aliquid quisquam sapiente veritatis
      quaerat qui beatae quo nihil, accusantium saepe explicabo aperiam, ipsum
      voluptatum reiciendis perferendis?
    </Popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
