<template>
    <b-container class="most-useful-git-commands">
        <b-row class="text-center">
            <b-col sm>
                <h2>10 Git Commands That Every Hiring Manager Should Ask</h2>
                <p><em>It may be seem trivial, but every developer should know this commands or at least have an idea</em></p>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="6" class="left-separator">
                <img src="../../assets/branching-illustration.png" alt="Image of Git Branching" class="img-fluid">
            </b-col>
            <b-col sm="6" class="left-separator">
                <p align="justify">Let's start with the commands, then some examples and finally with some use cases.</p>
                <h3> git reset --hard </h3>
                <p align="justify"> If you're not working directly on your local git repository, then this command is pretty useful and <b>very safe</b>. The syntax is as follows:<br><br>
                <code>git reset --hard [commit]</code>
                <br><br>Where <code>commit</code> is the target. So any changes to tracked files in the working tree since <code>commit</code> are discarded. Let's take a look at some examples:
            </p> 
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'MostUsefulGitCommands',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen {
    .most-useful-git-commands{
        padding: 30px;
    }
}
</style>