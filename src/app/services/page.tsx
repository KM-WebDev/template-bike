import Services from "@/components/Services";
import { HeroUIProvider } from "@heroui/system";

export default function Page() {
    return (
        <HeroUIProvider>
            <div className="h-20"></div>
            <Services />
        </HeroUIProvider>
    );
}
