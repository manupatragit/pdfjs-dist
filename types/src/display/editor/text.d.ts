export type AnnotationEditorLayer = import("./annotation_editor_layer.js").AnnotationEditorLayer;
/**
 * Text editor in order to create a Text annotation.
 */
export class TextEditor extends AnnotationEditor {
    static _defaultColor: string;
    static get _keyboardManager(): any;
    static _type: string;
    static _editorType: number;
    /** @inheritdoc */
    static initialize(l10n: any): void;
    /** @inheritdoc */
    static updateDefaultParams(type: any, value: any): void;
    /** @inheritdoc */
    static get defaultPropertiesToUpdate(): any[][];
    /** @inheritdoc */
    static deserialize(data: any, parent: any, uiManager: any): AnnotationEditor | null;
    static deserializeFromJSON(data: any, parent: any, uiManager: any): AnnotationEditor | null;
    constructor(params: any);
    /** @inheritdoc */
    updateParams(type: any, value: any): void;
    get localParams(): {
        [AnnotationEditorParamsType.TEXT_COLOR]: any;
    };
    /** @inheritdoc */
    get propertiesToUpdate(): any[][];
    /**
     * Helper to translate the editor with the keyboard when it's empty.
     * @param {number} x in page units.
     * @param {number} y in page units.
     */
    _translateEmpty(x: number, y: number): void;
    setupOverlayDragEvents(): void;
    /**
     * Commit the content we have in this editor.
     * @returns {undefined}
     */
    commit(): undefined;
    openOrEdit(): void;
    pointerup(): void;
    editorDivKeydown(event: any): void;
    editorDivFocus(event: any): void;
    editorDivBlur(event: any): void;
    toggleNoteAppearance(emitEvent?: boolean): void;
    createCollapsedNote(): void;
    createActionBar(): HTMLDivElement;
    editorDiv: HTMLDivElement | undefined;
    overlayDiv: HTMLDivElement | undefined;
    /** @inheritdoc */
    serialize(isForCopying?: boolean): {
        annotationType: number;
        color: number[];
        content: string;
        pageIndex: number;
        rect: any[];
        rotation: number;
        structTreeParentId: any;
    } | {
        pageIndex: number;
        id: any;
        deleted: boolean;
    } | null;
    serializeToJSON(): {
        annotationType: number;
        color: any;
        text: string;
        pageIndex: number;
        rect: any[];
        rotation: number;
        collapsed: boolean;
    } | null;
    #private;
}
import { AnnotationEditor } from "./editor.js";
import { AnnotationEditorParamsType } from "../../shared/util.js";
