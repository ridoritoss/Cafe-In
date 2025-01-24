"use client"

import { FaYoutube, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa"


const SocialMedia = [
    {
        name: "Instagram",
        url: "https://instagram.com/cafe-in",
        icon: <FaInstagram className="text-3xl" />,
    },
    {
        name: "Twitter",
        url: "https://twitter.com/cafe-in",
        icon: <FaTwitter className="text-3xl" />,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/company/cafe-in",
        icon: <FaLinkedin className="text-3xl" />,
    },
    {
        name: "YouTube",
        url: "https://youtube.com/@cafe-in",
        icon: <FaYoutube className="text-3xl" />,
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/6281234567890",
        icon: <FaWhatsapp className="text-3xl" />,
    },
]

const Social = () => {
    return (
        <>
            {SocialMedia.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-latte transition-all delay-150"
                >
                    {social.icon}
                </a>
            ))}
        </>
    )
}

export default Social