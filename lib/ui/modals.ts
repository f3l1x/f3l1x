import Vue, { AsyncComponent, VNode, VNodeData, CreateElement } from "vue";
import { Context } from "@nuxt/types";

export function createModals(ctx: Context) {
  return new Modals(ctx);
}

const components: { [key: string]: AsyncComponent } = {}

export class Modals {
  private ctx: Context;
  private refs: { [key: string]: Vue } = {};

  constructor(ctx: Context) {
    this.ctx = ctx;
  }

  open(modal: string, data?: VNodeData): Vue {
    const component = new Vue({
      store: this.ctx.store,
      router: this.ctx.app.router,
      render: function (h: CreateElement): VNode {
        return h(components[modal], {
          ref: 'modal',
          ...(data || {})
        });
      }
    });

    // Mount component to V-DOM
    component.$mount();

    // Append component to real DOM
    document.body.appendChild(component.$el);

    // Track modal
    this.refs[modal] = component;

    return component;
  }

  close(modal: string) {
    if (this.refs[modal]) {
      this.refs[modal].$destroy();
      this.refs[modal].$root.$el.parentNode?.removeChild(this.refs[modal].$root.$el)
      this.refs[modal].$el.parentNode?.removeChild(this.refs[modal].$el);
      delete this.refs[modal];
    }
  }

}
