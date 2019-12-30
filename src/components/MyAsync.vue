<template>
    <!-- The Modal -->
    <div id="myAsync" v-once>

      <h5>Reports</h5>
        <p>
            Following the licencing of Cytonn Asset Managers as a
            Real Estate Investment Trust (REIT) Manager by the Capital
            Markets Authority (CMA) in February 2019, Cytonn Investments
            Management Plc embarked on the process of structuring a REIT
            for two of its projects, The Ridge in Ridgeways and RiverRun
            Estates in Ruiru. This move was aimed at bringing access to
            high-yielding investments to investors in the regulated markets
            as well as diversifying funding sources for Cytonn’s real estate
            pipeline.  In this regard, this week we look at REITs both as a
            funding method for real estate develope...
        </p>

    </div>
    
</template>

<script>
    export default {
        name: "myAsync",
        beforeCreate() {
            // eslint-disable-next-line no-console
            console.log('I am displaying this message from beforeCreate().I am the first to be called.')
        },
        created(){
            // eslint-disable-next-line no-console
            console.log('Properties are now reactive and events active')

        },
        beforeMount() {
            // eslint-disable-next-line no-console
            console.log(`this.$el is not yet in existence!`)
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log(`I have now been mounted this.$el is now in existence`)
        },
        beforeUpdate() {
            // eslint-disable-next-line no-console
            console.log(`I am invoked before any updates`)
        },
        updated() {
            // eslint-disable-next-line no-console
            console.log(`on update`)
        },
        beforeDestroy() {
            // eslint-disable-next-line no-console
            console.log('I need to be cleaned up!')
        },
        destroyed() {
            // eslint-disable-next-line no-console
            console.log(`Goodbye!. I have been destroyed`)
        }

    }




</script>

<style scoped>


</style>
