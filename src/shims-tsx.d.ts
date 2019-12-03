type Vue = import('vue').default;
type VNode = import('vue').VNode;

declare namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
        [elem: string]: any;
    }
}
