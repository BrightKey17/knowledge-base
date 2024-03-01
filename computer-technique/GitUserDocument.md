# Git
## Area
- [WorkingTree]: 工作区 changes on local editor
- [Index]: 暂存区 after using "git add", "git status" to check for information
- [Repository]: 本地仓库 after using "git commit" 

git commit --amend 

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

# SSH
test the ssh connection:
```
ssh -Tv git@github.com "ziningqi@yahoo.com" 
```

