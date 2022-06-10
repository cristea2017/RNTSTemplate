# Sample project for begin work with react native

testing git power
https://www.nobledesktop.com/learn/git/git-branches

## changes for master

- git pull origin master || get changes from up-to date branch and merge with dev

- add new code in dev and merge to "origin/master"

## !! hot fix !!

## testing stash(deleted first) \*

- stash message
- after stash pop `CONFLICT (content): Merge conflict in Readme.md`

## reset local branch from remote /branch

```
git reset --hard origin/<branchname>
```

## reset commit with saving working

```
- git reset --soft HEAD~1
```

## Show list of commits

```
- git log --pretty=oneline
```

## 3. Приводим локальную ветку в соответствие с удаленной

Иногда внесешь массу изменений в локальную ветку, а в итоге понимаешь, что от
них стало только хуже. Знакомо? Не переживайте, с этим многие сталкивались. В
такой ситуации вам поможет вот эта команда.

```
// замените staging именем ветки, до которой хотите сбросить

git reset --hard origin/staging
```

testing rebase with apply on top

upd master
