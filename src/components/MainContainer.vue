<template>
    <div class="md:p-10 md:w-4/5 mainContainer sm:rounded-3xl bg-primary-color md:flex justify-between">
        <div class="md:w-2/5">
            <ChaufferDetails />
        </div>
        <div class="md:w-3.5/5">
            <TripDetails />
        </div>
    </div>
</template>

<script>
import ChaufferDetails from './ChaufferDetails';
import TripDetails from './TripDetails';

export default {
    name: 'MainContainer',
    components: {
        ChaufferDetails,
        TripDetails
    }
}
</script>

<style>
.chauffer {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.container {
    border: 1px solid red;
}

@media (min-width: 640px) {
    .mainContainer {
        position: absolute;
        top: 120px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    }
}
</style>