echo off
set arg1=%1
set arg2=%2
shift
shift
call git add -A
call git commit -m %arg2%
call git push
call git tag %arg1%
call git push origin %arg1%