export interface DeviceNavigationProps {
    children: React.ReactNode;
    className?: string;
}

export interface NavigationRoutesEntry {
    name: string;
    link: string;
}

export interface NavigationClientProps {
    children: React.ReactNode;
}

export type NavigationRoutes = NavigationRoutesEntry[];

export interface NavigationProps {
    routes: NavigationRoutes;
}

export interface NavLinkProps {
    href: string;
    name: string;
    exact?: boolean;
    className?: string;
    activeClassName?: string;
}
