<template>
    <b-container class="most-recent-entries">
        <b-row class="text-center">
            <b-col sm="6">1 of 4 (wider)</b-col>
            <b-col sm="2" class="left-separator">2 of 4</b-col>
            <b-col sm="2" class="left-separator">3 of 4</b-col>
            <b-col sm="2" class="left-separator">4 of 4</b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'MostRecentEntries',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen {
    .left-separator{
        border-left: 1px solid #E1E0E1;
    }
    .most-recent-entries{
        padding: 30px;
    }
}

</style>