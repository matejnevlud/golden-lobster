import type * as CSS from 'csstype';


export const vh = (value: number, unit?: string) => unit ? `${value}${unit}` : `${value}vh`;
export const vw = (value: number, unit?: string) => unit ? `${value}${unit}` : `${value}vw`;


type Basic = {
    left: string;
    top: string;
    width: string;
    height: string;

    background: Background;

    textAlign: CSS.Property.TextAlign;

    font: Font;
};

export const parseBasic = (xml: any, unit?: string): Basic => {
    return {
        left: vw(xml?.Left, unit),
        top: vh(xml?.Top, unit),
        width: vw(xml?.Width, unit),
        height: vh(xml?.Height, unit),

        background: parseBackground(xml?.Background),

        textAlign: parseTextAlignement(xml?.TextAlignment ?? "Left") as CSS.Property.TextAlign,
        font: parseFont(xml?.Font)
    };
}

export const parseTextAlignement = (str: string): string => {
    if (str === "Middle") {
        return "center";
    } else if (str === "Right") {
        return "right";
    } else {
        return "left";
    }
}


type Background = {
    color: string;
    image: string;
};

export const parseBackground = (xml: any): Background => {
    return {
        color: parseColor(xml?.Color ?? "ARGB(0,0,0,0)"),
        image: xml?.Image ?? "",
    };
}


type Font = {
    font: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    italic: boolean;
    underline: boolean;
    strikeOut: boolean;
    textDecoration: string;
    color: string;
    highlightColor: string;
};

export const parseFont = (xml: any): Font => {
    // build font css atribut eg italic small-caps bold 12px/30px Georgia, serif;

    const name = xml?.Name ?? "Arial";
    const size = xml?.Size ?? "2";
    const bold = xml?.Bold === "True" || xml?.Bolt === "True" || false;
    const italic = xml?.Italic === "True" ?? false;
    const underline = xml?.Underline === "True" ?? false;
    const strikeOut = xml?.StrikeOut === "True" ?? false;
    const color = xml?.Color ?? "ARGB(100,100,100,100)";
    const highlightColor = xml?.HighLightColor ?? "ARGB(0,0,0,0)";

    return {
        fontFamily: name,
        fontSize: size,
        fontWeight: bold ? "bold" : "normal",
        italic: italic,
        underline: underline,
        strikeOut: strikeOut,

        font: `${italic ? "italic" : ""} ${bold ? "bold" : ""} ${size}vh ${name}, Arial`,
        textDecoration: `${underline ? "underline" : ""} ${strikeOut ? "line-through" : ""}`,

        color: parseColor(color),
        highlightColor: parseColor(highlightColor)
    };
}

// ARGB(100,100,100,100)
export const parseColor = (str: string): string => {
    const [_, a, r, g, b] = str.match(/ARGB\((\d+),(\d+),(\d+),(\d+)\)/);
    return `rgba(${r},${g},${b},${a})`;
}