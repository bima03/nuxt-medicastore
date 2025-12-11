<template>
    <div class="embla">
        <div class="embla__viewport" ref="viewportRef">
            <div class="embla__container">
                <div 
                class="embla__slide" 
                v-for="(img, i) in slides" 
                :key="i"
                >
                    <div class="embla__slide__inner">
                        <img 
                        :src="img" 
                        loading="lazy"
                        class="embla__slide__img" 
                        :ref="(el) => slideImgs[i] = el"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Arrows -->
        <button class="embla__btn embla__btn--prev" @click="scrollPrev">‹</button>
        <button class="embla__btn embla__btn--next" @click="scrollNext">›</button>

        <!-- Dots -->
        <div class="embla__dots">
            <button
                v-for="(dot, index) in dots"
                :key="index"
                class="embla__dot"
                :class="['dot', { active: selectedIndex === index }]"
                @click="scrollTo(index)"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const slides = [
    'https://medicastore.com/images/slide/RdLDG_09-03-2024.webp',
    'https://medicastore.com/images/slide/smUY2_09-03-2024.webp',
    'https://medicastore.com/images/slide/PhstI_09-03-2024.webp',
]

const viewportRef = ref(null)
const embla = ref(null)
const slideImgs = ref([])

const dots = ref([])
const selectedIndex = ref(0)

onMounted(() => {
    embla.value = EmblaCarousel(viewportRef.value, {
        loop: true,
        align: 'center',
        skipSnaps: false,
    }, [Autoplay({ delay: 3000 })])

    dots.value = embla.value.slideNodes().map(() => 0)

    // Parallax Animation
    const parallax = () => {
        const progress = embla.value.scrollProgress()

        embla.value.slidesInView(true).forEach((i) => {
        const diffToTarget = embla.value.scrollSnapList()[i] - progress
        const translate = diffToTarget * 50  // Adjust intensity
        slideImgs.value[i].style.transform = `translateX(${translate}px)`
        })
    }

    embla.value.on('scroll', parallax)
    parallax()

    // const onSelect = () => {
    //     selectedIndex.value = embla.value.selectedScrollSnap()
    // }

    // embla.value.on('select', onSelect)
    // onSelect()
    const updateOpacity = () => {
    selectedIndex.value = embla.value.selectedScrollSnap()

    const slideNodes = embla.value.slideNodes()
    slideNodes.forEach((slide, index) => {
        slide.classList.remove('is-selected')
        if (index === selectedIndex.value) {
            slide.classList.add('is-selected')
        }
        })
    }

    embla.value.on('select', updateOpacity)
    updateOpacity()
})

const scrollPrev = () => embla.value?.scrollPrev()
const scrollNext = () => embla.value?.scrollNext()
const scrollTo = (index) => embla.value?.scrollTo(index)
</script>

<style>
/* Wrapper */
.embla {
    /* max-width: 900px; */
    margin: auto;
    position: relative;
}

/* Viewport */
.embla__viewport {
    overflow: hidden;
}

/* Container */
.embla__container {
    display: flex;
    gap: 20px;
    padding: 20px 0;
}

/* Slide layout */
.embla__slide {
    position: relative;
    flex: 0 0 70%; /* Set slide width */
    min-width: 50%;
    opacity: 0.3;                  /* default: blur/opacity */
    transition: opacity .5s ease;  /* smooth */
}

.embla__slide.is-selected {
  opacity: 1;                    /* tengah jadi jelas */
}

/* Rounded slide card */
.embla__slide__inner {
    overflow: hidden;
    border-radius: 20px;
}

/* Image with parallax support */
.embla__slide__img {
    width: 100%; /* Bigger for parallax */
    height: auto;
    display: block;
    transition: transform 0.3s ease-out;
}

/* Buttons */
.embla__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    background: #0008;
    color: white;
}
.embla__btn--prev { left: 10px; }
.embla__btn--next { right: 10px; }

.embla__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.embla__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: #888;
    cursor: pointer;
}
.dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #999;
    background: transparent;
}

.dot.active {
    background: #333;
}
</style>
