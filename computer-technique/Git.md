# Git


## local file push

create a new repository
by clone a repository
```bash
git clone http://192.168.157.249:8765/next-generation-platform/xdc/ms-xdc.git
cd ms-xdc
git switch -c master
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```
by pushing an existing folder
```bash
git init --initial-branch master
"Initialized empty Git repository in ..."
git remote add origin 'URL'
git add  .
git commit -m "comments"
git remote add origin 'URL'
git push -u origin master
```
push an existing repository
```bash
git remote add origin URL
git branch -M branch
git push -u origin main

```
discard old repository
```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin http://192.168.157.249:8765/next-generation-platform/xdc/ms-xdc.git
git push -u origin --all
git push -u origin --tags
```
## git confirm user

```bash
git config --global user.email "my-email-address"
git config --global user.name "my-username"
```

## ignore

### wildcard

```txt
** wild card to match any level of subdirectories
*.user/ to match some directories like ignore1.user/ ignore2.user/
*/* any directories, subdirectories and its contents
/*.* all files in the current directory which has a "."

```
[WildCard-SquareBrackets-NegatingPatterns](https://linuxize.com/post/gitignore-ignoring-files-in-git/)

### ignore already added files run
`$ git rm -rf --cached .`

### Display All Ignored Files

`$ git status --ignored`
## rename

> [!info]  How to updating an existing local clone to point to the new repository URL
> git remote set-url origin NEW_URL
## Area
- [WorkingTree]: 工作区 changes on local editor
- [Index]: 暂存区 after using "git add", "git status" to check for information
- [Repository]: 本地仓库 after using "git commit" 

git commit --amend 

## commit
Commit is 
## revert

```cmd
git revert OLDER_COMMIT^...NEWER_COMMIT
git revert HEAD
git revert HEAD^
git revert commit 
Revert example: revert g on G , G' is a reversion of G 
a -> b -> c -> f --g -> h -> G -> G' -> i (master)
          |        |                    |
          d -----> e -> j -> k ----------
revert merge commit: git revert --mainline <parent-number>
```

## reset

git reset || git reset --mixed 
git reset --soft // keep changes in working-tree move HEAD into Index(暂存区)
git reset --hard // remove changes either in working-tree or Index

## workflow
git add .
git status
git commit -m "description"
git reflog
git add
git status 
git commit --amend
git log

## stash

[SYNOPSIS]
```cmd
git stash list [<log-options>]
git stash show [-u|--include-untracked|--only-untracked] [<diff-options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
             [-u|--include-untracked] [-a|--all] [-m|--message <message>]
             [--pathspec-from-file=<file> [--pathspec-file-nul]]
             [--] [<pathspec>…​]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```

## Authentication

Swapping an HTTPS Repo To SSH Authentication
```bash
git config --list
git remote get-url --all origin
git remote rm origin
git remote add origin 'ssh-url'
git fetch origin
git push --set-upstream origin/master
```

# SSH
test the ssh connection:
```
ssh -Tv git@github.com "ziningqi@yahoo.com" 
```

## Key

Using a Different SSH Key
~/.ssh/config
```txt

# github
Host github.com
	HostName github.com
	User git
	PreferredAuthentications publickey
	IdentityFile ~/.ssh/id_rsa
	IdentitiesOnly yes


# gitlab
Host gitlab
	HostName 192.168.157.249
	User git
	PreferredAuthentications publickey
	IdentityFile ~/.ssh/neusoftXDC

```