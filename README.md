# git-duet for VSCode

## Features

This extention will add a status bar in the bottom left showing who you are commiting as.

It also add the follow commands:
- `git duet`: then a promt asking for your duet pairs intials
- `git solo`: then a prompt asking for your solo initals
- `git as`: combination of the top two commands. It will take in solo intials (eg `pa`) or pairing intials (eg: `pa bt`)

All intials are space seperated.

![gif in actiont](/images/git-duet-vscode2.gif)

## Requirements

You must have git duet installed. Works best with `GIT_DUET_SET_GIT_USER_CONFIG` set. See git duet's readme. 

This extention displays information from git duet

https://github.com/git-duet/git-duet

## Extension Settings

No settings yet. Ask for them by sending an issue.

## Known Issues

Very untested. I have not used it for a full day yet. Publishing now to get feedback from the team

## Release Notes

### 0.0.2
- Better emoji
### 0.0.1
- Only shows status when there is a `.git` directoy in the solution
- Displays pop up info when setting `pairs`/`solo`/`git as`
- Should handle some errors when things are not configured correctly

