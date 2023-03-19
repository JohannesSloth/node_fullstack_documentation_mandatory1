# Git
Git is a version control tool. It was created by Linus Torvalds, who also famously created the Linux Kernel.

In fact he (and others) created git as a means to manage the Linux project because of issues with the version control tool they had been using until then.

## Basic Git Commands
### clone
The clone command allows users to clone publicly posted repositories down to their own computers. 
> An extremely popular website for hosting project repositories is GitHub. Therefore our examples will also utilize this.
```
git clone <GitHub Repository URL>
```
The command will clone the remote repository to directory in which you are placed when running the command, unless otherwise specified, so be sure to be in an appropriate directory when running it.

### add
The `git add` command adds changes made to the working directory to the staging area, preparing them to be committed to the repository.
```
git add <file>
```
This command adds the specified file to the staging area. Alternatively, you can add all modified files to the staging area with:
```
git add -A
```

### commit
The `git commit` command commits the changes in the staging area to the repository.
```
git commit -m "Commit message"
```
This command creates a new commit with the changes in the staging area and the specified commit message. It's important to provide a descriptive commit message that explains what changes were made.

### push
The `git push` command uploads the local repository commits to a remote repository, such as one hosted on GitHub.
```
git push <remote> <branch>
```
This command pushes the commits to the specified branch in the remote repository. For example, to push to the master branch in the origin remote repository:
```
git push origin master
```

### fetch
The `git fetch` command downloads changes from a remote repository into the local repository, but does not merge them with the local branch.
```
git fetch <remote> <branch>
```

This command fetches the changes from the specified branch in the remote repository and updates the remote-tracking branches in the local repository. For example, to fetch changes from the master branch in the origin remote repository:
```
git fetch origin master
```

### pull
The `git pull` command fetches and merges changes from a remote repository into the local repository.
```
git pull <remote> <branch>
```
This command pulls the changes from the specified branch in the remote repository and merges them into the local repository. For example, to pull changes from the master branch in the origin remote repository:
```
git pull origin master
```

