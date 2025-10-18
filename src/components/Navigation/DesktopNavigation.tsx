import { cn } from "@/lib/utils/cn";
import { DeviceNavigationProps } from "./Navigation.d";
import Logo from "../Logo";
import NavLink from "./NavLink";

export function DesktopNavigation({
    routes,
    className,
}: DeviceNavigationProps) {
    return (
        <div className={className}>
            <div
                className={cn("flex h-fit w-full items-center justify-center")}
            >
                <Logo />
                <div className="mt-2 flex w-fit rounded-full bg-black/40 px-4 py-4 shadow-lg backdrop-blur">
                    <ul className={"flex"}>
                        {routes.map((route) => {
                            return <NavLink route={route} key={route.name} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
