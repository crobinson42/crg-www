# crg-www
Public facing website

## githooks setup on server
There is a github webhook setup to fire to https://www.castlerock-construction.com/git-receive-hook.php 
which executes a script that will run `git pull` on the public_html root which is the `master` branch 
then execute a `git pull` in public_html/dev which is the `develop` branch.

This webhook is fired off anytime there are changes to master or develop branches in github, ie: a 
PR is merged, a commit is made, etc.. This allows our repo changes to "deploy" automatically instead
of having to manually use FTP. 
