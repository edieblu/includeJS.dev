---

path: '/analyze-git-logs'
date: "2020-03-01"
title: 'Analyze Git Logs with the Command Line'
tags: ['courses', 'egghead', 'git']
excerpt: 'Egghead.io course on Git'

---

Stuff I learned from the Egghead course [Analyze Git Logs with the Command Line](https://egghead.io/lessons/grep-analyze-git-logs-with-the-command-line).

Question: how to figure out which of your days were the most productive (on which days you made the highest number of commits?). This example uses my team's commits for 2019 front-end application written in ReactJS.

1. **`git log | grep 2019`**

Get commits from 2019 (pipe the log through a filter).
v
2. **`git log | grep 2019 | wc -l`**

Count how many commits were made in 2019 (count the number of lines).

3. **`git log | grep 2019 | sed -e 's/Date:   //' | sed -e 's/\(...\).*/\1/'`**

To get out the days when the commits were commited (using sed and regex magic).

4. **`git log | grep 2019 | cut -d ' ' -f 4`**

Same as above (cut into groups using the delimiter - empty space in this case).

5. **`git log | grep 2019 | tr -s ' '`**

Squeezes the output (removes the extra spaces in this case).

6. **`git log | grep 2019 | tr -s ' ' | cut -d ' ' -f 2`**

Combines the translate and cut commands to get the same output as number 3. (regex madness from above).

7. **`git log | grep 2019 | awk '{ print $2 }'`**

Same result as above, but using awk.

8. **`git log | grep 2019 | awk '{ print $2 }' | sort | uniq -c`**

Count the number of occurences of each day (make sure to run sort before uniq, as uniq only removes neighboring duplicates).

8. **`git log | grep 2019 | awk '{ print $2 }' | sort | uniq -c | sort -n`**

Sort the final result and add `-n` for when sorting numbers.

Final result:
(Who would have thunk it, Mondays are the least productive of all weekdays 🤔).

| number | day  |
| -------|:----:|
|  16    | Sun  |
|  18    | Sat  |
| 278    | Mon  |
| 316    | Fri  |
| 323    | Wed  |
| 351    | Thu  |
| 359    | Tue  |


(hey, my first table in markdown 💪!)
