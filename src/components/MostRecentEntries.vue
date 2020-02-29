<template>
    <b-container class="most-recent-entries">
        <b-row class="text-center">
            <b-col sm="6">
                <MostUsefulGitCommands/>  
                <b-button variant="outline-light">Read More</b-button>
            </b-col>
            <b-col sm="2" class="left-separator">2 of 4</b-col>
            <b-col sm="2" class="left-separator">3 of 4</b-col>
            <b-col sm="2" class="left-separator">4 of 4</b-col>
        </b-row>
    </b-container>
</template>

<script>
import MostUsefulGitCommands from './MostUsefulGitCommands.md'

export default {
    name: 'MostRecentEntries',
    components: {
        MostUsefulGitCommands
    },
    mounted: function () {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            document.getElementsByTagName('img')[0].className = 'img-fluid';
        })
    }   
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