export class LinkNodeEditor extends AnnotationEditor {
    static _l10nPromise: any;
    static _type: string;
    static _editorType: number;
    static initialize(l10n: any): void;
    static #rotateBbox({ x, y, width, height }: {
        x: any;
        y: any;
        width: any;
        height: any;
    }, angle: any): {
        x: any;
        y: any;
        width: any;
        height: any;
    };
    static deserializeFromJSON(data: any, parent: any, uiManager: any): AnnotationEditor | null;
    constructor(params: any);
    color: string;
    targetId: null;
    /** @inheritdoc */
    addEditToolbar(): Promise<import("./toolbar.js").EditorToolbar | null>;
    /** @inheritdoc */
    fixAndSetPosition(): void;
    /** @inheritdoc */
    getRect(tx: any, ty: any): any[];
    show(): void;
    hide(): void;
    /** @inheritdoc */
    rotate(angle: any): void;
    serialize(): null;
    deserialize(): null;
    serializeToJSON(): {
        annotationType: number;
        boxes: any;
        pageIndex: number;
        rect: any[];
        rotation: number;
        text: string;
        targetId: null;
    } | null;
    #private;
}
import { AnnotationEditor } from "./editor.js";
