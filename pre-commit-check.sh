#!/bin/bash 

# commit前校验
    # 1.校验util是否有对应测试文件,
    # 2.eslint检查
    # 3.执行测试用例


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
        echo $funName"没有对应的同名测试文件,请添加对应测试用例文件"
        echo ''

        exit 1
    fi
fi
done 

# eslint检查
lintFix=`npm run lint-fix `

 echo ''
 echo "problem  ${lintFix#*problem}"

if [[ $lintFix =~ "problem" ]]
then
    echo ''
    echo -e "\033[31m eslint校验未通过,不能提交代码 \033[0m"
    echo ''
    exit 1
fi



# 如果测试用例执行结果中包含 'FAILED',即,测试用例未通过,不能继续执行

singleTest=`npm run singleTest`

 echo ''
 echo "TOTAL${singleTest#*TOTAL}"

if [[ $singleTest =~ "FAILED" ]]
then
    echo ''
    echo -e "\033[31m 测试用例未全部通过,不能提交代码 \033[0m"
    echo ''
    exit 1
fi
