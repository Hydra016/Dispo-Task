<template>
    <div class="p-5 md:p-0 flex  justify-between md:justify-start">
        <div class="md:pr-5 md:border-r-2 md:border-slate-200">
            <span class="text-secondary-btn-color font-semibold">Active</span>
            <span class="block font-semibold mb-3">Chauffeur</span>
            <img src="../../public/chauffer.jpg" class="chauffer mb-3 rounded-2xl" />
            <p class="mb-1 font-medium">Chris Hemsworth</p>
            <div class="flex">
                <img src="../../public/star.png" class="item-img mr-2" />
                <span class="font-medium">4.8</span>
            </div>
        </div>
        <div class="md:pl-5">
            <div class="flex mb-1">
                <img src="../../public/finland.png" class="w-6 mr-2" />
                <img src="../../public/france.png" class="w-6 mr-2" />
                <img src="../../public/germany.png" class="w-6" />
            </div>
            <div class="mb-3">
                <span class="text-gray-400 text-sm">
                    Name of carrier
                </span>
                <span class="block font-medium">
                    Bambam SIA
                </span>
            </div>
            <div>
                <div class="mb-3">
                    <span class="text-gray-400 text-sm">
                        National reg. nb.
                    </span>
                    <span class="block font-medium">
                        "Miranda"
                    </span>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                    <img src="../../public/call.png" class="w-5 py-2" />
                </button>
            </div>
        </div>
    </div>
    <div class="p-2 md:p-0 mt-10">
        <div class="flex items-start md:items-center mb-3">
            <div class="bg-blue-500 rounded-full p-1 mr-3 flex">
                <img class="w-3" src="../../public/check.png" />
            </div>
            <span class="font-medium mr-2 text-sm">Waiting chauffer - <span class="text-gray-400">14.06.2022 at
                    12:32</span></span>
        </div>
        <div class="flex items-center mb-3">
            <div class="bg-blue-500 rounded-full p-1 mr-3 flex">
                <img class="w-3" src="../../public/check.png" />
            </div>
            <span class="font-medium mr-2 text-sm">Chauffer assigned - <span class="text-gray-400">14.06.2022 at
                    12:32</span></span>
        </div>
        <div class="flex items-center mb-3">
            <div class="bg-blue-500 rounded-full p-1 mr-3 flex">
                <img class="w-3" src="../../public/check.png" />
            </div>
            <span class="font-medium mr-2 text-sm">Started - <span class="text-gray-400">14.06.2022 at
                    12:32</span></span>
        </div>
        <div class="flex items-center mb-3">
            <div class="bg-gray-300 rounded-full p-1 mr-3 flex">
                <img class="w-3" src="../../public/check.png" />
            </div>
            <span class="font-medium mr-2 text-sm">Trip in progress</span>
        </div>
        <div class="flex items-center mb-3">
            <div class="bg-gray-300 rounded-full p-1 mr-3 flex">
                <img class="w-3" src="../../public/check.png" />
            </div>
            <span class="font-medium mr-2 text-sm">Finished</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChaufferDetails',
}
</script>

<style>
.container {
    border: 1px solid red;
}
</style>