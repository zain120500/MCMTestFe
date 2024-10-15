<template>
    <div class="p-5 text-white">

        <div @click="() => { navigateTo('/dashboard') }"
            class="cursor-pointer text-2xl items-center hover:text-accent hover:scale-120">
            <Icon name="mingcute:left-line" /> Home
        </div>
        <h5 class="text-white text-4xl my-5 font-bold">Add Games</h5>

        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Title :
            </div>
            <input v-model="input.title" type="text" placeholder="Title"
                class="input input-sm input-bordered w-full max-w-xs bg-white/20" :class="errors.title && 'input-accent'" />
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.title }}</div>
        </div>

        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Developer :
            </div>
            <input v-model="input.developer" type="text" placeholder="Developer"
                class="input input-sm input-bordered w-full max-w-xs bg-white/20"
                :class="errors.developer && 'input-accent'" />
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.developer }}</div>
        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Publisher :
            </div>
            <input v-model="input.publisher" type="text" placeholder="Publisher"
                class="input input-sm input-bordered w-full max-w-xs bg-white/20"
                :class="errors.publisher && 'input-accent'" />
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.publisher }}</div>
        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Game Url :
            </div>
            <input v-model="input.game_url" type="text" placeholder="Game Url"
                class="input input-sm input-bordered w-full max-w-xs bg-white/20"
                :class="errors.game_url && 'input-accent'" />
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.game_url }}</div>
        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Genre :
            </div>
            <div class="form-control grid grid-cols-2 md:grid-cols-3 ">
                <div v-for="item of dashboardService.genereOpt.filter(item => item != 'All')">
                    <label class="cursor-pointer flex gap-2">
                        <input v-model="input.genre" id="checkboxKelengkapan" type="checkbox" name="checkbox-kelengkapan"
                            :value="item" class="checkbox checkbox-accent checkbox-sm" />
                        <span class="label-text text-white">{{ item }}</span>
                    </label>
                </div>
            </div>
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.genre }}</div>
        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Platform :
            </div>
            <select v-model="input.platform" class="select select-bordered w-full max-w-xs select-sm bg-white/20"
                :class="errors.platform && 'select-accent'">
                <option v-for="item of dashboardService.platformOpt.filter(item => item != 'All')">{{ item }}</option>
            </select>
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.platform }}</div>
        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Profile Url :
            </div>
            <input v-model="input.profile_url" type="text" placeholder="Link"
                class="input input-sm input-bordered w-full max-w-xs bg-white/20"
                :class="errors.profile_url && 'input-accent'" />
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.profile_url }}</div>
        </div>

        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Release Date :
            </div>
            <input v-model="input.release_date" type="date" placeholder="Release Date"
                class="input input-sm input-bordered w-full max-w-xs bg-white/20"
                :class="errors.release_date && 'input-accent'" />
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.release_date }}</div>
        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Thumbnail :
            </div>
            <div class="w-full md:ml-10">
                <DragDropImage :file="input.thumbnail" :id="foto.id" :index="foto.index" @photoTaken="photoTaken"
                    @remove="remove"></DragDropImage>

                <div class="text-accent text-xs m-2 md:m-0">{{ errors.thumbnail }}</div>
            </div>

        </div>
        <div class="text-white md:flex items-center gap-2 my-3">
            <div class="w-44 my-2 md:my-0">
                Description :
            </div>
            <textarea v-model="input.short_description" class="w-full md:w-1/3 textarea textarea-bordered  bg-white/20"
                placeholder="  Description" :class="errors.short_description && 'textarea-accent'"></textarea>
            <div class="text-accent text-xs my-2 md:my-0">{{ errors.short_description }}</div>
        </div>

        <div class="btn btn-accent text-white" @click="submit()">
            Submit
        </div>

        <ContainersBaseModalConfirm id="mConfirm" class-panel="w-11/12 md:w-2/3 max-w-5xl" title="Submitted">
            <div class="text-black">
                Game was added !
            </div>
            <div class="flex justify-end gap-2">
                <button class="btn btn-accent btn-md" @click="navigateTo('/dashboard')">{{'Oke' }}</button>
            </div>
        </ContainersBaseModalConfirm>
    </div>
</template>

<script lang="ts" setup>
import DragDropImage from '~/components/webCam/DragDropImage.vue';
const dashboardService = useDashboard()
const mdl = useUtilStore()
const foto = ref(
    {
        index: 0,
        id: 1,
        namaFoto: "Foto KTP",
        foto: null,
        fotoBase64: null,
        require: true
    }
)

const input = ref<any>({
    developer: '',
    game_url: '',
    genre: [],
    platform: '',
    profile_url: '',
    publisher: '',
    release_date: '',
    short_description: '',
    thumbnail: null,
    title: '',
})

import * as Yup from 'yup'

const schema = Yup.object().shape({
    developer: Yup.string().required('Developer is required'),
    game_url: Yup.string().required('Game Url is required'),
    genre: Yup.array().min(1).required('Genre is required'),
    platform: Yup.string().required('Platform is required'),
    profile_url: Yup.string().required('Profile url is required'),
    publisher: Yup.string().required('Publisher is required'),
    release_date: Yup.string().required('Release date is required'),
    short_description: Yup.string().required('Short description is required'),
    title: Yup.string().required('Title is required'),
    thumbnail: Yup.string().required('Thumbnail is required')
})
const errors: any = ref({})


const validateForm = async () => {
    errors.value = {}

    return schema.validate(input.value, { abortEarly: false })
        .then(() => {
            return true
        })
        .catch((validationErrors: any) => {
            errors.value = validationErrors.inner.reduce((acc: any, error: any) => {
                acc[error.path] = error.message;
                return acc;
            }, {});

            return false
        });
}

const photoTaken = (file: any, index: any) => {
    input.value.thumbnail = file
}

const remove = (index: any) => {
    input.value.thumbnail = null
}

const submit = async () => {
   
    if (await validateForm()) {
        mdl.modalToggleConfirm('mConfirm')
    }
}

</script>