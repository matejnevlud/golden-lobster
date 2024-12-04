

// based on first characters determine filetype of base64 image and return data uri, eg /9j/ for data:image/jpeg;base64, ....
export function base64DataUri(base64?: string): string {
    if (!base64) return "";
    if (typeof base64 !== 'string') return "";
    if (base64.startsWith("/9j/")) return "data:image/jpeg;base64," + base64;
    if (base64.startsWith("iVBORw0KGgo=")) return "data:image/png;base64," + base64;
    if (base64.startsWith("R0lGODlhAQAB")) return "data:image/gif;base64," + base64;
    return "data:image/jpeg;base64," + base64;
}


export function convertDate(date?: Date): string {
    if (!date) return '';
    if (!date.getMonth) return date

    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    const hh = date.getHours();
    const min = date.getMinutes();

    return [dd, mm].map(n => n.toString().padStart(2, '0')).join('.') + '. ' + [hh, min].map(n => n.toString().padStart(2, '0')).join(':');
}


export function numberToRGBAString(number: number) {
    if (!number) return "";

    // Convert the number to a hexadecimal string
    let hex = number.toString(16);

    // Ensure the hexadecimal string is 8 characters long by padding with leading zeros
    hex = hex.padStart(8, '0');

    // Extract the ARGB components from the hexadecimal string
    let alpha = parseInt(hex.slice(0, 2), 16);
    let red = parseInt(hex.slice(2, 4), 16);
    let green = parseInt(hex.slice(4, 6), 16);
    let blue = parseInt(hex.slice(6, 8), 16);

    // Convert alpha from 0-255 range to 0-1 range
    let alphaNormalized = (alpha / 255).toFixed(2);

    // Construct the rgba color string
    let rgbaString = `rgba(${red}, ${green}, ${blue}, ${alphaNormalized})`;

    return rgbaString;
}
