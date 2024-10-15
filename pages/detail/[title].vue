<template>
    <div v-if="init" class=" flex items-center justify-center w-full h-full text-white">
        <div class="text-center p-5 text-accent font-3xl">
            <span class="loading loading-spinner text-center loading-lg"></span>
            <p class="text-white">LOADING...</p>
        </div>
    </div>

    <div v-else class="p-5 rounded-xl text-white">
        <div @click="() => { navigateTo('/dashboard') }"
            class="cursor-pointer text-2xl items-center hover:text-accent hover:scale-120">
            <Icon name="mingcute:left-line" /> Home
        </div>
        <h5 class="text-white text-4xl my-5 font-bold">{{ dashboardService.activeData.title }}</h5>
        <div class=" gap-5">
            <div class="flex-1">
                <div class="md:flex justify-center gap-5">
                    <img class=" w-[100vh] rounded-3xl" :src="dashboardService.activeData.thumbnail" alt="">

                    <div class="my-5 md:my-0 md:w-3/12">
                        <div>Genre : <span class="bg bg-accent px-2 text-white rounded-3xl">{{
                            dashboardService.activeData.genre
                        }}</span></div>
                        <hr class="my-2">
                        <div>Publisher : {{ dashboardService.activeData.publisher }}</div>
                        <hr class="my-2">
                        <div>Developer : {{ dashboardService.activeData.developer }}</div>
                        <hr class="my-2">
                        <div>Release Date : {{ formatDate(dashboardService.activeData.release_date) }}</div>
                        <hr class="my-2">
                        <div>Platform : {{ dashboardService.activeData.platform }}</div>
                    </div>

                </div>

            </div>


            <div class="my-5">
                {{ dashboardService.activeData.short_description }}

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim nibh vel accumsan euismod. Cras
                condimentum placerat ex, sed suscipit tellus ornare et. Fusce posuere magna ut lorem porttitor, eu
                ornare justo ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Pellentesque maximus neque quam, et imperdiet arcu finibus quis. Donec leo tellus, efficitur
                ut risus et, maximus bibendum dolor. Ut vitae velit justo. Pellentesque risus nibh, interdum a ornare
                at, iaculis malesuada arcu. Nunc porttitor consectetur consequat. Sed sit amet ex nec elit aliquam
                finibus a id ante. Vestibulum ornare erat nec dui tincidunt malesuada. Aliquam eget quam sit amet dolor
                ultrices tincidunt at quis risus. Fusce velit leo, euismod eu nunc id, lacinia fringilla sem. Sed id
                eleifend justo. Phasellus posuere diam id ligula consectetur, eu sodales sapien viverra. Curabitur
                dignissim leo sed diam venenatis malesuada. Vivamus tristique risus risus, vel scelerisque ligula.
            </div>

            <div class="my-3">
                <div class="text-xl font-semibold my-3">Follow Us</div>
                <div class="bg bg-white/20 rounded-3xl flex justify-center gap-5 p-5">
                    <a :href="dashboardService.activeData.game_url">
                        <Icon name="streamline:web-solid"
                            class="text-3xl text-muted-foreground hover:text-accent hover:scale-120" />
                    </a>
                    <a href="">
                        <Icon name="mdi:twitter" class="text-3xl text-muted-foreground hover:text-accent hover:scale-120" />
                    </a>
                    <a href="">
                        <Icon name="ri:instagram-fill"
                            class="text-3xl text-muted-foreground hover:text-accent hover:scale-120" />
                    </a>
                    <a href="">
                        <Icon name="ic:baseline-discord"
                            class="text-3xl text-muted-foreground hover:text-accent hover:scale-120" />
                    </a>
                </div>
            </div>

            <div class="my-3 ">
                <div class="text-xl font-semibold my-3">System Requirements</div>
                <div class="bg bg-white/20 px-10 rounded-3xl grid grid-cols-2 gap-5 p-5">
                    <div>
                        <div class="font-semibold text-white">
                            Minimum
                        </div>
                        <div class="my-3">
                            Os Version
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            CPU
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            Memory
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            GPU
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            DirextX
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            Storage
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-white">
                            Recomended
                        </div>
                        <div class="my-3">
                            Os Version
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            CPU
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            Memory
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            GPU
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            DirextX
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                        <div class="my-3">
                            Storage
                            <br>
                            <div class="text-white">xxx</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- 
        <pre>
            {{ dashboardService.activeData }}
        </pre> -->
    </div>
</template>

<script lang="ts" setup>
import { formatDate } from "~/utils/helper";

import { onMounted, ref } from 'vue';
const dashboardService = useDashboard()
const route = useRoute()

const init = ref(false)

onMounted(async () => {
    init.value = true
    await dashboardService.getData()
    await dashboardService.getDetail(route.params.title)
    init.value = false
});
</script>
