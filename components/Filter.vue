<template>
    <div class="flex justify-between items-center text-white">
        <h5 class="text-white text-4xl my-5 font-bold">Browse</h5>
        <div class="lg:hidden hover:text-accent cursor-pointer" @click="() => { filter = true }">
            <Icon name="mdi:filter" class="text-xl" /> Filters
        </div>


        <!-- Sidebar Overlay -->
        <div v-if="filter" class="text-white fixed inset-0 z-40 bg-black bg-opacity-50" @click="() => { filter = false }">
        </div>

        <!-- Sidebar Content -->
        <div class="fixed top-0 right-0 h-full z-50 bg-[#1a1a1a] text-white transform transition-transform duration-300"
            :class="{
                'translate-x-full': !filter,
                'translate-x-0': filter,
                'w-full sm:w-full md:w-3/5': true
            }">
            <!-- Sidebar Header -->
            <div class="flex justify-between items-center p-4 border-b border-gray-600">
                <h2 class="text-xl font-semibold">Filters</h2>
                <button @click="() => { filter = false }" class="text-xl font-bold">&times;</button>
            </div>

            <!-- Sidebar Body (Put your filter content here) -->
            <div class="p-4 overflow-y-auto h-full">
                <label
                    class="text-white  input input-bordered bg-white/10 input-sm rounded-2xl flex items-center gap-2 w-64">
                    <input v-model="dashboardService.searchText" type="text" class="grow " placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                        class="h-4 w-4 opacity-70">
                        <path fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </label>

                <div class="flex justify-between cursor-pointer" @click="() => { isDropdownOpen = !isDropdownOpen }">
                    <div :class="isDropdownOpen && 'text-white font-semibold'">Genre</div>
                    <div>
                        <Icon :name="isDropdownOpen ? 'mingcute:up-fill' : 'mingcute:down-fill'"
                            class="items-center text-3xl text-white" />
                    </div>
                </div>
                <div v-if="isDropdownOpen">
                    <div v-for="item of dashboardService.genereOpt"
                        :class="(dashboardService.selectedGenre == item) && 'text-white font-semibold bg-accent p-2'"
                        class="my-1 cursor-pointer"
                        @click="() => { dashboardService.selectedGenre = (item == 'All') ? '' : item }">
                        {{ item }}
                    </div>
                </div>

                <hr class="my-2">

                <div class="flex justify-between cursor-pointer" @click="() => { isDropdownOpen2 = !isDropdownOpen2 }">
                    <div :class="isDropdownOpen2 && 'text-white'">Platform</div>
                    <div>
                        <Icon :name="isDropdownOpen2 ? 'mingcute:up-fill' : 'mingcute:down-fill'"
                            class="items-center text-3xl text-white" />
                    </div>
                </div>
                <div v-if="isDropdownOpen2">
                    <div v-for="item of dashboardService.platformOpt"
                        :class="(dashboardService.selectedPlatform == item) && 'text-white font-semibold bg-accent p-2'"
                        class="my-1 cursor-pointer"
                        @click="() => { dashboardService.selectedPlatform = (item == 'All') ? '' : item }">
                        {{ item }}
                    </div>
                </div>
                <button class="btn hover:opacity-80 btn-accent text-white w-full" @click="clearFilter()">
                    Clear Filter
                </button>
                <div class="bg bg-ghost h-52">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const dashboardService = useDashboard()
const isDropdownOpen = ref(false);
const isDropdownOpen2 = ref(false);
const filter = ref(false);

const init = async () => {
    await dashboardService.getData()
}
const clearFilter = () => {
    dashboardService.selectedGenre = ''
    dashboardService.selectedPlatform = ''
    dashboardService.currentPage = 1
    dashboardService.itemsPerPage = 40; // Adjust as needed
    dashboardService.searchText = '' // Variabel untuk pencarian teks

}

onMounted(() => {
    init()
});
</script>