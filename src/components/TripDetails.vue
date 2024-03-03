<template>
    <div>
        <div
            class="flex md:flex-row flex-col items-center md:items-start justify-center py-10 md:py-0 md:pb-10 border-b-2 border-slate-200">
            <button
                class="btn-custom bg-slate-950 md:mr-3 md:mb-0 mb-2 text-sm hover:bg-slate-800 text-white font-medium py-2 px-8 rounded-full">
                Trip details
            </button>
            <button
                class="btn-custom font-medium border-solid text-sm border-2 hover:bg-slate-100 border-gray-300 py-2 px-8 rounded-full ">
                Return trip details
            </button>
        </div>
        <div class="flex md:justify-between md:items-center py-5 px-5">
            <button class="rounded-full hover:bg-gray-300 bg-gray-200 p-2 hidden md:block w-0.5/5">
                <img class="w-2 md:w-5" src="../../public/back.png" />
            </button>
            <div class="flex btns-mobile md:w-full overflow-hidden md:ml-5 md:p-2 md:p-0">
                <button v-for="(date, index) in dates" :key="index"
                    :class="{ 'border-slate-200': !date.isSelected, 'bg-blue-500': date.isSelected }"
                    class="border-2 px-5 py-2 rounded-3xl mr-2 text-nowrap">
                    <span class="text-xs ">
                        {{ date.day }} {{ date.month }}
                    </span>
                </button>
            </div>
            <div class="hidden md:flex shadow-element pl-5 h-20 flex items-center">
                <button class="rounded-full hover:bg-gray-300 bg-gray-200 p-2 w-0.5/5">
                    <img class="w-2 md:w-5" src="../../public/next.png" />
                </button>
            </div>
        </div>
       <div class="md:py-5">
        <div v-for="location in locations">
        <div class="flex md:items-center mb-5 ">
            <div class="relative">
            <div class="z-10 bg-slate-50 mt-5 md:mt-0">
                <img src="../../public/location.png" class="md:w-5 w-8 mr-2 z-10" />
            </div>
            <div v-if="!location.isDestination" class="line"></div>
        </div>
        <div class="flex justify-between w-full md:flex-row flex-col md:mb-0 mb-10">
            <span class="text-xs md:text-sm font-semibold mb-2 md:mb-0">{{ location.airport }}, <span class="truncate text-gray-400 mt-2 md:mb-0">{{ location.street }}</span></span>
            <div class="flex items-center" v-if="location.arrival">
                <img src="../../public/clock.png" class="w-5 mr-2" />
                <span class="text-xs md:text-sm font-semibold">Arrive: {{ location.arrival }}</span> 
            </div>
            <div class="flex items-center mt-1 md:mt-0">
                <img src="../../public/clock.png" class="w-5 mr-2" />
                <span class="text-xs md:text-sm font-semibold">Depart: {{ location.departure }}</span> 
            </div>
        </div>
        </div>
       </div>
       </div>

       <div class="flex justify-center md:py-0 pb-5">
        <img src="../../public/map.png" class="rounded-3xl map" />

        </div>
    </div>
</template>

<script>

const dates = [
    {
        day: 6,
        month: 'November',
        isSelected: true
    },
    {
        day: 7,
        month: 'November',
        isSelected: false
    },
    {
        day: 8,
        month: 'November',
        isSelected: false
    },
    {
        day: 9,
        month: 'November',
        isSelected: false
    },
]

const locations = [
    {
        airport: 'Riga international airport',
        street: 'P133, Marupe, LV-10, Riga',
        arrival: '',
        departure: '16:45',
        isDestination: false,
    },
    {
        airport: 'Lithuania airport',
        street: 'Road name, LT223, Lithuania',
        arrival: '17:20',
        departure: '19:45',
        isDestination: false,
    },
    {
        airport: 'Lithuania airport',
        street: 'Road name, LT223, Lithuania',
        arrival: '20:20',
        departure: '21:45',
        isDestination: true,
    },
]

export default {
    name: 'TripDetails',
    data() {
        return {
            dates, 
            locations
        }
    }
}

</script>

<style>
.btn-custom {
    width: 200px;
}

.container {
    border: 1px solid red;
}

.shadow-element {
    box-shadow: -30px 0 25px -20px rgba(0, 0, 0, 0.75);
}

.line {
    position: absolute;
    width: 1.6px;
    height: 21px;
    background-color: rgba(0, 0, 0, 0.7);
    top: 19px;
    left: 9.3px;
}

.map {
    width: 620px;
}

@media (max-width: 648px) {
    .btns-mobile {
        width: 280px;
    }

    .line {
    width: 2px;
    height: 96px;
    top: 52px;
    left: 15px;
}

.map {
    width: 300px;
    height: 300px;
    object-fit: cover;
}
}
</style>