import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { MantineProvider } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { testimonials } from "../constants/TestimonialsConstants";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 800 }); // animation duration in ms
    }, []);

  return (
    <section className="py-20" data-aos='fade-up' duration={1000}>
      <Element name="testimonials">
        <div>
          <div className="pt-20 mb-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-p1">
              What Our Users Say 💬
            </h2>
          </div>

          <div className="container mx-auto" data-aos='fade-up'>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <div className="max-w-4xl mx-auto relative px-4 py-16">
                <Carousel
                  slideSize="70%"
                  height={450}
                  slideGap="md"
                  align="center"
                  withIndicators
                  withControls
                  nextControlIcon={<IconChevronRight size={30} />}
                  previousControlIcon={<IconChevronLeft size={30} />}
                  classNames={{
                        control: "custom-control",
                        controlPrevious: "custom-control-prev",
                        controlNext: "custom-control-next",
                    }}
                 
                  emblaOptions={{
                    loop: true,
                    dragFree: false,
                    align: "center",
                  }}
                  onSlideChange={(index) => setActiveSlide(index)}
                >
                  {testimonials.map((t, index) => (
                    <Carousel.Slide key={t.id}>
                      <div
                        className="flex flex-col items-center justify-center p-6 min-h-[400px] bg-s9/75 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-500"
                        style={{
                          transform:
                            index === activeSlide
                              ? "scale(1)"
                              : "scale(0.75)",
                          transition: "transform 0.5s ease",
                        }}
                      >
                        <img
                          src={t.avatarUrl}
                          alt={t.name}
                          className="w-16 h-16 rounded-full mb-3 object-cover"
                        />
                        <p className="text-lg font-semibold text-gray-800">
                          {t.name}
                        </p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                        <p className="text-gray-600 mt-2 text-center italic max-w-md">
                          “{t.comment}”
                        </p>
                      </div>
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </div>
            </MantineProvider>
          </div>
        </div>
      </Element>
    </section>
  );
}
