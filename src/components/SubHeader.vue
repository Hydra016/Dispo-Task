<template>
    <div
        class="sm:absolue sm:top-[-80px] p-10 sm:pt-5 sm:pb-40 px-5 md:px-20 sm:rounded-3xl flex flex-col sm:items-center justify-center bg-primary-text-color overflow-hidden sub-header">
        <h2 class="font-semibold text-2xl sm:text-3xl text-primary-color mb-5">Your daily rental details</h2>
        <div class="flex sm:flex-row flex-col">
            <div class="mr-8 flex md:mt-0 mb-5  lg:flex-row items-center">
                <img src="../../public/security.png" class="item-img mr-2" />
                <span class="text-base text-primary-color">Request #779</span>
            </div>
            <div class="mr-8 flex md:mt-0 mb-5 lg:flex-row items-center">
                <img src="../../public/calendar.png" class="item-img mr-2" />
                <span class="text-base text-primary-color">Trip starts: 18 feb - 11:00</span>
            </div>
            <div class="mr-8 flex md:mt-0 mb-5 lg:flex-row items-center">
                <img src="../../public/user.png" class="item-img mr-2" />
                <span class="text-base text-primary-color">45 people</span>
            </div>
            <div class="mr-8 flex md:mt-0 mb-5 flex-row-reverse justify-end md:flex-row items-center md:border md:border-slate-50 md:px-6 md:py-2 md:rounded-3xl">
                <span class="text-base text-primary-color">Paid 12€</span>
                <img src="../../public/check.png" class="item-img md:ml-2 mr-2" />
            </div>
            <div class="mt-2">
                <a href="#" class="text-base text-primary-color underline">view invoice</a>
            </div>
        </div>
        <div class="flex mt-5">
            <img src="../../public/copy.png" class="item-img mr-2" />
            <span class="copy-color text-base">Copy your unique trip link</span>
        </div>
        <div class="hidden sm:block circle-end">
            <div class="circle-second"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubHeader',
}
</script>

<style>
.circle-end {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    top: 100px;
    left: 80%;
}

.sub-header {
    position: relative;
}

.copy-color {
    color: #a0a0b3;
}

.circle-second {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    top: 10px;
    left: 16%;
}
</style>