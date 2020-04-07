---

path: '/automate-with-bash'
date: "2020-03-31"
title: 'More Bash Goodness'
tags: ['productivity', 'bash', 'terminal', 'script', 'egghead']
excerpt: 'Automate Daily Development Tasks with Bash from Egghead.io'
link: 'https://egghead.io/courses/automate-daily-development-tasks-with-bash'

---

## Navigation, Moving, Copying

- **`less [filename]`**

Open a file for interactive reading, allowing scrolling and search.

- **`/searchTerm`**

To search inside `less`, press `/` followed by the search term.

- **`open [filename] -a TextEdit`**

Open a file with the specified application.

- **`echo 'hello' > file.txt`**

Creates and initializes a file.

- **`mv lib/* src/`**

Move everything from the `lib` folder to the `src` folder.

- **`cp -R src/* lib/`**

Copy everything from the `lib` folder to `src` folder.

## Find

- **`find images/ -iname "*.png"`**

Find all `.png` files in the directory (`-i` flag for case insensitive).

- **`find . -type d`**

Find all the folders.

- **`find dist/ -name "*.builts.js" -delete`**

Find them and destroy them.

## Grep

- **`grep --color -n "npm.config.get" lib/npm.js`**

Will do a numbered & colorized output.

## Curl

- **`curl -iL URL`**

The `-i` include flag will output the header. `-L` for following redirects.

- **`curl -H "Authorization: Bearer 123" localhost...`**

Add an authorization bearer token.

- **`curl -X POST "Content-Type: application/json" -d '{"title": "Curling", "author":"Cameron"}' `**

`-X` to change from the default `GET` request to a `POST` request. `-d` flag for `data`.

- **`curl -i -X PUT \`**

For a multiline request, you can add `\` to the end, followed by the `Enter` key. Continue writing the request in the new line.

- **`curl -iL https://google.com -o google.txt`**

Output the response into a text file.

## Scripts
```bash
echo "Initializing JS project at $(pwd)"
git init
npm init -y # create package.json with all the defaults
mkdir src
touch src/index.js
code . # open src/index.js
```

A `bash` script for scaffolding a simple JS project. For scripts, you need to `chmod u+x` to be able to execute them and then `./[filename]` to run them (or move the script to `/urs/local/bin/[scriptname]` to execute it globally).

- **`ENV`**

Will display all your global environment variables.

```bash
temp=$(mktemp -d)
git clone --branch $1 $pwd
echo "branch $1 cloned to $temp"
```

Clone from a local `Git` repository branch to a temporary folder.

- **`echo $?`**

Echo the exit status of your last command.

```bash
if [[ -z $USER ]]; then
    echo "true"
else
    echo "false"
fi
```
A simple conditional script.

```bash
check_status() {
    local status = $(curl -ILs https://example.org | head -n 1 | cut -d ' ' -f 2)
    if [[ $status -lt 200 ]] || [[ $status -gt 299 ]]; then
        echo "$1 failed with a $status"
        return 1
    else
        echo "$1 succeeded with a $status"
    fi
}
```

Curl a `URL` and check if it responds with a 200 range status. The complicated bit is just cutting the status code from the `curl` response header.
