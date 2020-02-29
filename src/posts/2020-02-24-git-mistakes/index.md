---

path: '/git-mistakes'
date: "2020-02-24"
title: 'Fix Common Git Mistakes'
tags: ['courses', 'egghead', 'git']
excerpt: 'Egghead.io course on Git'

---

Stuff I learned from the Egghead course [Fix Common Git Mistakes](https://egghead.io/courses/fix-common-git-mistakes).

1. **git commit --amend -m "new commit message"**

To fix the commit message (before pushing).
This also works if you want to add more files to a commit.

2. **git log --oneline**

Display logs in one line.

3. **git reset HEAD [filename]**

To unstage a specific file.

4. **git diff origin/master HEAD**

To see the difference between the currrent working directoy and master.

5. **git reset [commit hash] OR git reset HEAD~1**

(for one commit back)

It's recommended that you use reset only on branches you haven't pushed yet.

6. **git reset --soft**

Undoes the commit, but changes are still staged.

7. **git reset --mixed OR git reset**

Removes the commit and unstages the changes.

8. **git reset --hard**

Removes the commit, unstages the stages and removes them from the working directory.

9. **git reflog**

To see all the changes done in your git repository.

10. **git reset --hard [commit hash]**

You will reset to a speficic commit.

11. **git revert [commit hash]**

You shouldn't reset commits you've already pushed (that's changing history), instead do a revert.

12. **git branch -vv**

Verbose output.

13. **git push --set-upstream origin my-branch**

Equal to: **git push -u origin my-branch**

14. **git cherry-pick [commit hash]**

For copying a commit from one branch to another.

15. **git stash pop AND git stash apply**

To apply the changes from the stash (apply keeps the changes in the stash). With git stash pop the changes normally go away (but not in case of a merge conflict)

16. **git stash drop [commit hash]**

To remove changes from a stash.

17. **git checkout -b branch**

If you want to explore a commit, but get rid of the dettached HEAD state, you can checkout the commit as it's own branch.

18. **git remote prune origin --dry-run**

Check which branches will be disassociated with the master locally after you've merged them into the remote master. Then run: **git remote prune origin** and afterwards: **git branch -d [branch name]**

19. **git rebase -i HEAD~3**

To interactively rebase the last three commits.

20. **git rm -r --cached .**

Remove all files from the git repository. Afterward run **git add .** to add them all back in (this is for applying the gitignore file to the files that have been added before gitignore).

21. **git rebase -i HEAD~2**

To add a file to a previous commit get into the interactive rebase mode, then choose edit for that specific commit. Do your changes, then do **git commit --amend --no-edit** (to keep the same commit message) and then **git rebase --continue**.

22. **git rebase -i HEAD~2**

For squashing commits.

23. For completely [removing a file](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository) from the github history.
