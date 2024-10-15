<template>
    <div class="sticky top-0 z-30">
        <div class="bg bg-[#1a1a1a] flex items-center">
            <div class="container">
                <div class="flex items-center h-[60px] md:h-[65px]">
                    <div class="flex items-center flex-1 ">
                        <div class="flex-1 px-1 md:px-3">
                            <label
                                class="text-white  input input-bordered bg-white/10 input-sm rounded-2xl flex items-center gap-2 w-64">
                                <input v-model="dashboardService.searchText" type="text" class="grow   "
                                    placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                    class="h-4 w-4 opacity-70">
                                    <path fill-rule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </label>
                        </div>
                        <div class="btn btn-sm btn-accent text-white" @click="()=>{navigateTo('/input')}">
                             <div class="hidden md:block">
                                <Icon name="mdi:add-bold"/> Add Game
                             </div> 
                             <div class="md:hidden"><Icon name="mdi:add-bold"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script setup>
const dashboardService = useDashboard()
</script>