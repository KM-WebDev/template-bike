import { CssDirection, TailwindDirection } from "@/lib/types/global";
import { isCssDirectionArray } from "@/lib/types/guards";


export function getTailwindDirectionName(dir: CssDirection) {
    const mapping: Record<CssDirection, TailwindDirection> = {
        top: "t",
        bottom: "b",
        left: "l",
        right: "r",
    };

    return mapping[dir];
}

export function filterCssDirections(
    directions: CssDirection[],
    accept?: CssDirection[]
): CssDirection[] {
    const uniqueDirections = Array.from(new Set(directions));
    let result: CssDirection[] = [];
    if (accept) {
        const uniqueAccept = Array.from(
            new Set(
                isCssDirectionArray(accept)
                    ? accept
                    : ["top", "bottom", "right", "left"]
            )
        );
        console.log(uniqueDirections);
        result = uniqueDirections.filter((dir) => uniqueAccept.includes(dir));
    } else {
        result = uniqueDirections;
    }

    return result;
}

export function getTailwindDirections(
    directions: CssDirection[],
    merge: boolean = false
): TailwindDirection[] {
    interface MergeDirections {
        directions: TailwindDirection[];
        to: TailwindDirection;
        pass?: TailwindDirection[];
    }

    const tailwindDirections = directions.map((dir) =>
        getTailwindDirectionName(dir)
    );
    const result: TailwindDirection[] = [];
    const unique = Array.from(new Set(tailwindDirections));

    const axes: MergeDirections[] = [
        { directions: ["l", "r"], to: "x" },
        { directions: ["t", "b"], to: "y" },
    ];

    function makeMerge({ to, directions }: MergeDirections) {
        const hasAllDirections = directions.every(unique.includes);
        if (hasAllDirections) result.push(to);
        else {
            directions.forEach((dir) => {
                if (unique.includes(dir)) {
                    result.push(dir);
                }
            });
        }
    }

    if (merge) {
        axes.forEach(makeMerge);
        return result;
    }

    return unique;
}
