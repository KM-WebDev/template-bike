import { getBackgroundImage } from "@/lib/utils/images";
import { getImageProps } from "next/image";
import Socials from "./ui/Socials";
import Button from "./ui/Button";
import NavigationHeightPadding from "./Navigation/NavigationHeightPadding";

export default function Form() {
    const {
        props: { srcSet },
    } = getImageProps({
        alt: "",
        width: 720,
        height: 480,
        src: "/form-wall.jpg",
    });
    const backgroundImage = getBackgroundImage(srcSet);
    const style = { backgroundImage };

    return (
        <section className="h-fit min-h-screen bg-cover" style={style}>
            <NavigationHeightPadding />
            <div className="flex min-h-screen flex-col bg-black/60">
                <div className="container mx-auto flex flex-1 flex-col px-6 py-12">
                    <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
                        <div className="text-white lg:mx-6 lg:w-1/2">
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                                Ultimate design solution
                            </h1>

                            <p className="mt-6 max-w-xl">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Voluptatem quo aliquid
                                molestiae hic incidunt beatae placeat
                                accusantium! Alias ex quisquam ab tempora.
                                Ratione autem doloremque ducimus numquam
                                doloribus, error sed.
                            </p>

                            <div className="mt-6 flex flex-col gap-2 md:mt-8">
                                <h3 className="text-gray-300">
                                    Nasze sociale:
                                </h3>
                                <Socials />
                            </div>
                        </div>

                        <div className="mt-8 lg:mx-6 lg:w-1/2">
                            <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl dark:bg-gray-900">
                                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                                    Formularz Kontaktowy
                                </h1>

                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Masz pytanie? Napisz do nas. Skontaktujemy
                                    się z tobą w ciągu 24 godzin.
                                </p>

                                <form className="mt-6">
                                    <div className="flex-1">
                                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                                            Imię:
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Jan"
                                            className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        />
                                    </div>

                                    <div className="mt-6 flex-1">
                                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                                            Adres email:
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="jan@kowalski.pl"
                                            className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                        />
                                    </div>

                                    <div className="mt-6 w-full">
                                        <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                                            Treść:
                                        </label>
                                        <textarea
                                            rows={6}
                                            cols={40}
                                            className="focus:ring-opacity-40 mt-2 block h-32 w-full resize-none overflow-auto rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none md:h-48 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                            placeholder="Twoja wiadomość"
                                        ></textarea>
                                    </div>

                                    <Button className="mt-5 w-full">
                                        Wyślij wiadomość
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
