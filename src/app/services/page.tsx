import NavigationHeightPadding from "@/components/Navigation/NavigationHeightPadding";
import Services from "@/components/Services";
// import { HeroUIProvider } from "@heroui/system";

export default function Page() {
    return (
        // <HeroUIProvider>
        <>
            <NavigationHeightPadding />
            <Services />
        </>
        // </HeroUIProvider>
    );
}
