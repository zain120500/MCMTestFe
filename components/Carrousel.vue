<template>
    <div class="flex justify-between items-center">
        <h5 class="text-white text-4xl my-5 font-bold">Popular Genres</h5>
        <div class="flex gap-2">
            <button @click="prevSlide" class="btn btn-outline btn-accent btn-sm rounded-3xl hover:btn-accent disabled:opacity-50">
               <Icon name="mingcute:left-line" class="text-xl"/>
               
            </button>
            <button @click="nextSlide" class="btn btn-outline btn-accent btn-sm rounded-3xl hover:btn-accent disabled:opacity-50">
                <Icon name="mingcute:right-line" class="text-xl"/>
            </button>
        </div>
    </div>

    <div class="carousel-container relative w-full overflow-hidden">
        <!-- Slide Section -->
        <div class="carousel-slides flex transition-transform duration-500" :style="carouselStyles">
            <div v-for="(card, index) in cards" :key="index" class="carousel-card flex-shrink-0 h-44 md:h-auto w-1/2 md:w-1/4 p-2 cursor-pointer">
                <div class="card bg-accent hover:drop-shadow-lg hover:opacity-50 text-white shadow-lg rounded-lg overflow-hidden"
                @click="() => { dashboardService.selectedGenre = (card.title == 'All') ? '' : card.title }">
                    <img :src="card.image" alt="Card Image" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h2 class="text-center text-lg font-semibold">{{ card.title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const dashboardService = useDashboard();

// Array of cards with image, title, and description
const cards = ref([
    { image: "https://www.mmobomb.com/g/1178/thumbnail.jpg", title: 'MOBA' },
    { image: "https://www.mmobomb.com/g/1113/thumbnail.jpg", title: 'Shooter' },
    { image: "https://www.mmobomb.com/g/157/thumbnail.jpg", title: 'Sports' },
    { image: "https://www.mmobomb.com/g/1184/thumbnail.jpg", title: 'Strategy' },
    { image: "https://www.mmobomb.com/g/16/thumbnail.jpg", title: 'MMO' },
    { image: "https://www.mmobomb.com/g/1120/thumbnail.jpg", title: 'Battle Royale' },
    { image: "https://www.mmobomb.com/g/1122/thumbnail.jpg", title: 'Fighting' },
    { image: "https://www.mmobomb.com/g/1176/thumbnail.jpg", title: 'Action Game' }
]);

// Current slide index
const currentSlide = ref(0);

// Number of cards per slide (default is 4 for larger screens)
const cardsPerSlide = ref(4);

// Function to update the number of cards per slide based on window width
const updateCardsPerSlide = () => {
    cardsPerSlide.value = window.innerWidth < 768 ? 2 : 4;
};

// Call the update function on mounted and window resize
onMounted(() => {
    updateCardsPerSlide();  // Set the correct number of cards at load
    window.addEventListener('resize', updateCardsPerSlide);  // Adjust on resize
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateCardsPerSlide);
});

// Handle previous slide
const prevSlide = () => {
    currentSlide.value = currentSlide.value > 0
        ? currentSlide.value - 1
        : Math.ceil(cards.value.length / cardsPerSlide.value) - 1;
};

// Handle next slide
const nextSlide = () => {
    currentSlide.value = currentSlide.value < Math.ceil(cards.value.length / cardsPerSlide.value) - 1
        ? currentSlide.value + 1
        : 0;
};

// Calculate the carousel translation
const carouselStyles = computed(() => {
    return `transform: translateX(-${currentSlide.value * (100 / cardsPerSlide.value)}%)`;
});
</script>

<style scoped>
.carousel-container {
    max-width: 100%;
    margin: auto;
}

.carousel-slides {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-card {
    flex-shrink: 0;
    width: 50%; /* 2 cards on smaller screens */
}

@media (min-width: 768px) {
    .carousel-card {
        width: 25%; /* 4 cards on medium and larger screens */
    }
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
</style>
