import NavigationClient from "./Navigation.client";
import NavigationServer, { NavigationProps } from "./Navigation.server";

export default function Navigation({ routes }: NavigationProps) {
    return (
        <NavigationClient>
            <NavigationServer routes={routes} />
        </NavigationClient>
    );
}
