import { NavigationProps } from "./Navigation.d";
import NavigationClient from "./Navigation.client";
import NavigationServer from "./Navigation.server";

export default function Navigation({ routes }: NavigationProps) {
    return (
        <NavigationClient>
            <NavigationServer routes={routes} />
        </NavigationClient>
    );
}
