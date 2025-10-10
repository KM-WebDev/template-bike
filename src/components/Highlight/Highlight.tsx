import HighlightClient from "./Highlight.client";
import HighlightServer from "./Highlight.server";

export default function Highlight() {
    return (
        <HighlightClient>
            <HighlightServer />
        </HighlightClient>
    );
}
