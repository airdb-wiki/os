# Git

## Git Command

1. Maintain a repo without permission
	git remote add upstream https://github.com/bfenetworks/bfe.git
	a)
	git fetch upstream
	git checkout develop

	git merge upstream/develop
	or
	git rebase upstream/develop

	Refer: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork

	b)
	git pull ups master
	git rebase ups/master
	https://levelup.gitconnected.com/how-to-update-fork-repo-from-original-repo-b853387dd471


2. git config setting
	git config --global core.hooksPath .github/hooks
	git config --global core.excludefile .gitignore_global
	git config --global url.'ssh://git@github.com'.insteadOf https://github.com

3. Github Commit. For Close Github Issue, commit message should as follow:
	close #x
	closes #x
	closed #x
	fix #x
	fixes #x
	fixed #x
	resolve #x
	resolves #x
	resolved #x
	add new quick sort algorithm, fixes #4, resolve #6, closed #12



git submodule update --init -f  vendor/github.com/mholt/caddy
git remote add ups https://github.com/airdb/b
git push -u ups local_branch:master -f

4. Github Command Line
	brew install github/gh/gh
	gh --repo bbhj/lbs issue status
	gh --repo bbhj/lbs issue view 1

5. Delete branch or tag
	git branch -D dev
	git push origin --delete dev

	git tag -d v1.0
	git push --delete origin v1.0

6. submodule
git submodule update --init --recursive --remote

Push Branch to Another Branch
```
$ git push <remote> <local_branch>:<remote_name>
```

Push Branch to Another Repository
```
$ git push <remote> <branch>
```

## Github

For now, we can use `gh` command for few git operation.
Rerfer [here](https://github.com/cli/cli)
