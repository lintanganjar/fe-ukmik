import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { json } from "react-router-dom";

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef((
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const goToSlide = React.useCallback((index) => {
    api?.scrollTo(index, false)
    return className="bg-blue-400"
  },[api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  return (
    (<CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        goToSlide
      }}>
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>)
  );
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation, numNavigations, currentItem, goToItem } = useCarousel()
  const [currentIndex, setCurrenIndex] = React.useState(currentItem)
  const updateIndex =(index)=>{
    setCurrentIndex(index);
    goToItem(index);
  }
  return (
    (<div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        
        {...props} />
         
    </div>)
  );
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    (<div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-0" : "pt-4",
        className
      )}
      {...props} />)
  );
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute mx-2  h-[7px] w-[70px] rounded-full", orientation === "vertikal"
        ? "-left-12 top-1/2 "
        : "-bottom-12 right-1/2  rotate-180", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <div className="nav3 rounded-sm bg-[#A2D7FF] w-[70px] h-[7px]">
      </div>
      <span className="sr-only">Previous slide</span>
    </Button>)
  );
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute mx-2 h-[7px] w-[70px] ", orientation === "vertikal"
        ? "-right-12 top-1/2 "
        : "-bottom-12 left-1/2  rotate-180", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <div className="nav3 rounded-sm bg-[#A2D7FF] w-[70px] h-[7px]">
      </div>
      <span className="sr-only">Next slide</span>
    </Button>)
  );
})
CarouselNext.displayName = "CarouselNext"

const CarouselControl = React.forwardRef(({ className, variant = "outline", size = "icon", items, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext, goToSlide, api: carouselApi } = useCarousel();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  React.useEffect(() => {
    if (carouselApi) {
      carouselApi.on("select", () => {
        const currentIndex = carouselApi.selectedScrollSnap();
        setSelectedItemIndex(currentIndex);
      });
    }
    return () => {
      carouselApi?.off("select");
    };
  }, [carouselApi]);
  return (
    <>
    {items.map((item, index)=> (
      
      <Button
      key={index}
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "mx-2 h-[7px] w-[70px] bg-black",
        orientation === "vertikal"
          ? `-right-12 top-1/2 bg-primary-3 `
          : `-bottom-12 left-1/2 bg-primary-3`,
        className, {
          'bg-primary-3': index === selectedItemIndex, 
          'bg-[#A2D7FF]': index !== selectedItemIndex,
        },
        
      )}
      
      onClick={() => {
        goToSlide(index, true);
        setSelectedItemIndex(index); 
      }}
      {...props}>
      <div className="nav3 rounded-sm w-[70px] h-[7px] hover:bg-primary-3 duration-700">
      </div>
      <span className="sr-only">Next slide</span>
    </Button>
    ))}
    </>
  )
})

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselControl };
