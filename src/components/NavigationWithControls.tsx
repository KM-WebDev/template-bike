import NavigationClient from "./Navigation.client";
import NavigationServer, { NavigationProps } from "./Navigation.server";

export default function NavigationWithControls({
    Logo,
    routes,
}: NavigationProps) {
    return (
        <NavigationClient>
            <NavigationServer Logo={Logo} routes={routes} />
        </NavigationClient>
    );
}
