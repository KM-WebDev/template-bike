import { cn } from "@/lib/utils/cn";
import { DeviceNavigationProps } from "./Navigation.d";
import Logo from "../Logo";
import NavLink from "./NavLink";
import {
    AnimatedList,
    AnimatedListHover,
    AnimatedListItem,
} from "../AnimatedList";

export function DesktopNavigation({
    routes,
    className,
}: DeviceNavigationProps) {
    return (
        <div className={className}>
            <div
                className={cn("flex h-fit w-full items-center justify-center")}
            >
                <div
                    className={cn(
                        "absolute top-[50%] left-4 -translate-y-[50%] rounded-md bg-black/40 px-2 py-1 backdrop-blur",
                        "group-data-[scrolled=true]/nav:bg-black group-data-[scrolled=true]/nav:shadow-xl"
                    )}
                >
                    <Logo />
                </div>
                <div className="mt-2 flex w-fit rounded-full bg-black/50 px-2 py-2 shadow-lg backdrop-blur">
                    <AnimatedList className={"flex gap-5 text-neutral-100"}>
                        <AnimatedListHover className="rounded-full bg-neutral-300/30" />
                        {routes.map((route) => {
                            return (
                                <AnimatedListItem
                                    key={route.name}
                                    className="h-fit w-fit"
                                    activeClassName="text-white"
                                >
                                    <NavLink
                                        route={route}
                                        className="inline-block rounded-full px-3 py-1.5"
                                        activeClassName="bg-rose-700/80"
                                    />
                                </AnimatedListItem>
                            );
                        })}
                    </AnimatedList>
                </div>
            </div>
        </div>
    );
}
