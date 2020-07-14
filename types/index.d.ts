import Vue, { PluginFunction } from 'vue';

declare module 'vue/types/vue' {
  export interface VueConstructor {
    install: PluginFunction<{ name?: string }>;
  }
}

declare class Popover extends Vue {}

export default Popover;
