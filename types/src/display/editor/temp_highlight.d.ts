export class TempHighlight extends AnnotationEditor {
    static _l10nPromise: any;
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
    constructor(params: any);
    color: string;
    addEditToolbar(): Promise<import("./toolbar.js").EditorToolbar | null>;
    /** @inheritdoc */
    fixAndSetPosition(): void;
    /** @inheritdoc */
    getRect(tx: any, ty: any): any[];
    /** @inheritdoc */
    serialize(): null;
    /** @inheritdoc */
    rotate(angle: any): void;
    pointerover(): void;
    pointerleave(): void;
    #private;
}
import { AnnotationEditor } from "./editor.js";
