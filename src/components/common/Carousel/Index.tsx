import { useEffect } from "preact/hooks";
import ButtonPrevSlide from "./button-prev-slide/Index";
import ButtonNextSlide from "./button-next-slide/Index";

export default function Carousel() {
  useEffect(() => {
    let index = 0,
      amount = 0,
      translationComplete = true,
      moveOffset = 0;

    const carousel = document.getElementById("carousel") as HTMLElement;
    const carouselContainer = document.getElementById(
      "carousel-container"
    ) as HTMLElement;
    const slides = [...carousel.children] as HTMLElement[];

    const transitionCompleted = function () {
      translationComplete = true;
    };

    const btnPrev = document.getElementById("prev") as HTMLButtonElement;
    const btnNext = document.getElementById("next") as HTMLButtonElement;

    window.addEventListener("resize", function () {
      moveOffset = carouselContainer.offsetWidth;
      index = 0;
      slides.forEach((child) => {
        const slide = child as HTMLElement;
        slide.style.transform = `translateX(-${moveOffset}px)`;
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      amount = slides.length;
      moveOffset = carouselContainer.offsetWidth;

      // prevent multiple click when transition
      for (var i = 0; i < amount; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.transform = `translateX(-${moveOffset}px)`;

        const currSlide = slides[i];

        currSlide.addEventListener("transitionend", transitionCompleted, true);
        currSlide.addEventListener(
          "webkitTransitionEnd",
          transitionCompleted,
          true
        );
        currSlide.addEventListener("oTransitionEnd", transitionCompleted, true);
        currSlide.addEventListener(
          "MSTransitionEnd",
          transitionCompleted,
          true
        );
      }

      slides.forEach((child) => {
        const slide = child as HTMLElement;
        slide.style.margin = "0";
        slide.style.transform = `translateX(-${moveOffset}px)`;
        setTimeout(() => slide.classList.add("animate"), 0);
      });

      // add click events to control arrows
      btnPrev.addEventListener("click", prev, true);
      btnNext.addEventListener("click", next, true);
    });

    function prev() {
      if (!translationComplete) return;

      translationComplete = false;
      index--;

      if (index == -1) {
        index = amount - 1;
      }

      const outerIndex = index % amount;
      for (let i = 0; i < amount; i++) {
        const slide = slides[i] as HTMLElement;

        const currTransl = Number(
          slide.style.transform.split("(")[1].split("px")[0]
        );

        slide.style.opacity = "1";
        slide.style.transform =
          "translateX(" + (currTransl + moveOffset) + "px)";
      }

      const outerSlide = slides[outerIndex] as HTMLElement;
      const currTransl = Number(
        outerSlide.style.transform.split("(")[1].split("px")[0]
      );

      outerSlide.style.transform =
        "translateX(" + (currTransl - moveOffset * amount) + "px)";
      outerSlide.style.opacity = "0";
    }

    function next() {
      if (!translationComplete) return;

      translationComplete = false;

      const outerIndex = index % amount;
      index++;

      for (var i = 0; i < amount; i++) {
        const slide = slides[i] as HTMLElement;

        const currTransl = Number(
          slide.style.transform.split("(")[1].split("px")[0]
        );

        slide.style.opacity = "1";
        slide.style.transform =
          "translateX(" + (currTransl - moveOffset) + "px)";
      }

      const outerSlide = slides[outerIndex] as HTMLElement;

      const currTransl = Number(
        outerSlide.style.transform.split("(")[1].split("px")[0]
      );

      outerSlide.style.transform =
        "translateX(" + (currTransl + moveOffset * amount) + "px)";
      outerSlide.style.opacity = "0";
    }
  }, []);

  return (
    <section
      id="slider-lrs"
      class="relative h-auto container-sm rounded-2xl shadow-[0px_0px_40px_10px_#0000006e]"
    >
      <div
        id="carousel-container"
        class="w-full h-auto relative overflow-hidden rounded-2xl group"
      >
        <ul id="carousel" class="flex overflow-hidden p-0 m-0 animate">
          <img data-slide="1" src="LRS/LRS_4.png" />
          <img data-slide="2" src="LRS/LRS_2.png" />
          <img data-slide="3" src="LRS/LRS_3.png" />
        </ul>
        <ButtonPrevSlide />
        <ButtonNextSlide />
      </div>
    </section>
  );
}
