export interface DeviceNavigationProps {
    className?: string;
    routes: NavigationRoutes;
}

export interface NavigationRoutesEntry {
    name: string;
    link: string;
    exact?: boolean;
}

export interface NavigationClientProps {
    children: React.ReactNode;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export interface NavigationProps {
    routes: NavigationRoutes;
}

export interface NavLinkProps {
    route: NavigationRoutesEntry;
    className?: string;
    activeClassName?: string;
}
