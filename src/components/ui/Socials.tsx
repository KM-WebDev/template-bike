import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

interface SocialProps {
    link: string;
    children: React.ReactNode;
}

function SocialButton({ link, children }: SocialProps) {
    return (
        <a target="_blank" href={link}>
            {children}
        </a>
    );
}

export default function Socials() {
    const className = "hover:text-rose-700 transition-colors duration-200";

    return (
        <div className="flex gap-2 text-[2rem]">
            <SocialButton link="https://facebook.com">
                <FaFacebookSquare className={className} />
            </SocialButton>
            <SocialButton link="https://instagram.com">
                <FaInstagramSquare className={className} />
            </SocialButton>
            <SocialButton link="https://x.com">
                <FaSquareXTwitter className={className} />
            </SocialButton>
            <SocialButton link="https://linkedin.com">
                <FaLinkedin className={className} />
            </SocialButton>
        </div>
    );
}
