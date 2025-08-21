"use client";
"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ClubData = [
  {
    id: "1",
    // img: "https://s3-alpha-sig.figma.com/img/adeb/fe2b/30b07b3fe887253a24e83b3cce843846?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjG0q3esh6bwLJmz~43gfAFJAE-5-pEDL~IBbzXHlssJQ6mxjVQXylZLWn--6l9fc99BoPU9hl~dI8aLpWwBX2jkXMNDbgKbch7vsdz2g6K0WgfPrxzbjSh6T2NanoWyQpycNhEQydmp1ZF5wsKxWt7QUf0zwgguJDeL6ycAsQcIZH4wnJl~vHMg~6HWT15FICP0RO0JHtnmQ~xsUQ6GfEhj4ejvPeqS6TCY36E2Kv6Tye0BFockdIIkBAgYmBoWvAblfU78mXDgmmXh1YYFzCfXKgnVeUP4ThzyPQgaiu7aumgKvyFKB9t8TVOX6490bGgpSacRGbVCumWpRTcjtg__",
    img: "/unleash_potential/cinematography.jpg",
    name: "CINEMATOGRAPHY",
    href: "https://drive.google.com/file/d/1Qrn4sxd5icb_BFtHszOYyhOPzsRssDNN/view?usp=drive_link",
  },
  {
    id: "2",
    // img: "https://s3-alpha-sig.figma.com/img/d61a/0abc/4f682557aa308670e556945861ed1879?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNUAiNu6QkLSNPfMFGHKQRBw3Vi4lLITP5Mr74q880NftWxrn74GYQcq-BC6GEyLc3-ocsrnJKicSncLMlXLQm2TwdPRkMeEtaG8P6tRq4NLRRDyInwBMe~3T~zHSvSVJmY6VaOMVBdSonxTZGwV7ZKLfKybMtpDRolt5RtZ22ssFjxQCGMpAdpjDTqXo0iZHaPR4jWH6eVN8fpAqJzdMXrtkN1Bd7CKTXLkcEF4~DiGfQbu1uX1fdxuLTwmwvZWrSH53HLTmGrLHUbgOozg68C8Kg48LeEKQqkyALXffb8h3UTGAS4kmApKa1dmPKJPV07iVfAjfpB8c3blJrXtSA__",
    img: "/unleash_potential/animation.jpg",
    name: "ANIMATION",
    href: "https://drive.google.com/file/d/1o1V19Q5Sd3ZBpMPAikdv2ALVwj1VPVl-/view?usp=drive_link",
  },
  {
    id: "3",
    // img: "https://s3-alpha-sig.figma.com/img/2743/0336/5a0ed0ff29e3391c1fc1a6a414b92279?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~W~khL-wZ7H3UMfnwrTI1ilJeiOKmU7u8hXqf9F3Y5pAUVvMxc50bEOqqAGNGpt8yBsb5gELa08pI~e~3Ujk4k4AEwLjrAkFm7q36Pvk4XjuJJSl914A-G6eUW4hLIm074pQaLBSqR6w5i~~KOfWnRFhMxA~Y2iz6RuiRTfeftAnMcze1~dHEewEzNuU6UDx6B-RNxlm5NHZnRfWNhOwhOEpjDdzhXonGNy1zYlhKw0xgM1NFWbp2AtRS~tMh~65hMt~nNEbCRZzEqllja1yvZv2EYfC81B-K7jyHR4juJuIYGst1NMS1U1oEVy5nm8YmhTUVGVYRdjYegkWpgykw__",
    img: "/unleash_potential/outreach.jpg",
    name: "OUTREACH",
    href: "https://drive.google.com/file/d/1sk2xt3buRTGqtsrEaWr-AN8wn3Taei-e/view?usp=drive_link",
  },
  {
    id: "4",
    // img: "https://s3-alpha-sig.figma.com/img/937a/6a8b/60c9764492a021d1cf81f7ef11b5d1ec?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UbK8hGk94UHXKsMsk1yJhpOvKmjEiehqz4Oa9JdckrgYBfJUkkz9a8sIbUUK-4ZOolXcMjENcGUJDdPB4PzggKzk9qZO3C7GDGVZf-gMzpP69USwI4yr5~bkXoQwAgm~koC8N2lKPY-nzTLvVaO~tsiAfe-R7oo2Njwsd~zs9WkUCkuCg96TMjgsB2IfdKzZRa24k-f6lIpbKchP~4-Z4pWf~5ZnGqgIP8v8xU4Cdm3XMdIolZyEyCwYXwQNFY3DwepPm~b3vXYlAfdpnFLAfkCzX0XLjUfV5lKv5W36s7IADQ~1d1PenWQpXiPycWmePvT3~XDLIJ0sQjpa3iRtjA__",
    img: "/unleash_potential/design.jpg",
    name: "DESIGN",
    href: "https://drive.google.com/file/d/1Xub-OwBn-yJDb6g0xFGS_RYVzqQ0JnTV/view?usp=drive_link",
  },
  {
    id: "5",
    // img: "https://s3-alpha-sig.figma.com/img/faa9/c12d/8496267aac82785aa860c496137cdd4a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fodq6L~8BmXEotuJqgnC7F7Q88qP-OUVPlDABL2iEONGaMbdMgXg2JE02zWM2Lj2qJWeMypLdOR7jTevZQUS8b~L7II4GArO9OcQg2rZY6hl2lcJX41i4SxzVM9vMlvkig709IvPdteoo~94dE9BCRxCGWLUHttReaWx0t8UdbTbbaBqlqxg1aQUUs31BLWFf1SJS3JkrogOPFpd53G58U3GmgMsUYnAtEQhqrapzw61th4pVsJBKjUFRORg2C1qmNgAV8lnqoe9fQHwq5sTTCn6v2bmnsCsQtzvUx9zKLe3IBU2AKICd5rKL48vFvfkBEr5HlJ5kThp0xo2uodx~g__",
    img: "/unleash_potential/photog.jpg",
    name: "PHOTOGRAPHY",
    href: "https://drive.google.com/file/d/1KjzIOMBBWfXgGCAWoi9rVdTyqb30oGRl/view?usp=drive_link",
  },
  {
    id: "6",
    // img: "https://s3-alpha-sig.figma.com/img/faa9/c12d/8496267aac82785aa860c496137cdd4a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fodq6L~8BmXEotuJqgnC7F7Q88qP-OUVPlDABL2iEONGaMbdMgXg2JE02zWM2Lj2qJWeMypLdOR7jTevZQUS8b~L7II4GArO9OcQg2rZY6hl2lcJX41i4SxzVM9vMlvkig709IvPdteoo~94dE9BCRxCGWLUHttReaWx0t8UdbTbbaBqlqxg1aQUUs31BLWFf1SJS3JkrogOPFpd53G58U3GmgMsUYnAtEQhqrapzw61th4pVsJBKjUFRORg2C1qmNgAV8lnqoe9fQHwq5sTTCn6v2bmnsCsQtzvUx9zKLe3IBU2AKICd5rKL48vFvfkBEr5HlJ5kThp0xo2uodx~g__",
    img: "/unleash_potential/media.jpg",
    name: "MEDIA",
    href: "https://drive.google.com/file/d/18FCil4LQA9-stgvIOzoYE7tmCJSg7A1j/view?usp=drive_link",
  },
];

export default function UnleashPotential() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const Club = ({ img, name, href }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: false });

    return (
      <Link href={`${href}`} target="_blank">
        <motion.div
          className="bg-slate-950 border border-gray-200 p-2 rounded-lg overflow-hidden shadow-lg"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={`${img}`}
            alt="image"
            className="w-full h-64 object-cover rounded-md"
            width={400}
            height={400}
            unoptimized={true}
          />
          <motion.div
            className="p-5 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h5 className="mb-10 text-2xl font-bold text-gray-200">{name}</h5>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className="bg-gray-400/90 px-10 rounded-2xl hover:bg-gray-500 py-2 text-white font-semibold"
              >
                EXPLORE MORE
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </Link>
    );
  };
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4">
      <motion.div
        className="w-full hidden md:flex justify-center items-center py-10 text-7xl font-bold font-clash text-white text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Unleash Your Potential Through Thrilling Competitive Events!
      </motion.div>
      <Slider {...settings}>
        {ClubData.map((club, index) => (
          <div key={index} className="px-2">
            <Club
              key={club.id}
              img={club.img}
              name={club.name}
              href={club.href}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
