/***
 * 题目描述：https://leetcode-cn.com/problems/palindrome-number/
 * 
 * 
 * 解决方法：
 * * */
{
    console.log('方法一：转字符串反转后，拼接为字符串，比较两个字符串是否相等');
    // 方法一：转字符串反转后，拼接为字符串，比较两个字符串是否相等
    var isPalindrome = function(x) {
        if (x < 0) {
            return false;
        }

        if (x === 0) {
            return true;
        }

        let origin = x.toString();
        const array = origin.split('');
        let target = array.reverse().join('');
        return origin === target;
    };

    console.log(isPalindrome(121));
    console.log(isPalindrome(-121));
    console.log(isPalindrome(10));
    console.log(isPalindrome(222));
    console.log(isPalindrome(101));
}

{
    console.log('方法二：转换为字符串数组，比较对应位置上的值是否相同 --不在将数字转换为字符串进行比较');
    // 方法二：转换为字符串数组，比较对应位置上的值是否相同
    var isPalindrome = function(x) {
        return (s => {
            let i = 0;
            let j = s.length - 1;
            while (j >= i) {
                if (s[j] === s[i]) {
                    i++;
                    j--;
                } else {
                    return false;
                }
            }
            return true;
        })(x.toString());
    };

    console.log(isPalindrome(121));
    console.log(isPalindrome(-121));
    console.log(isPalindrome(10));
    console.log(isPalindrome(222));
    console.log(isPalindrome(101));
}

{
    console.log('方法三：分别用栈和队列保存每个位置上的数字，然后取出来判断是否相等 - 不在将数字转换为字符串');
    const isPalindrome = function(x) {
        if (x < 0) {
            return false;
        }

        if (x === 0) {
            return true;
        }

        let backupX = x;
        let stack = [];
        let queue = [];

        while (backupX > 0) {
            let residue = backupX % 10;
            stack.push(residue);
            queue.push(residue);
            backupX = parseInt(backupX / 10);
        }

        while (stack.length > 0) {
            if (stack.pop() != queue.shift()) {
                return false;
            }
        }
        return true;
    };
    console.log(isPalindrome(121));
    console.log(isPalindrome(-121));
    console.log(isPalindrome(10));
    console.log(isPalindrome(222));
    console.log(isPalindrome(101));
}