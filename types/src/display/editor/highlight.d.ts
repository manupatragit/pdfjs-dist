/**
 * Basic draw editor in order to generate an Highlight annotation.
 */
export class HighlightEditor extends AnnotationEditor {
    static _defaultColor: null;
    static _defaultOpacity: number;
    static _l10nPromise: any;
    static _type: string;
    static _editorType: number;
    static initialize(l10n: any): void;
    static updateDefaultParams(type: any, value: any): void;
    static get defaultPropertiesToUpdate(): (number | null)[][];
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
    /** @inheritdoc */
    static deserialize(data: any, parent: any, uiManager: any): AnnotationEditor | null;
    static deserializeFromJSON(data: any, parent: any, uiManager: any): AnnotationEditor | null;
    constructor(params: any);
    selectedText: string;
    color: any;
    /** @inheritdoc */
    updateParams(type: any, value: any): void;
    get localParams(): {
        [AnnotationEditorParamsType.HIGHLIGHT_COLOR]: any;
    };
    /** @inheritdoc */
    get propertiesToUpdate(): any[][];
    /** @inheritdoc */
    addEditToolbar(): Promise<import("./toolbar.js").EditorToolbar | null>;
    /** @inheritdoc */
    fixAndSetPosition(): void;
    /** @inheritdoc */
    getRect(tx: any, ty: any): any[];
    /** @inheritdoc */
    rotate(angle: any): void;
    pointerover(): void;
    pointerleave(): void;
    /** @inheritdoc */
    serialize(isForCopying?: boolean): {
        annotationType: number;
        color: number[];
        opacity: any;
        quadPoints: any[];
        outlines: any[][];
        underlines: any[];
        pageIndex: number;
        rect: any[];
        rotation: number;
        structTreeParentId: any;
    } | null;
    serializeToJSON(): {
        annotationType: number;
        color: any;
        opacity: any;
        boxes: any;
        pageIndex: number;
        rect: any[];
        rotation: number;
        text: string;
        displayType: number;
    } | null;
    #private;
}
import { AnnotationEditor } from "./editor.js";
import { AnnotationEditorParamsType } from "../../shared/util.js";
