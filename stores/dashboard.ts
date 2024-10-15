import { defineStore } from "pinia";
import gameService from "~/services/game";
import { toast } from "vue3-toastify";
import { isNullOrEmpty, removeThousandSeparator, formatDate } from "~/utils/helper";
import axios from 'axios';
import dummyData from '~/data/dummy/game.json';

export const useDashboard = defineStore("dashboard", () => {
    const data = ref<any>([])
    const dataAll = ref<any>([])
    const activeData = ref<any>({})
    const loading = ref(false)
    const genereOpt = ref(
        [
            "All",
            "Action Game",
            "ARPG",
            "Battle Royale",
            "Card Game",
            "Fighting",
            "MMO",
            "MMOFPS",
            "MMORPG",
            "MMOTPS",
            "MOBA",
            "Shooter",
            "Strategy",
            "Sports",
        ]
    )
    const platformOpt = ref(
        [
            "All",
            "PC (Windows)",
        ]
    )

    const getData = async () => {
        try {
            loading.value = true;
            const response = await gameService.GET_DATA();
            data.value = await response.data
            dataAll.value = await response.data

            loading.value = false;
        } catch (error: any) {
            data.value = await dummyData
            dataAll.value = await dummyData

            loading.value = false;
            console.log(error);
        }
    };

    const selectedGenre = ref('');
    const selectedPlatform = ref('');
    const currentPage = ref(1);
    const itemsPerPage = 40; // Adjust as needed
    const searchText = ref(''); // Variabel untuk pencarian teks

    // Filtering the games
    const filteredGames = computed(() => {
        return data.value.filter((game: any) => {
            currentPage.value = 1
            return (
                (!selectedGenre.value || game.genre === selectedGenre.value) &&
                (!selectedPlatform.value || game.platform === selectedPlatform.value) &&
                (!searchText.value ||
                    game.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
                    game.short_description.toLowerCase().includes(searchText.value.toLowerCase())
                )
            );
        });
    });

    // Total pages for pagination
    const totalPages = computed(() => Math.ceil(filteredGames.value.length / itemsPerPage));

    // Show the correct range of pages
    const pagesToShow = computed(() => {
        const maxVisiblePages = 3; // Pages to show in between
        const pages = [];

        // Determine starting point
        const start = Math.max(currentPage.value - 1, 2);
        const end = Math.min(start + maxVisiblePages - 1, totalPages.value - 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    });

    // Check whether to show ellipsis
    const showLeftEllipsis = computed(() => currentPage.value > 3);
    const showRightEllipsis = computed(() => currentPage.value < totalPages.value - 2);

    // Paginated games
    const paginatedGames = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return filteredGames.value.slice(start, start + itemsPerPage);
    });

    // Update filters and reset to page 1
    const updateFilters = () => {
        currentPage.value = 1; // Reset to page 1 on filter change
    };

    // Set current page
    const setCurrentPage = (page: number) => {
        if (page < 1 || page > totalPages.value) return; // Boundary check
        currentPage.value = page;
    };

    const getDetail = (title: string) => {

       let idx =  data.value.findIndex((game: any) => {
            const formattedTitle = game.title.toLowerCase().replace(/\s+/g, ''); // Mengubah menjadi lowercase dan hilangkan spasi
            const formattedSearchText = title.toLowerCase().replace(/\s+/g, ''); // Hilangkan spasi dan lowercase pada searchText

            return formattedTitle.includes(formattedSearchText); 
             // Cocokkan pencarian
        });

        activeData.value = data.value[idx]
      
       console.log( data.value[idx]);
        
    }

    return {
        getData,
        data,
        paginatedGames,
        updateFilters,
        setCurrentPage,
        totalPages,
        currentPage,
        selectedGenre,
        selectedPlatform,

        pagesToShow,
        showLeftEllipsis,
        showRightEllipsis,
        genereOpt,
        searchText,
        platformOpt,
        getDetail,
        activeData
    }
});
