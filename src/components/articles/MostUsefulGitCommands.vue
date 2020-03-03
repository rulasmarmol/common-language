<template>
    <b-container class="most-useful-git-commands">
        <b-row>
            <b-col sm>
                <h2>10 Git Commands That Every Hiring Manager Should Ask</h2>
                <p><em>It may be seem trivial, but every developer should know this commands or at least have an idea</em></p>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="6">
                <img src="../../assets/branching-illustration.png" alt="Image of Git Branching" class="img-fluid">
            </b-col>
            <b-col sm="6" class="left-separator">
                <p align="justify">Let's start with the commands, then some examples and finally with some use cases.</p>
            </b-col>
        </b-row>
        <b-row class="most-useful-git-commands">
            <b-col sm="4" >
                <h3><br></h3>
                <p><em>According to the latest <b-link target="_blank" href="https://insights.stackoverflow.com/survey/2017#work-_-version-control">Stack Overflow developer survey</b-link>, more than 70 percent of developers use Git, making it the most-used version control system in the world.</em></p>
            </b-col>
            <b-col sm="8" class="left-separator">
                <h3> git reset --hard </h3>
                <p align="justify"> If you're not working directly on your local git repository, then this command is pretty useful and <b>very safe</b>. The syntax is as follows:<br><br>
                <code>git reset --hard [commit]</code><br><br>
                Where <code>commit</code> is the target state. So any changes to tracked files in the working tree since <code>commit</code> are discarded. Let's take a look at some examples:<br><br>
                <code>git reset --hard origin/master</code><br><br>
                This means: discard every thing on my current local branch and make it exactly as <code>origin/master</code>. <br><br>
                So when to use it, as we mention before if you're not working directly in your local repository, it's probably that you need to copy your changes before commit and you forgot to do <code>git pull</code>, so now you have a conflict, but you have your changes somewhere else, so it's easier to reset the current branch and apply your changes to the latest files. <br><br>Here's another example:<br><br>
                <code>git reset --hard a11bef06a3f659402fe7563abf99ad00de2209e6</code><br><br>
                This time we are talking about a specific <code>commit</code> where <code>a11bef06a3f659402fe7563abf99ad00de2209e6</code> is its SHA-1 checksum.<br><br>
                It would be nice not to make mistakes, but shit happens and it's often useful to reset your local branch with the remote one, when someone (not you obviously) committed changes to the wrong branch or the changes are unstable. This command is very useful, of course, in this case, first you need to backup your commits (whether with a new branch or just by copying).<br><br>
                </p> 
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" >
                <h3><br></h3>
                <p><em>Use <code>git stash</code> when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the <code>HEAD commit.</code></em></p>
            </b-col>
            <b-col sm="8" class="left-separator">
                <h3> git stash </h3>
                <p align="justify">In a few words <code>git stash</code> is the clipboard of your version control system. The basic usage is this:<br><br>
                <code>git stash</code><br><br>
                This command cut your uncommited changes (staged and unstaged), paste it away for later use and reverts the working directory to match the <code>HEAD commit</code>.
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
    .left-separator{
        border-left: 1px solid #E1E0E1;
    }
    .most-useful-git-commands{
        padding-top: 30px;
    }
}
</style>