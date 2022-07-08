# Azure Devops: Copy branch name & show ticket in the browser title

A Azure Devops extension that allows you to easily copy a branch name or a ticket name from a ticket.

- No Azure Devops admin rights needed

## Features

1. Easily copy a branch name and ticket name
2. See the branch name in your browser title and in toolbar
3. Easy to customise. It is pure, editable JavaScript

## How to use
1. Install 'Run JavaScript' extension (https://chrome.google.com/webstore/detail/run-javascript/lmilalhkkdhfieeienjbiicclobibjao?hl=en) for Chrome,
   or any other extension that allows you to run JavaScript in the browser
3. Open Azure Devops ticket
4. Paste code from [azure-devops-copy-branch-name.js](https://github.com/tomaszs/azure-devops-copy-branch-name/blob/main/azure-devops-copy-branch-name.js) into Run JavaScript window, and select 'Enable on <your website>' checkbox
5. Click Save and Run

## Expected result

Every time you open a Azure Devops ticket, next to the name there will be two new buttons to copy branch name and ticket name.
Bonus: browser title will be set to the ticket name 

## Security

Validate the security of your browser, JS execution extension and your code to make sure, you won't copy and execute malcious script in your console.

## Contribution

You can commit a PR if you like

## Authors

Tomasz Smykowski (http://tomasz-smykowski.com)
