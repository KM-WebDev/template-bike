import NavigationClient from "./Navigation.client";
import NavigationServer, { NavigationProps } from "./Navigation.server";

export default function Navigation({ Logo, routes, type }: NavigationProps) {
    return (
        <NavigationClient>
            <NavigationServer type={type} Logo={Logo} routes={routes} />
        </NavigationClient>
    );
}
