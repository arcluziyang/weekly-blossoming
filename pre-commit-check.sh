#!/bin/bash

# commit先校验util是否有对应测试文件

# 每一个util方法必须对应一个同名的测试用例文件
# 若没有,则不能继续执行
funFileName=$(ls src/)
testFileName=$(ls test/)

for funName in $funFileName
do
if [ ! $funName = 'index.js' ]
then
    fileName="test/$funName"

    if [ ! -f "$fileName" ]
    then
        echo ''
        echo -e "\033[31m $funName 没有对应的同名测试文件,请添加对应测试用例文件 \033[0m"
        echo ''

        exit 1
    fi
fi
done
