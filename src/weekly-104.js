/** *
 * 题目描述：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 *
 * - 求二叉树的最大深度
 * * */

/**
 * 方法：
 *  1、将数组转换为一棵二叉树（默认按照中序遍历方法生成）
 *  2、遍历获取最大深度
 * * */
export const maxDepth = function (roots = []) {
  if (!roots || roots.length === 0) {
    return 0;
  }

  let leftMaxDepth = 0;
  let rightMaxDepth = 0;

  // 生成一棵二叉树
  const generatorBinaryTree = (root = []) => {
    if (!root || root.length === 0) {
      return null;
    }

    const [rootKey, ...subRootKeys] = root;

    const binaryTree = {
      key: rootKey,
      left: null,
      right: null,
    };

    let isLeft = true;

    const addLeftNode = (node, child, level = 1) => {
      if (level > leftMaxDepth) {
        leftMaxDepth = level;
      }

      if (!node.left) {
        node.left = child;
      } else {
        addLeftNode(node.left, child, level += 1);
      }
    };

    const addRightNode = (node, child, level = 1) => {
      if (level > rightMaxDepth) {
        rightMaxDepth = level;
      }
      if (!node.right) {
        node.right = child;
        return;
      }
      addRightNode(node.right, child, level += 1);
    };

    subRootKeys.forEach((key) => {
      if (key) {
        const node = {
          key,
          left: null,
          right: null,
        };
        if (isLeft) {
          addLeftNode(binaryTree, node);
        } else {
          addRightNode(binaryTree, node);
        }
      }
      isLeft = !isLeft;
    });
    return binaryTree;
  };

  const binaryTree = generatorBinaryTree(roots);
  if (!binaryTree) {
    return 0;
  } else {
    return (leftMaxDepth >= rightMaxDepth ? leftMaxDepth : rightMaxDepth) + 1;
  }
};

console.log('depth:', maxDepth([3, 9, 20, null, null, 15, 7]), maxDepth([3, 9, 20, null, null]), maxDepth([3, 9, 20]));
