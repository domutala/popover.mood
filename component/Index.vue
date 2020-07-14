<template>
  <Dropper
    :join="join"
    :align="align"
    :direction="direction"
    :orientation="orientation"
    :hideArrow="hideArrow"
    :justify="justify"
    :zIndex="zIndex"
    :showOn="showOn === 'hover' ? 'mouseover' : 'click'"
    :positionOnResize="positionOnResize"
    :positionOnScroll="positionOnScroll"
    :fixed="fixed"
    @open="isOpen"
    @close="isClose"
    @esc-keydown="emitEsckeydown"
    @other-area-clicked="emitOtherAreaClicked"
    @justify="emitJustify"
    @arrow-on="emitArrowOn"
    @arrow-align="emitArrowAlign"
    @align="emitAlign"
    ref="dropper"
  >
    <slot />
  </Dropper>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Dropper from 'dropper.mood';
import 'dropper.mood/dist/dropper.css';
import listerners from './listerners';

@Component
export default class Popover extends Vue {
  public static install(vue: typeof Vue, options?: { name?: string }) {
    Vue.use(Dropper);
    vue.component(options?.name || 'Popover', Popover);
  }

  @Prop({ required: true })
  private join: any;

  @Prop({
    type: String,
    validator: val => {
      const values = ['left', 'right', 'top', 'bottom'];
      return values.includes(val);
    }
  })
  private align: any;

  @Prop({
    type: String,
    default: 'y',
    validator: val => {
      const values = ['x', 'y'];
      return values.includes(val);
    }
  })
  private direction: any;

  @Prop({
    type: String,
    validator: val => {
      const values = ['left', 'right', 'top', 'bottom'];
      return values.includes(val);
    }
  })
  private orientation: any;

  @Prop({ type: Boolean })
  private hideArrow: any;

  @Prop({ type: Boolean, default: false })
  private justify: any;

  @Prop({
    type: [String, Array],
    default: 'hover',
    validator: val => {
      const values = ['hover', 'click'];
      return values.includes(val);
    }
  })
  private showOn: any;

  @Prop({ type: Number, required: false, default: 50000 })
  private zIndex: any;

  @Prop({ type: Boolean, default: true })
  private positionOnResize: any;

  @Prop({ type: Boolean, default: false })
  private positionOnScroll: any;

  @Prop({ type: Boolean, default: false })
  private fixed: any;

  @Prop({ type: Boolean, default: true })
  private closeOnEsc: any;

  @Prop({ type: Boolean, default: true })
  private closeOnOtherAreaClicked: any;

  private alignArrow: string = 'top';
  private arrowOn: string = 'left';
  private position: string = '';
  private show: boolean = false;
  private styleBefore: string = '';
  private styleAfter: string = '';

  public get listeners() {
    return {
      ...this.$listeners,
      ...listerners(this)
    };
  }

  private isOpen() {
    window.addEventListener('mousemove', this.toClose);
    this.$emit('open');
  }

  private toClose(e: MouseEvent) {
    if (this.showOn === 'hover') {
      const dropper = this.$refs.dropper as any;
      const b = dropper.$el.getBoundingClientRect();
      const x1 = e.pageX + 30 < b.left;
      const x2 = e.pageX + 30 > b.right;

      const y1 = e.pageY + 30 < b.top;
      const y2 = e.pageY + 30 > b.bottom;

      if (e.pageX < b.left && x1) {
        dropper.close();
      } else if (e.pageX > b.right && x2) {
        dropper.close();
      } else if (e.pageY < b.top && y1) {
        dropper.close();
      } else if (e.pageY > b.bottom && y2) {
        dropper.close();
      }
    }
  }

  private isClose() {
    window.removeEventListener('mousemove', this.toClose);
    this.$emit('close');
  }

  private open() {
    const dropper = this.$refs.dropper as any;
    dropper?.open();
  }

  private close(): void {
    const dropper = this.$refs.dropper as any;
    dropper?.close();
  }

  private emitJustify(justify: boolean) {
    this.$emit('justify', justify);
  }

  private emitArrowOn(arrowOn: string) {
    this.$emit('arrow-on', arrowOn);
  }
  private emitArrowAlign(arrowAlign: string) {
    this.$emit('arrow-align', arrowAlign);
  }

  private emitAlign(align: string) {
    this.$emit('align', align);
  }

  private emitEsckeydown() {
    if (this.closeOnEsc) {
      this.close();
    }
    this.$emit('esc-keydown');
  }

  private emitOtherAreaClicked() {
    if (this.closeOnOtherAreaClicked) {
      this.close();
    }
    this.$emit('other-area-clicked');
  }
}
</script>
