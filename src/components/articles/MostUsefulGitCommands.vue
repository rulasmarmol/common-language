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
                This command cut your uncommited changes (staged and unstaged), paste it away for later use and reverts the working directory to match the <code>HEAD commit</code>. Well, in a manner of speaking. <br><br>
                Here's another example:<br><br>
                <code>git stash apply</code><br><br>
                This one paste your latest stash to the current branch. That would be one way to put it.<br><br>
                You can use both commands when you have to apply a quick patch or fix, to the current branch, and your current changes are not ready to be committed.<br><br>
                It is also useful when you want a clean <code>commit</code>, just before doing the <code>commit</code> you can <code>stash</code> your changes, then apply a <code>git pull</code>, to avoid conflicts, finally <code>git stash apply</code> to restore your changes, so you can commit without conflicts (unless you and another person both edited the same file).<br><br></p> 
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" >
            </b-col>
            <b-col sm="8" class="left-separator">
                <h3> git add</h3>
                <p align="justify">This one is very simple, the definition says: the <code>git add</code> command marks changes to be included in the next commit.<br><br>
                If this is the first time you're using git, this should be the suggested usage:<br><br>
                <code>git add [file...]</code><br><br>
                We can add multiple files by placing the names separated by space, if the file is not in the same folder, then you need to specified the path. E.g.<br><br>
                <code>git add index.html js/index.js css/index.css</code><br><br>
                We are including three files to the next commit: <code>index.html</code> which is in the same folder where we are executing the command and two other that are in a different folder.<br><br>
                Here's another one:<br><br>
                <code>git add .</code><br><br>
                This will add all your modified and new files in the current and subsequent folders. Any files that match with the specified patterns in the gitignore file will be omitted.<br><br>
                If you already configured the gitignore file, then this command is very useful.<br><br>
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" >
            </b-col>
            <b-col sm="8" class="left-separator">
                <h3> git status</h3>
                <p align="justify">Before adding something to commit, you need to know what to add. To get an overview of what you've done since your last commit, you can use <code>git status</code>:<br><br>
                <code>$ git status<br>
                    On branch master<br>
                    Changes not staged for commit:<br>
                    (use "git add/rm &lt;file&gt;... " to update what will be committed)<br>
                    (use "git checkout -- &lt;file&gt;..." to discard changes in working<br>
                    directory)<br>
                    <br>
                        <div class="ml-4">modified:   css/about.css<br>
                        modified:   css/general.css<br>
                        deleted:    error.html<br>
                        modified:   imprint.html</div><br>
                    Untracked files:<br>
                        (use "git add &lt;file&gt;..." to include in what will be committed)<br>
                        <br>
                        <div class="ml-4">new-page.html</div><br>
                    Changes to be commit: <br>
                        (use "git reset HEAD &lt;file&gt;..." to unstage)<br>
                        <br>
                        <div class="ml-4">modified: index.html<br>
                        modified: js/index.js<br>
                        modified: css/index.css</div></code><br>
                    As we can see, there are four sections: first, the name of the branch where we are working. Second, the list of the changes ready to be added to the commit. Next, untracked files (these are either files that are newly created or files that are ignored). Finally, changes included in the next commit.<br><br>
                    This way we can easily build our next commit.
                <br><br>
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="4" >
            </b-col>
            <b-col sm="8" class="left-separator">
                <h3> git commit</h3>
                <p align="justify">This command will save your changes (those changes that were previously added using <code>git add</code>) to the <b>local repository</b>.<br><br>
                The most common usage is this:<br><br>
                <code>git commit -m "Add navbar to homepage"</code><br><br>
                Besides adding your changes to the local repository, this command will add a description of your changes (Make sure to provide a concise description that helps your teammates and yourself understand what was changed).<br><br>
                It is worth mentioning that the changes are stored in the <b>local repository</b>, if you want to move your changes to the remote server you need to use <code>git push</code>. 
                <br><br>
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