git add .
$msg = Read-Host "Commit message"
git commit -m $msg
git push