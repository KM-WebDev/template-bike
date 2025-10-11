import { CssDirection } from "./global";

export function isCssDirectionArray(value: unknown): value is CssDirection[] {
    return (
        Array.isArray(value) &&
        value.every(
            (item) =>
                item === "top" ||
                item === "bottom" ||
                item === "left" ||
                item === "right"
        )
    );
}
