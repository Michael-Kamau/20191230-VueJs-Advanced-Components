<template>
    <!-- Your HTML goes here -->
    <div class="home" >
        <h1>Welcome</h1>
        <p>You can view a detailed report by clicking the more button</p>
        <button @click="display = true">More</button>
        <div v-if="display">
            <MyData> </MyData>
        </div>
        <h4>The data below is from the root</h4>
        <p> Function in the root to double the value passed as parameter: {{this.$root.double(7)}}</p>
        <p> Amount value as indicated in the root: {{this.$root.amount}}</p>

    </div>
</template>
<script>
    export default {
        name: 'Index',
        active: true,
        //props:["products"],
        components: {
            MyData: () => import("./MyAsync.vue")
        },
        data: () => ({ display: false }),

    }


</script>

<style>


</style>
