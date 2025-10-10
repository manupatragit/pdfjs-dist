/**
 * Basic draw editor in order to generate an Square annotation.
 */
export class SquareEditor extends AnnotationEditor {
    static _defaultColor: string;
    static _defaultOpacity: number;
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
    color: any;
    opacity: any;
    scaleFactorW: number;
    scaleFactorH: number;
    translationX: number;
    translationY: number;
    rect: {};
    /** @inheritdoc */
    updateParams(type: any, value: any): void;
    get localParams(): {
        [AnnotationEditorParamsType.SQUARE_COLOR]: any;
        [AnnotationEditorParamsType.SQUARE_OPACITY]: number;
    };
    /** @inheritdoc */
    get propertiesToUpdate(): any[][];
    addEditToolbar(): Promise<import("./toolbar.js").EditorToolbar | null>;
    canvas: HTMLCanvasElement | null | undefined;
    onScaleChanging(): void;
    /**
     * onpointerdown callback for the canvas we're drawing on.
     * @param {PointerEvent} event
     */
    canvasPointerdown(event: PointerEvent): void;
    /**
     * onpointermove callback for the canvas we're drawing on.
     * @param {PointerEvent} event
     */
    canvasPointermove(event: PointerEvent): void;
    /**
     * onpointerup callback for the canvas we're drawing on.
     * @param {PointerEvent} event
     */
    canvasPointerup(event: PointerEvent): void;
    /**
     * onpointerleave callback for the canvas we're drawing on.
     * @param {PointerEvent} event
     */
    canvasPointerleave(event: PointerEvent): void;
    ctx: CanvasRenderingContext2D | null | undefined;
    /**
     * When the dimensions of the div change the inner canvas must
     * renew its dimensions, hence it must redraw its own contents.
     * @param {number} width - the new width of the div
     * @param {number} height - the new height of the div
     * @returns
     */
    setDimensions(width: number, height: number): void;
    deserializeNoZoomDimension(noZoomValue: any): number;
    getDeserializedRect(serializedRect: any): {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    };
    /** @inheritdoc */
    serialize(): {
        annotationType: number;
        color: number[];
        opacity: any;
        pageIndex: number;
        rect: any[];
        rotation: number;
        structTreeParentId: any;
    } | null;
    serializeToJSON(): {
        annotationType: number;
        color: any;
        opacity: any;
        pageIndex: number;
        rect: any[];
        drawRect: {
            startX: number;
            startY: number;
            endX: number;
            endY: number;
        };
        rotation: number;
    } | null;
    #private;
}
import { AnnotationEditor } from "./editor.js";
import { AnnotationEditorParamsType } from "../../shared/util.js";
