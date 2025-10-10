/**
 * Manage the SVGs drawn on top of the page canvas.
 * It's important to have them directly on top of the canvas because we want to
 * be able to use mix-blend-mode for some of them.
 */
export class DrawLayer {
    static get _svgFactory(): any;
    static #setBox(element: any, { x, y, width, height }: {
        x: any;
        y: any;
        width: any;
        height: any;
    }): void;
    static #extractPathFromHighlightOutlines(polygons: any): string;
    constructor({ pageIndex }: {
        pageIndex: any;
    });
    pageIndex: any;
    setParent(parent: any): void;
    highlight({ outlines, box }: {
        outlines: any;
        box: any;
    }, color: any, opacity: any): {
        id: number;
        clipPathId: string;
    };
    underline({ lineRects, box }: {
        lineRects: any;
        box: any;
    }, color: any, opacity: any): {
        id: number;
    };
    strikeout({ lineRects, box }: {
        lineRects: any;
        box: any;
    }, color: any, opacity: any): {
        id: number;
    };
    drawLinkNode({ lineRects, box }: {
        lineRects: any;
        box: any;
    }, color?: string): {
        id: number;
    };
    highlightOutline({ outlines, box }: {
        outlines: any;
        box: any;
    }): number;
    updateBox(id: any, box: any): void;
    rotate(id: any, angle: any): void;
    changeColor(id: any, color: any, annotationType: any): void;
    changeOpacity(id: any, opacity: any): void;
    addClass(id: any, className: any): void;
    removeClass(id: any, className: any): void;
    remove(id: any): void;
    destroy(): void;
    hide(id: any): void;
    show(id: any): void;
    #private;
}
