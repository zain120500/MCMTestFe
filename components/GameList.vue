<template>
    <div class="md:my-5 md:flex md:gap-5">
        <div class="flex-1">
            <div v-if="dashboardService.paginatedGames.length == 0"
                class="flex justify-center text-accent text-3xl font-semibold"> Game Not Found</div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 cursor-pointer">

                <div v-for="item of dashboardService.paginatedGames" @click="detail(item.title)"
                    class="w-full max-w-sm bg-[#121212] hover:opacity-50 rounded-lg shadow ">
                    <div>
                        <img class="rounded-t-lg" :src="item.thumbnail" alt="product image" />
                    </div>
                    <div class="px-5 pb-5">
                        <p class="my-2 text-slate-400">{{ item.genre }}</p>
                        <div>
                            <h5 class="text-xl font-semibold tracking-tight text-white">{{ item.title }}
                            </h5>
                        </div>
                        <div class="text-slate-300">{{ formatDate(item.release_date) }}</div>
                    </div>
                </div>


            </div>

            <div class="flex justify-center my-4 text-white ">
                <button @click="dashboardService.setCurrentPage(dashboardService.currentPage - 1)"
                    :disabled="dashboardService.currentPage === 1"
                    class="btn btn-outline btn-accent btn-sm rounded-3xl hover:btn-accent disabled:opacity-50">
                    &lt;
                </button>

                <span class="flex items-center">
                    <!-- First Page -->
                    <button @click="dashboardService.setCurrentPage(1)" :class="{
                        'bg-accent text-white': dashboardService.currentPage === 1,
                        '': dashboardService.currentPage !== 1
                    }" class="button btn-sm rounded-3xl hover:bg-accent">
                        1
                    </button>

                    <!-- Ellipsis Before -->
                    <span v-if="dashboardService.showLeftEllipsis" class="mx-2">...</span>

                    <!-- Page Numbers in the middle -->
                    <button v-for="page in dashboardService.pagesToShow" :key="page"
                        @click="dashboardService.setCurrentPage(page)" :class="{
                            'bg-accent text-white': dashboardService.currentPage === page,
                            '': dashboardService.currentPage !== page
                        }" class="button btn-sm mx-1 rounded-3xl hover:bg-accent">
                        {{ page }}
                    </button>

                    <!-- Ellipsis After -->
                    <span v-if="dashboardService.showRightEllipsis" class="mx-2">...</span>

                    <!-- Last Page -->
                    <button v-if="dashboardService.totalPages > 1"
                        @click="dashboardService.setCurrentPage(dashboardService.totalPages)" :class="{
                            'bg-accent text-white': dashboardService.currentPage === dashboardService.totalPages,
                            '': dashboardService.currentPage !== dashboardService.totalPages
                        }" class="button btn-sm rounded-3xl hover:bg-accent">
                        {{ dashboardService.totalPages }}
                    </button>
                </span>

                <button @click="dashboardService.setCurrentPage(dashboardService.currentPage + 1)"
                    :disabled="dashboardService.currentPage === dashboardService.totalPages"
                    class="btn btn-outline btn-accent btn-sm rounded-3xl hover:btn-accent disabled:opacity-50">
                    &gt;
                </button>
            </div>
        </div>
        <div class="hidden lg:block text-white w-3/12">
            Filters

            <hr class="my-2">

            <label class="text-white  input input-bordered bg-white/10 input-sm rounded-2xl flex items-center gap-2 w-64">
                <input v-model="dashboardService.searchText" type="text" class="grow " placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
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
        </div>
    </div>
</template>


<script setup lang="ts">
import { formatDate } from "~/utils/helper";
const dashboardService = useDashboard()
const isDropdownOpen = ref(false);
const isDropdownOpen2 = ref(false);

const init = async () => {
    await dashboardService.getData()
    console.log(dashboardService.paginatedGames);

}
const clearFilter = () => {
    dashboardService.selectedGenre = ''
    dashboardService.selectedPlatform = ''
    dashboardService.currentPage = 1
    dashboardService.itemsPerPage = 40; // Adjust as needed
    dashboardService.searchText = '' // Variabel untuk pencarian teks

}
const detail = (title: string) => {
    navigateTo("/detail/" + title)
}

onMounted(() => {
    init()
});
</script>