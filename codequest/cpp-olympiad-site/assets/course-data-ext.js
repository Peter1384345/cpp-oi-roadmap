/* Course Data Extension - Day 4-28 */
(function() {
  'use strict';

  // Initialize global containers so inline scripts can merge into them
  window.courseData = window.courseData || {};
  window.aiResponseMap = window.aiResponseMap || {};

  var CODE = 'style="color:var(--accent);background:var(--accent-soft);padding:2px 6px;border-radius:4px;"';
  var PRE = 'style="background:rgba(0,0,0,0.3);padding:14px 18px;border-radius:8px;margin:12px 0;font-family:var(--font-code);font-size:0.88rem;color:var(--accent);overflow-x:auto;"';

  function C(t) { return '<code ' + CODE + '>' + t + '</code>'; }

  window.courseDataExt = {
    4: {
      title: '运算符与数学函数',
      videoBvid: 'BV1kuMdzAEuB', videoPage: 1, videoThumb: './assets/thumbs/day4.jpg',
      concept: {
        text: '<p>C++ 提供了丰富的运算符：' + C('+') + '、' + C('-') + '、' + C('*') + '、' + C('/') + ' 是算术运算符，' + C('%') + ' 是取模运算符（求余数）。</p>' +
              '<p>关系运算符：' + C('>') + '、' + C('<') + '、' + C('>=') + '、' + C('<=') + '、' + C('==') + '（等于）、' + C('!=') + '（不等于）。注意区分赋值 ' + C('=') + ' 和相等比较 ' + C('==') + '！</p>' +
              '<p>逻辑运算符 ' + C('&&') + '（与）、' + C('||') + '（或）、' + C('!') + '（非）。' + C('cmath') + ' 头文件提供 ' + C('sqrt()') + '、' + C('abs()') + '、' + C('pow()') + ' 等数学函数。</p>' +
              '<p>整数除法截断小数：' + C('5 / 2') + ' = 2。要得到小数，至少一个操作数是浮点数，如 ' + C('5.0 / 2') + '。</p>',
        keyPoints: ['/ 对整数做除法会截断小数，5/2=2', '% 是取模运算符，5%2=1', '== 是比较相等，= 是赋值', '&& 是两个条件同时成立，|| 是至少一个成立', 'cmath 头文件提供 sqrt、abs、pow']
      },
      quizzes: [
        { type: 'choice', question: '表达式 7 / 2 的结果是多少？', options: ['3.5', '3', '4', '2'], answer: 1, explanation: '在 C++ 中，两个整数相除会做整数除法，结果截断小数部分。7 / 2 = 3。如果要得到 3.5，需要写成 7.0 / 2。', hints: ['两个 int 相除，结果还是 int', '小数部分会被截断', '答案是 B: 3'] },
        { type: 'fill', question: '请写出判断变量 x 是否在 [10, 20] 范围内的条件表达式：', code: 'if (_________)', answers: ['x>=10&&x<=20', 'x >= 10 && x <= 20', 'x>=10 && x<=20', '10<=x&&x<=20'], explanation: '判断 x 在 10 到 20 之间（包含边界），需要同时满足 x>=10 和 x<=20，用 && 连接。', hints: ['需要同时满足两个条件', '用 && 连接两个关系表达式', '答案是 x>=10&&x<=20'] }
      ],
      challenge: {
        title: '计算 (a+b)×c 的值',
        description: '<p>输入三个整数 a、b、c，计算并输出 (a+b)×c 的值。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>2 3 4</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>20</pre>' +
                     '<p>提示：注意运算优先级，先算 a+b 再乘以 c。</p>',
        link: 'https://www.luogu.com.cn/problem/B2008', linkText: '洛谷 B2008 - 计算 (a+b)×c 的值',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    // 计算 (a+b)*c\n    \n    return 0;\n}'
      }
    },
    5: {
      title: '格式化输出',
      videoBvid: 'BV1PQ3yz2EuF', videoPage: 1, videoThumb: './assets/thumbs/day5.jpg',
      concept: {
        text: '<p>C++ 中可以使用 C 语言的 ' + C('printf') + ' 进行格式化输出。' + C('%d') + ' 输出整数，' + C('%f') + ' 输出浮点数。</p>' +
              '<p>常用格式控制符：' + C('%d') + '（int）、' + C('%lld') + '（long long）、' + C('%f') + '（double）、' + C('%c') + '（char）、' + C('%.2f') + '（保留2位小数）。</p>' +
              '<p>使用 ' + C('iomanip') + ' 头文件中的 ' + C('setw(n)') + ' 设置输出宽度，' + C('setprecision(n)') + ' 设置精度，' + C('fixed') + ' 固定小数位数。</p>' +
              '<p>printf 通常比 cout 更快，但 cout 更安全。对于简单输出，cout 配合 endl 已经足够。</p>',
        keyPoints: ['printf("%d", x) 输出整数 x', 'printf("%.2f", x) 输出保留2位小数', 'setw(n) 设置输出宽度', 'setprecision(n) 设置浮点数精度', '#include <iomanip> 使用格式化操纵符']
      },
      quizzes: [
        { type: 'choice', question: '要输出保留2位小数的浮点数，应该使用哪个格式控制符？', options: ['%d', '%.2f', '%f', '%2f'], answer: 1, explanation: '%.2f 表示输出浮点数并保留2位小数。.2 指定小数位数，f 表示浮点数类型。', hints: ['小数位数用 .n 控制', 'f 表示浮点数', '答案是 B: %.2f'] },
        { type: 'fill', question: '补全代码，使用 printf 输出变量 x（整数）的值：', code: 'printf("_________", x);', answers: ['%d', '%d\n', '%i'], explanation: 'printf 中 %d 用于输出整数（int 类型）。双引号内的是格式字符串，%d 会被变量 x 的值替换。', hints: ['整数用 %d 格式', '这是 C 语言的格式化输出', '答案是 %d'] }
      ],
      challenge: {
        title: '对齐输出',
        description: '<p>输入三个整数 a、b、c，按指定格式对齐输出。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>123 456 789</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>123\n456\n789</pre>' +
                     '<p>提示：每个数字单独占一行输出即可。</p>',
        link: 'https://www.luogu.com.cn/problem/B2004', linkText: '洛谷 B2004 - 对齐输出',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    // 每行输出一个数\n    \n    return 0;\n}'
      }
    },
    6: {
      title: '顺序结构综合',
      videoBvid: 'BV1xpHtzoEPz', videoPage: 1, videoThumb: './assets/thumbs/day6.jpg',
      concept: {
        text: '<p>顺序结构是程序最基本的控制结构，代码从上到下依次执行。前面的课程已经学习了变量、输入输出和运算符，今天是综合运用。</p>' +
              '<p>解题的一般步骤：1）审题，明确输入输出格式；2）确定需要用到的变量和数据类型；3）编写输入代码；4）进行计算处理；5）按格式要求输出结果。</p>' +
              '<p>常见错误排查：编译错误（语法问题）、运行错误（除以零、数组越界）、逻辑错误（公式写错）。遇到错误时，可以先在纸上推演一遍程序的执行过程。</p>' +
              '<p>在竞赛中，读取数据时要注意题目给出的数据范围。如果结果可能超过 int 范围（约 21 亿），需要使用 long long 类型。</p>',
        keyPoints: ['顺序结构就是代码从上到下依次执行', '解题步骤：审题 -> 设计变量 -> 输入 -> 计算 -> 输出', '注意数据范围，大数用 long long', '常见错误：语法错误、逻辑错误、格式错误', '先在纸上推演程序执行过程']
      },
      quizzes: [
        { type: 'choice', question: '以下哪个类型的变量可以存储最大约 9×10^18 的整数？', options: ['int', 'long long', 'double', 'char'], answer: 1, explanation: 'long long 是 64 位整数，范围约为 -9×10^18 到 9×10^18。int 只有约 ±21 亿，double 虽然范围大但精度有限，char 只能存单个字符。', hints: ['int 最大约 21 亿', '需要比 int 更大的整数类型', '答案是 B: long long'] },
        { type: 'fill', question: '定义一个可以存储大整数（范围超过 int）的变量 n：', code: '_________ n;', answers: ['long long', 'longlong'], explanation: 'long long 是 C++ 中 64 位整数类型，可以存储范围在 ±9×10^18 以内的整数。声明格式为 long long 变量名;。', hints: ['64 位整数类型', '两个单词组成', '答案是 long long'] }
      ],
      challenge: {
        title: '地球人口承载力估计',
        description: '<p>根据题目给定的公式，计算地球最多可以承载多少人口。</p>' +
                     '<p><strong>输入：</strong>一个整数 x，表示某种资源量。</p>' +
                     '<p><strong>输出：</strong>根据公式计算的最大人口数。</p>' +
                     '<p>提示：仔细阅读题目给出的公式，注意运算顺序和数据类型。</p>',
        link: 'https://www.luogu.com.cn/problem/B2006', linkText: '洛谷 B2006 - 地球人口承载力估计',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x;\n    cin >> x;\n    // 根据题目公式计算\n    \n    return 0;\n}'
      }
    },
    7: {
      title: 'Week 1 复盘 · 小测',
      videoBvid: 'BV1mbgXzzEk3', videoPage: 1, videoThumb: './assets/thumbs/day7.jpg',
      concept: {
        text: '<p>第一周学习了 C++ 程序的基本结构、变量与数据类型、输入输出、运算符和格式化输出。让我们回顾这些核心知识点。</p>' +
              '<p>' + C('main()') + ' 是程序入口，' + C('#include <iostream>') + ' 引入输入输出库。' + C('int') + '、' + C('double') + '、' + C('char') + '、' + C('bool') + ' 是基本数据类型，' + C('long long') + ' 用于大整数。</p>' +
              '<p>' + C('cin >>') + ' 用于输入，' + C('cout <<') + ' 用于输出，' + C('endl') + ' 换行。运算符优先级：算术 > 关系 > 逻辑。整数除法会截断小数。</p>' +
              '<p>本周的挑战题覆盖了：Hello World、变量声明、A+B 问题。这些是竞赛编程的基础，务必熟练掌握。</p>',
        keyPoints: ['程序从 main() 开始执行', 'cin >> 输入，cout << 输出', 'int / int 结果还是 int，会截断小数', 'long long 存储大整数', '运算符优先级：算术 > 关系 > 逻辑']
      },
      quizzes: [
        { type: 'choice', question: '以下程序输出什么？\nint a = 5, b = 2;\ncout << a / b;', options: ['2.5', '2', '3', '编译错误'], answer: 1, explanation: 'a 和 b 都是 int 类型，a / b 是整数除法，5 / 2 = 2（截断小数部分）。如果要得到 2.5，需要至少一个操作数是浮点数。', hints: ['两个 int 相除', '结果是 int', '答案是 B: 2'] },
        { type: 'fill', question: '补全代码：声明三个 double 变量 x, y, z：', code: '_________', answers: ['double x,y,z;', 'double x, y, z;', 'double x,y,z'], explanation: '声明多个同类型变量时，用逗号分隔变量名。格式：类型名 变量1, 变量2, 变量3;。', hints: ['类型名是 double', '多个变量用逗号分隔', '答案是 double x,y,z;'] }
      ],
      challenge: {
        title: 'Week 1 综合挑战',
        description: '<p>给出圆的半径 r，求圆的直径、周长和面积。PI 取 3.1415926。</p>' +
                     '<p><strong>输入：</strong>一个实数 r（圆的半径）。</p>' +
                     '<p><strong>输出：</strong>三行，分别输出直径、周长、面积，保留 4 位小数。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>1.0</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>2.0000\n6.2832\n3.1416</pre>' +
                     '<p>提示：直径 = 2r，周长 = 2πr，面积 = πr²。使用 printf 的 %.4f 保留 4 位小数。</p>',
        link: 'https://www.luogu.com.cn/problem/B2014', linkText: '洛谷 B2014 - 与圆相关的计算',
        starterCode: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double r;\n    cin >> r;\n    const double PI = 3.14159;\n    // 计算周长和面积\n    \n    return 0;\n}'
      }
    },
    8: {
      title: 'if/else 分支',
      videoBvid: 'BV1cVuEzfEjB', videoPage: 1, videoThumb: './assets/thumbs/day8.jpg',
      concept: {
        text: '<p>分支结构让程序可以根据条件执行不同的代码。' + C('if (条件) { ... }') + ' 当条件为真时执行代码块，' + C('else { ... }') + ' 当条件为假时执行。</p>' +
              '<p>' + C('else if') + ' 用于多分支判断。例如：if (score >= 90) 优秀; else if (score >= 60) 及格; else 不及格。注意条件的顺序，范围大的条件应该放在后面。</p>' +
              '<p>条件的本质是布尔表达式，值为 ' + C('true') + '（真，非0值）或 ' + C('false') + '（假，0）。关系运算符和逻辑运算符的结果都是布尔值。</p>' +
              '<p>常见错误：在 if 条件后加分号（如 if (x > 0);），这会导致 if 语句体为空。' + C('==') + ' 和 ' + C('=') + ' 混淆也是常见错误。</p>',
        keyPoints: ['if (条件) { 代码块 }', 'else if 实现多分支', 'else 处理剩余所有情况', 'if 后面不要加分号', '== 是比较，= 是赋值']
      },
      quizzes: [
        { type: 'choice', question: '以下代码的输出是什么？\nint x = 5;\nif (x = 0) cout << "A";\nelse cout << "B";', options: ['A', 'B', '编译错误', '无输出'], answer: 1, explanation: '注意这里是 x = 0（赋值）而不是 x == 0（比较）。赋值后 x 的值为 0，在条件中 0 被视为 false，所以执行 else。', hints: ['注意是 = 不是 ==', 'x=0 是赋值，值为0', '答案是 B'] },
        { type: 'fill', question: '补全代码：如果 x 大于 0 输出"正数"，否则输出"非正数"：', code: 'if (_________) cout << "正数";\nelse cout << "非正数";', answers: ['x>0', 'x > 0', 'x>0 ', '0<x'], explanation: '判断 x 是否大于 0，使用关系运算符 >。格式：if (x > 0)。注意用的是 == 比较，不是 = 赋值。', hints: ['大于号 >', '关系表达式', '答案是 x>0'] }
      ],
      challenge: {
        title: '数字分类',
        description: '<p>输入一个整数，判断它是正数、负数还是零，并输出相应结果。</p>' +
                     '<p><strong>输入示例 1：</strong></p>' +
                     '<pre ' + PRE + '>5</pre>' +
                     '<p><strong>输出示例 1：</strong></p>' +
                     '<pre ' + PRE + '>positive</pre>' +
                     '<p><strong>输入示例 2：</strong></p>' +
                     '<pre ' + PRE + '>-3</pre>' +
                     '<p><strong>输出示例 2：</strong></p>' +
                     '<pre ' + PRE + '>negative</pre>' +
                     '<p>提示：使用 if-else if-else 多分支结构。</p>',
        link: 'https://www.luogu.com.cn/problem/B2035', linkText: '洛谷 B2035 - 判断数正负',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 判断正负零\n    \n    return 0;\n}'
      }
    },
    9: {
      title: 'switch 与嵌套分支',
      videoBvid: 'BV1nx4y1d7X3', videoPage: 1, videoThumb: './assets/thumbs/day9.jpg',
      concept: {
        text: '<p>' + C('switch') + ' 语句用于根据一个变量的值选择多个分支之一。格式为 switch (表达式) { case 值1: ... break; case 值2: ... break; default: ... }。</p>' +
              '<p>switch 中的表达式必须是整数类型（int、char 等），不能是浮点数或字符串。每个 case 后面通常要跟 ' + C('break') + '，否则会"贯穿"到下一个 case。</p>' +
              '<p>嵌套分支是指在一个 if 或 switch 内部再写另一个 if 或 switch。虽然功能强大，但嵌套层数过多会让代码难以阅读。通常建议不超过 3 层嵌套。</p>' +
              '<p>switch 适合判断"等于某个离散值"的情况，if-else if 适合判断"范围"的情况。例如判断星期几用 switch，判断成绩等级用 if-else if。</p>',
        keyPoints: ['switch 适合判断变量等于某个具体值', 'case 后面必须加 break，否则会贯穿', 'default 处理所有未列出的情况', 'switch 表达式只能是整数类型', '嵌套不宜超过 3 层']
      },
      quizzes: [
        { type: 'choice', question: '以下 switch 语句中，如果 x=2，输出什么？\nswitch(x) { case 1: cout << "A"; case 2: cout << "B"; case 3: cout << "C"; }', options: ['B', 'BC', 'ABC', '编译错误'], answer: 1, explanation: 'case 2 匹配后输出 "B"，但没有 break，会继续执行 case 3 输出 "C"，这种现象叫"贯穿"。正确写法是每个 case 末尾加 break;。', hints: ['注意没有 break', '会继续执行下一个 case', '答案是 B: BC'] },
        { type: 'fill', question: '补全 switch 语句：根据变量 grade（值为 A/B/C/D）输出对应的评语。', code: "switch (grade) {\n  case 'A': cout << \"优秀\"; _________;\n}", answers: ['break', 'break;', ' break;', ' break'], explanation: 'switch 的每个 case 分支通常需要用 break 结束，防止贯穿到下一个 case。break 表示跳出 switch 语句。', hints: ['防止贯穿到下一个 case', '跳出 switch 的关键字', '答案是 break;'] }
      ],
      challenge: {
        title: '月份天数',
        description: '<p>输入一个年份和月份，输出该月有多少天。注意闰年的2月有29天。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>2024 2</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>29</pre>' +
                     '<p>提示：闰年判断：能被4整除但不能被100整除，或者能被400整除。</p>',
        link: 'https://www.luogu.com.cn/problem/P5716', linkText: '洛谷 P5716 - 月份天数',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int year, month;\n    cin >> year >> month;\n    // 判断该月有多少天\n    \n    return 0;\n}'
      }
    },
    10: {
      title: 'for 循环',
      videoBvid: 'BV1svWvzSECS', videoPage: 1, videoThumb: './assets/thumbs/day10.jpg',
      concept: {
        text: '<p>' + C('for') + ' 循环是 C++ 中最常用的循环结构，格式为：for (初始化; 条件; 更新) { 循环体 }。适用于已知循环次数的场景。</p>' +
              '<p>for 循环的执行顺序：1）执行初始化（只一次）；2）判断条件，若为真则执行循环体；3）执行更新表达式；4）回到步骤2重复。若条件为假则退出循环。</p>' +
              '<p>循环变量通常命名为 i、j、k。' + C('i++') + ' 表示 i = i + 1。可以用 ' + C('break') + ' 提前退出循环，用 ' + C('continue') + ' 跳过当前迭代的剩余代码。</p>' +
              '<p>常见错误：循环条件写错导致死循环（如 for (i=0; i<10; ) 没有 i++），或者循环次数多算/少算1次。建议在纸上列出前3次和最后1次迭代来验证。</p>',
        keyPoints: ['for (初始化; 条件; 更新) { 循环体 }', '循环条件为真时继续，为假时退出', 'break 退出整个循环，continue 跳过本次剩余', '循环变量通常用 i, j, k', '注意循环边界，避免多1或少1']
      },
      quizzes: [
        { type: 'choice', question: '以下 for 循环执行了多少次？\nfor (int i = 1; i <= 5; i++) cout << i;', options: ['4次', '5次', '6次', '无限次'], answer: 1, explanation: 'i 从 1 开始，每次加1，条件 i<=5。i 取值 1,2,3,4,5 时条件为真，共 5 次。i=6 时条件为假，循环结束。', hints: ['i 的初始值是 1', '条件是 i <= 5', '答案是 B: 5次'] },
        { type: 'fill', question: '补全 for 循环：输出 1 到 10 的所有整数。', code: 'for (int i = 1; i <= 10; _________) cout << i << " ";', answers: ['i++', '++i', 'i=i+1', 'i+=1'], explanation: 'for 循环的更新表达式用于改变循环变量，i++ 表示每次循环后 i 增加 1。也可以使用 ++i、i=i+1 或 i+=1。', hints: ['每次循环后 i 增加 1', '自增运算符', '答案是 i++'] }
      ],
      challenge: {
        title: '求和',
        description: '<p>输入一个正整数 n，计算 1+2+3+...+n 的和。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>100</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>5050</pre>' +
                     '<p>提示：使用 for 循环累加，注意用 long long 存储结果防止溢出。</p>',
        link: 'https://www.luogu.com.cn/problem/P5722', linkText: '洛谷 P5722 - 数列求和',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long sum = 0;\n    // 用循环累加 1 到 n\n    \n    cout << sum << endl;\n    return 0;\n}'
      }
    },
    11: {
      title: 'while 与嵌套循环',
      videoBvid: 'BV1woyyYUEGB', videoPage: 1, videoThumb: './assets/thumbs/day11.jpg',
      concept: {
        text: '<p>' + C('while') + ' 循环格式为：while (条件) { 循环体 }。先判断条件，若为真则执行循环体。适合循环次数不确定的场景。</p>' +
              '<p>' + C('do-while') + ' 循环格式为：do { 循环体 } while (条件);。先执行一次循环体，再判断条件。至少执行一次。</p>' +
              '<p>嵌套循环是指在一个循环内部再写另一个循环。外层循环每执行一次，内层循环会完整执行一遍。常用于处理二维数据或组合问题。</p>' +
              '<p>while 循环如果条件永远为真就会成为死循环。务必确保循环体内有改变条件的语句。可以用 ' + C('break') + ' 提前退出，用 ' + C('continue') + ' 跳过本次。</p>',
        keyPoints: ['while (条件) { 循环体 }', 'do-while 至少执行一次', '嵌套循环：外层一次，内层一遍', '确保循环条件最终会变为假', 'break 退出，continue 跳过本次']
      },
      quizzes: [
        { type: 'choice', question: '以下代码中，while 循环执行了多少次？\nint i = 0;\nwhile (i < 5) i++;', options: ['4次', '5次', '6次', '无限次'], answer: 1, explanation: 'i 从 0 开始，每次循环 i 增加 1。当 i=0,1,2,3,4 时条件 i<5 为真，共 5 次。i=5 时条件为假，循环结束。', hints: ['i 从 0 开始', '条件是 i < 5', '答案是 B: 5次'] },
        { type: 'fill', question: '补全 while 循环：当 n 大于 0 时，不断将 n 除以 2（整数除法）。', code: 'while (_________) { n = n / 2; }', answers: ['n>0', 'n > 0', 'n>0 ', '0<n'], explanation: 'while 循环的条件表达式，当 n 大于 0 时继续循环。每次循环将 n 除以 2，直到 n 变为 0。', hints: ['条件是 n 大于 0', '用 > 运算符', '答案是 n>0'] }
      ],
      challenge: {
        title: '3n+1 问题',
        description: '<p>输入一个正整数 n，按照以下规则计算：如果 n 是偶数，n = n/2；如果 n 是奇数，n = 3*n+1。重复直到 n 变为 1，输出变换次数。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>6</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>8</pre>' +
                     '<p>提示：使用 while 循环，在循环体内判断 n 的奇偶性。</p>',
        link: 'https://www.luogu.com.cn/problem/P5727', linkText: '洛谷 P5727 - 冰雹猜想',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int cnt = 0;\n    // while 循环直到 n 变为 1\n    \n    cout << cnt << endl;\n    return 0;\n}'
      }
    },
    12: {
      title: '一维数组',
      videoBvid: 'BV1Kg3vzXEBc', videoPage: 1, videoThumb: './assets/thumbs/day12.jpg',
      concept: {
        text: '<p>' + C('数组') + ' 是相同类型数据的集合，用一个变量名存储多个值。声明格式：' + C('类型 数组名[大小];') + '，例如 ' + C('int a[10];') + '。</p>' +
              '<p>数组元素通过下标访问：' + C('a[0]') + ' 是第一个元素，' + C('a[9]') + ' 是第10个元素。下标从 0 开始！访问 ' + C('a[10]') + ' 会越界。</p>' +
              '<p>数组可以在声明时初始化：' + C('int a[5] = {1, 2, 3, 4, 5};') + '。如果省略大小，编译器会根据初始值数量自动确定：' + C('int a[] = {1, 2, 3};') + '。</p>' +
              '<p>遍历数组通常使用 for 循环：' + C('for (int i = 0; i < n; i++)') + '。注意条件是 i < n 而不是 i <= n，因为下标从 0 开始到 n-1。</p>',
        keyPoints: ['数组声明：类型 数组名[大小]', '数组下标从 0 开始', 'a[0] 是第一个元素', '遍历用 for (i=0; i<n; i++)', '不要访问越界（如 a[n]）']
      },
      quizzes: [
        { type: 'choice', question: '声明 int a[5]; 后，以下哪个访问是合法的？', options: ['a[5]', 'a[0]', 'a[-1]', 'a[10]'], answer: 1, explanation: '数组 a[5] 的有效下标是 0,1,2,3,4。a[5] 越界了（只有5个元素，下标最大为4）。a[0] 是第一个元素，是合法的。', hints: ['下标从 0 开始', '5 个元素的下标是 0~4', '答案是 B: a[0]'] },
        { type: 'fill', question: '补全代码：将数组 a 的前 n 个元素全部设为 0。', code: 'for (int i = 0; i < n; i++) _________;', answers: ['a[i]=0', 'a[i] = 0', 'a[i]=0 ', 'a[i] = 0 '], explanation: '通过循环遍历数组每个元素，用赋值语句 a[i] = 0 将其设置为 0。', hints: ['给数组元素赋值', '当前元素是 a[i]', '答案是 a[i]=0'] }
      ],
      challenge: {
        title: '找最小值',
        description: '<p>给出 n 个整数，求这 n 个整数的最小值。</p>' +
                     '<p><strong>输入：</strong>第一行一个整数 n，第二行 n 个用空格隔开的整数。</p>' +
                     '<p><strong>输出：</strong>一个整数，表示最小值。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>8\n1 9 2 60 8 2 6 1</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>1</pre>' +
                     '<p>提示：先读取第一个数作为当前最小值，然后依次与后面的数比较更新。</p>',
        link: 'https://www.luogu.com.cn/problem/P5718', linkText: '洛谷 P5718 - 找最小值',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // 找最大值\n    \n    return 0;\n}'
      }
    },
    13: {
      title: '字符与字符串',
      videoBvid: 'BV1nN9KBQE4S', videoPage: 1, videoThumb: './assets/thumbs/day13.jpg',
      concept: {
        text: '<p>' + C('char') + ' 类型存储单个字符，用单引号包裹：' + C("char c = 'A';") + '。字符在内存中以 ASCII 码存储，例如 \'A\' 的 ASCII 码是 65，\'0\' 是 48。</p>' +
              '<p>字符数组可以存储字符串：' + C('char s[20] = "Hello";') + '。字符串以 ' + C('\\0') + '（空字符）结尾，所以声明时要留一个位置给 \\0。</p>' +
              '<p>C++ 的 ' + C('string') + ' 类型（需要 #include <string>）更安全方便，支持直接用 + 连接、用 .length() 获取长度、用 [i] 访问单个字符。</p>' +
              '<p>字符与数字的转换：' + C("c - '0'") + ' 将数字字符转为对应的数值（如 \'5\' - \'0\' = 5）。' + C('c + 32') + ' 可以将大写字母转为小写（如 \'A\' + 32 = \'a\'）。</p>',
        keyPoints: ['char 存储单个字符，用单引号', '字符数组存储字符串，末尾有 \\0', 'string 类型更方便，需要 #include <string>', '字符转数字：c - \'0\'', '大小写转换：大写 + 32 = 小写']
      },
      quizzes: [
        { type: 'choice', question: '以下哪个可以正确声明一个字符串？', options: ['char s = "Hello";', 'char s[10] = "Hello";', 'string s = Hello;', "char s[] = 'Hello';"], answer: 1, explanation: 'char s[10] = "Hello"; 是正确的字符串声明。选项A用单字符变量存字符串；选项C缺少引号；选项D用了单引号。', hints: ['字符串用双引号', '需要足够大的字符数组', '答案是 B'] },
        { type: 'fill', question: '补全代码：将字符变量 c 中的大写字母转为小写（假设 c 是大写字母）。', code: 'c = _________;', answers: ['c+32', 'c + 32', 'c+32 ', 'c + 32 '], explanation: "大写字母和小写字母在 ASCII 表中相差 32。例如 'A'(65) + 32 = 'a'(97)。所以 c + 32 可以将大写转为小写。", hints: ['ASCII 中大写和小写相差 32', '加法运算', '答案是 c+32'] }
      ],
      challenge: {
        title: '字符菱形',
        description: '<p>输入一个字符，输出一个由该字符组成的菱形。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>*</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>  *\n ***\n*****\n ***\n  *</pre>' +
                     '<p>提示：使用嵌套循环，外层控制行，内层控制每行的空格和字符数。</p>',
        link: 'https://www.luogu.com.cn/problem/B2025', linkText: '洛谷 B2025 - 输出字符菱形',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char c;\n    cin >> c;\n    // 输出字符菱形\n    \n    return 0;\n}'
      }
    },
    14: {
      title: 'Week 2 复盘 · 小测',
      videoBvid: 'BV1uwEyzvEPh', videoPage: 1, videoThumb: './assets/thumbs/day14.jpg',
      concept: {
        text: '<p>第二周学习了分支结构（if/else、switch）和循环结构（for、while）、数组与字符串。这些知识是竞赛编程的核心基础。</p>' +
              '<p>分支结构让程序可以"做选择"：' + C('if') + ' 判断条件，' + C('switch') + ' 匹配具体值。循环结构让程序可以"重复做"：' + C('for') + ' 适合已知次数，' + C('while') + ' 适合未知次数。</p>' +
              '<p>数组 ' + C('a[n]') + ' 存储同类型的多个数据，下标从 0 开始。字符串是特殊的字符数组，以 ' + C('\\0') + ' 结尾。' + C('string') + ' 类型提供了更安全的字符串操作。</p>' +
              '<p>本周的挑战题覆盖了：数字分类、月份天数、求和、数组最大值、字符菱形。这些都是 CSP-J 常考的基础题型。</p>',
        keyPoints: ['if 做选择，for/while 做重复', '数组下标从 0 开始', 'switch 匹配具体值，if 判断范围', 'break 退出循环，continue 跳过本次', 'string 比 char[] 更安全方便']
      },
      quizzes: [
        { type: 'choice', question: '以下代码输出什么？\nint s = 0;\nfor (int i = 1; i <= 3; i++) s += i;\ncout << s;', options: ['3', '6', '9', '编译错误'], answer: 1, explanation: '循环 i 从 1 到 3，s 累加 1+2+3 = 6。for 循环执行 3 次，分别加 1、2、3。', hints: ['累加 1+2+3', '循环执行3次', '答案是 B: 6'] },
        { type: 'fill', question: '补全代码：遍历数组 a 的前 n 个元素并输出。', code: 'for (int i = 0; _________) cout << a[i] << " ";', answers: ['i<n', 'i < n', 'i<n ', 'i < n '], explanation: '遍历数组时，循环条件应该是 i < n（下标从 0 到 n-1）。如果写成 i <= n 会越界访问 a[n]。', hints: ['下标从 0 开始', '最大下标是 n-1', '答案是 i<n'] }
      ],
      challenge: {
        title: 'Week 2 综合挑战',
        description: '<p>现有若干名同学参加了期末考试，每名同学有 4 科成绩。如果某同学在某一科上的成绩与另一名同学在该科上的成绩差的绝对值不超过 5 分，则认为他们是"旗鼓相当的对手"。问每个同学有几个旗鼓相当的对手。</p>' +
                     '<p><strong>输入：</strong>第一行一个正整数 n，接下来 n 行每行 4 个整数表示各科成绩。</p>' +
                     '<p><strong>输出：</strong>n 行，每行一个整数表示该同学的对手数。</p>' +
                     '<p>提示：用结构体或二维数组存储成绩，双重循环比较每对同学。</p>',
        link: 'https://www.luogu.com.cn/problem/P5728', linkText: '洛谷 P5728 - 旗鼓相当的对手',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // 统计正数、负数、零的个数\n    \n    return 0;\n}'
      }
    },
    15: {
      title: '函数基础',
      videoBvid: 'BV1dT41137qX', videoPage: 1, videoThumb: './assets/thumbs/day15.jpg',
      concept: {
        text: '<p>' + C('函数') + ' 是一段可以重复使用的代码块，用于完成特定任务。使用函数可以让代码更简洁、更易维护。</p>' +
              '<p>函数定义格式：' + C('返回类型 函数名(参数列表) { 函数体 }') + '。例如 ' + C('int add(int a, int b) { return a + b; }') + '。</p>' +
              '<p>' + C('return') + ' 语句将结果返回给调用者。如果返回类型是 ' + C('void') + '，则不需要 return 值。函数需要先定义（或声明）再调用。</p>' +
              '<p>参数是函数接收的输入值，按值传递（函数内修改不影响外部变量）。如果需要在函数内修改外部变量，可以使用引用传递 ' + C('int &x') + '（属于进阶内容）。</p>',
        keyPoints: ['函数定义：返回类型 函数名(参数) { ... }', 'return 语句返回结果', 'void 表示不返回值', '函数要先定义后调用', '参数默认按值传递']
      },
      quizzes: [
        { type: 'choice', question: '以下哪个是正确的函数定义？', options: ['void f() { return 0; }', 'int f() { return 0; }', 'int f { return 0; }', 'f() { return 0; }'], answer: 1, explanation: 'int f() { return 0; } 是正确的函数定义。返回类型为 int，函数名为 f，参数为空，返回整数 0。选项A中 void 不能返回具体值；选项C缺少括号；选项D缺少返回类型。', hints: ['函数定义需要返回类型、函数名、括号和函数体', 'return 的值类型要和返回类型匹配', '答案是 B'] },
        { type: 'fill', question: '补全函数：定义一个求两数最大值的函数 maxVal。', code: '_________ maxVal(int a, int b) {\n  return a > b ? a : b;\n}', answers: ['int'], explanation: '函数返回两个整数中的较大值，返回类型应该是 int。', hints: ['返回的是整数', '返回类型写在函数名前面', '答案是 int'] }
      ],
      challenge: {
        title: '编写求阶乘的函数',
        description: '<p>输入一个正整数 n，编写函数 fac(n) 计算 n 的阶乘并返回。在主函数中调用并输出结果。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>5</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>120</pre>' +
                     '<p>提示：函数定义格式为 long long fac(int n)，在函数内用循环计算阶乘。</p>',
        link: 'https://www.luogu.com.cn/problem/P5739', linkText: '洛谷 P5739 - 计算阶乘',
        starterCode: '#include <iostream>\nusing namespace std;\n\n// 在这里定义 fac 函数\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fac(n) << endl;\n    return 0;\n}'
      }
    },
    16: {
      title: '递归入门',
      videoBvid: 'BV1tkH6zaE5Z', videoPage: 1, videoThumb: './assets/thumbs/day16.jpg',
      concept: {
        text: '<p>' + C('递归') + ' 是函数调用自身的编程技巧。递归需要两个要素：' + C('终止条件') + '（基本情况）和 ' + C('递归公式') + '（将问题分解为更小的同类问题）。</p>' +
              '<p>经典例子：阶乘 ' + C('n! = n * (n-1)!') + '，终止条件是 ' + C('0! = 1') + '。斐波那契数列 ' + C('F(n) = F(n-1) + F(n-2)') + '，终止条件是 F(1)=F(2)=1。</p>' +
              '<p>递归的执行过程像"俄罗斯套娃"，不断将问题分解，直到满足终止条件后再逐层返回结果。</p>' +
              '<p>递归虽然代码简洁，但过深的递归会导致栈溢出。C++ 中递归深度一般不要超过 10^5。对于可以递推解决的问题，通常用循环更高效。</p>',
        keyPoints: ['递归是函数调用自身', '必须有终止条件，否则死循环', '递归公式将问题分解为更小的问题', '经典例子：阶乘、斐波那契', '递归过深会导致栈溢出']
      },
      quizzes: [
        { type: 'choice', question: '以下哪个是递归计算阶乘的正确实现？', options: ['int f(int n){ return n*f(n); }', 'int f(int n){ if(n==0)return 1; return n*f(n-1); }', 'int f(int n){ return n*f(n+1); }', 'int f(int n){ if(n==1)return 1; return f(n); }'], answer: 1, explanation: '正确的递归阶乘需要终止条件 n==0 返回 1，否则返回 n * f(n-1)。选项A没有终止条件会死循环；选项C参数越调越大；选项D递归参数不变。', hints: ['必须有终止条件 n==0', '每次递归 n 应该减 1', '答案是 B'] },
        { type: 'fill', question: '补全递归函数：计算 1+2+...+n 的和。', code: 'int sum(int n) {\n  if (n == 1) return 1;\n  return _________;\n}', answers: ['n+sum(n-1)', 'n + sum(n - 1)', 'sum(n-1)+n', 'sum(n - 1) + n'], explanation: '递归公式：sum(n) = n + sum(n-1)。终止条件是 n==1 时返回 1。每次递归 n 减 1，直到 n=1。', hints: ['n 的和等于 n 加上前 n-1 项的和', '调用 sum(n-1)', '答案是 n+sum(n-1)'] }
      ],
      challenge: {
        title: '猴子吃桃',
        description: '<p>一只小猴买了若干个桃子。第一天他刚好吃了这些桃子的一半，又贪嘴多吃了一个；接下来的每一天它都会吃剩余的桃子的一半外加一个。第 n 天早上起来一看，只剩下 1 个桃子了。请问小猴买了几个桃子？</p>' +
                     '<p><strong>输入：</strong>一个正整数 n，表示天数。</p>' +
                     '<p><strong>输出：</strong>输出小猴买了多少个桃子。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>4</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>22</pre>' +
                     '<p>提示：递推公式 f(n-1) = (f(n) + 1) * 2，从第 n 天（只剩 1 个）倒推到第 1 天。</p>',
        link: 'https://www.luogu.com.cn/problem/P5743', linkText: '洛谷 P5743 - 猴子吃桃',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 从第 n 天倒推到第 1 天\n    int peach = 1;\n    \n    cout << peach << endl;\n    return 0;\n}'
      }
    },
    17: {
      title: '排序算法',
      videoBvid: 'BV1gjHDzcEq5', videoPage: 1, videoThumb: './assets/thumbs/day17.jpg',
      concept: {
        text: '<p>排序是将数据按特定顺序（升序或降序）排列的算法。CSP-J 中最基础的两种排序是 ' + C('冒泡排序') + ' 和 ' + C('选择排序') + '。</p>' +
              '<p>冒泡排序：重复遍历数组，相邻两个元素如果顺序错误就交换。每轮遍历后，最大的元素会"冒泡"到末尾。时间复杂度 O(n²)。</p>' +
              '<p>选择排序：每轮找到未排序部分的最小值，放到已排序部分的末尾。时间复杂度也是 O(n²)，但交换次数比冒泡少。</p>' +
              '<p>C++ 标准库提供 ' + C('sort()') + ' 函数（需要 #include <algorithm>），可以对数组排序：sort(a, a+n) 将数组 a 的前 n 个元素升序排列。</p>',
        keyPoints: ['冒泡排序：相邻比较交换', '选择排序：每轮选最小值放前面', 'sort(a, a+n) 快速排序', '排序前#include <algorithm>', '升序排列，降序用 greater<int>()']
      },
      quizzes: [
        { type: 'choice', question: '对数组 [3,1,4,1,5] 进行冒泡排序，第一轮结束后数组变成什么？', options: ['[1,1,3,4,5]', '[3,1,4,1,5]', '[3,1,1,4,5]', '[1,3,1,4,5]'], answer: 2, explanation: '冒泡排序第一轮会将最大的元素 5 冒泡到末尾。比较交换过程：3和1交换→[1,3,4,1,5]，3和4不交换，4和1交换→[1,3,1,4,5]，4和5不交换。结果是 [1,3,1,4,5]。', hints: ['每轮把最大的元素移到最后', '只关注第一轮的变化', '答案是 D: [1,3,1,4,5]'] },
        { type: 'fill', question: '补全代码：使用 sort 对数组 a 的前 n 个元素升序排序。', code: '_________(a, a + n);', answers: ['sort'], explanation: 'sort 是 C++ 标准库中的排序函数，定义在 <algorithm> 头文件中。调用格式为 sort(起始地址, 结束地址)。', hints: ['C++ 标准库排序函数', '需要 #include <algorithm>', '答案是 sort'] }
      ],
      challenge: {
        title: '从小到大排序',
        description: '<p>输入 n 个整数，将它们从小到大排序后输出。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>5\n3 1 4 1 5</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>1 1 3 4 5</pre>' +
                     '<p>提示：可以使用 sort 函数，也可以自己写冒泡或选择排序。</p>',
        link: 'https://www.luogu.com.cn/problem/P1177', linkText: '洛谷 P1177 - 【模板】排序',
        starterCode: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // 排序\n    \n    for (int i = 0; i < n; i++) cout << a[i] << " ";\n    return 0;\n}'
      }
    },
    18: {
      title: '查找算法',
      videoBvid: 'BV1LM4y147Yq', videoPage: 1, videoThumb: './assets/thumbs/day18.jpg',
      concept: {
        text: '<p>查找是在数据集合中寻找特定元素的过程。基础查找算法有 ' + C('线性查找') + ' 和 ' + C('二分查找') + '。</p>' +
              '<p>线性查找：从头到尾逐个比较，找到目标即返回。适用于无序数据。时间复杂度 O(n)。</p>' +
              '<p>二分查找：要求数据已排序。每次比较中间元素，若目标较小则在左半部分继续查找，否则在右半部分。时间复杂度 O(log n)，效率远高于线性查找。</p>' +
              '<p>二分查找的关键是维护两个边界 ' + C('left') + ' 和 ' + C('right') + '，计算中间位置 ' + C('mid = (left + right) / 2') + '，不断缩小范围直到找到目标或范围为空。</p>',
        keyPoints: ['线性查找：逐个比较，适合无序数据', '二分查找：每次缩小一半范围', '二分查找要求数据已排序', '时间复杂度：线性O(n)，二分O(log n)', '二分查找用 while(left <= right)']
      },
      quizzes: [
        { type: 'choice', question: '在已排序数组 [1,3,5,7,9,11,13] 中用二分查找目标 9，需要比较几次？', options: ['2次', '3次', '4次', '7次'], answer: 1, explanation: '第一次 mid=3（值7），9>7，在右半部分 [9,11,13]；第二次 mid=5（值11），9<11，在左半部分 [9]；第三次找到 9。共 3 次比较。', hints: ['已排序数组用二分查找', '每次范围缩小一半', '答案是 B: 3次'] },
        { type: 'fill', question: '补全二分查找代码：计算中间位置 mid。', code: 'int mid = _________;', answers: ['(left+right)/2', '(left + right) / 2', 'left+(right-left)/2'], explanation: '二分查找的中间位置可以用 (left + right) / 2 计算。为避免整数溢出，更安全的写法是 left + (right - left) / 2。', hints: ['中间位置是两个边界的平均值', '整数除法自动向下取整', '答案是 (left+right)/2'] }
      ],
      challenge: {
        title: '查找指定元素',
        description: '<p>输入 n 个单调不减的非负整数，然后进行 m 次询问。对于每次询问，给出一个整数 q，要求输出这个数字在序列中<strong>第一次出现</strong>的编号（从 1 开始）。如果没有找到，输出 -1。</p>' +
                     '<p><strong>输入：</strong>第一行 2 个整数 n 和 m，表示数字个数和询问次数。第二行 n 个整数。第三行 m 个整数，表示询问的数字。</p>' +
                     '<p><strong>输出：</strong>输出一行，m 个整数，以空格隔开，表示答案。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>11 3\n1 3 3 3 5 7 9 11 13 15 15\n1 3 6</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>1 2 -1</pre>' +
                     '<p>提示：数据已排序，用二分查找找到第一次出现的位置。注意 lower_bound 的使用。</p>',
        link: 'https://www.luogu.com.cn/problem/P2249', linkText: '洛谷 P2249 - 查找',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    int a[100000];\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // 对每次询问用二分查找\n    \n    return 0;\n}'
      }
    },
    19: {
      title: '模拟与枚举',
      videoBvid: 'BV1Fy4y1N7gf', videoPage: 1, videoThumb: './assets/thumbs/day19.jpg',
      concept: {
        text: '<p>' + C('模拟') + ' 是按照题目描述一步步执行的过程。' + C('枚举') + ' 是遍历所有可能的情况，逐一验证是否满足条件。</p>' +
              '<p>模拟的关键是准确地用代码描述题目中的过程。例如模拟时钟、模拟行走、模拟游戏过程等。需要注意边界条件和状态更新顺序。</p>' +
              '<p>枚举（暴力搜索）适用于搜索空间较小的问题。例如枚举 1~n 中的所有数，判断哪些满足条件。优化枚举的关键是缩小搜索范围或提前剪枝。</p>' +
              '<p>很多 CSP-J 题目本质上都是模拟或枚举，只是包装了不同的故事背景。理解题目本质后，把过程翻译成代码即可。</p>',
        keyPoints: ['模拟：按题目描述一步步执行', '枚举：遍历所有可能情况', '优化枚举：缩小范围、提前剪枝', '注意边界条件', '把题目过程翻译成代码']
      },
      quizzes: [
        { type: 'choice', question: '以下哪种情况最适合用枚举法？', options: ['数据量 10^9 的排序', '判断 1~100 中有多少个数能被 3 整除', '需要快速查找已排序数据', '计算两个大数的最大公约数'], answer: 1, explanation: '枚举适合搜索空间较小的情况。1~100 范围很小，可以逐个判断。10^9 数据量太大不能枚举；已排序数据查找用二分；最大公约数用辗转相除。', hints: ['枚举适合小范围搜索', '1~100 只有100个数', '答案是 B'] },
        { type: 'fill', question: '补全代码：枚举 1~n 中所有偶数并输出。', code: 'for (int i = 1; i <= n; i++)\n  if (_________) cout << i << " ";', answers: ['i%2==0', 'i % 2 == 0', 'i%2==0 ', 'i % 2 == 0 '], explanation: '判断偶数的条件是能被 2 整除，即 i % 2 == 0。枚举每个数，如果是偶数就输出。', hints: ['偶数能被2整除', '取模运算符 %', '答案是 i%2==0'] }
      ],
      challenge: {
        title: '分解质因数',
        description: '<p>已知正整数 n 是两个不同质数的乘积，试求出两者中较大的那个质数。</p>' +
                     '<p><strong>输入：</strong>一个正整数 n。</p>' +
                     '<p><strong>输出：</strong>一个正整数 p，即较大的那个质数。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>21</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>7</pre>' +
                     '<p>提示：从 2 开始枚举，找到第一个能整除 n 的数，则 n/该数即为较大的质数。</p>',
        link: 'https://www.luogu.com.cn/problem/P1075', linkText: '洛谷 P1075 - 质因数分解',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << n << "=";\n    // 分解质因数\n    \n    return 0;\n}'
      }
    },
    20: {
      title: '递推',
      videoBvid: 'BV1QX4y1J7Pk', videoPage: 1, videoThumb: './assets/thumbs/day20.jpg',
      concept: {
        text: '<p>' + C('递推') + ' 是一种用已知推未知的算法思想。从基础情况出发，通过递推关系式逐步求出后续结果。</p>' +
              '<p>最经典的例子是' + C('斐波那契数列') + '：f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。每一项都由前两项相加得到。</p>' +
              '<p>递推的三要素：① 初始条件（基础情况）；② 递推关系式（状态转移方程）；③ 终止条件（求到第几项）。</p>' +
              '<p>常见递推模型：斐波那契数列、台阶问题（每次走 1 或 2 步，走到第 n 级有多少种走法）、组合数递推等。递推通常用数组存储中间结果，避免重复计算。</p>',
        keyPoints: ['递推：用已知推未知', '三要素：初始条件+递推式+终止条件', '斐波那契：f(n)=f(n-1)+f(n-2)', '台阶问题也是经典递推', '用数组存储中间结果避免重复计算']
      },
      quizzes: [
        { type: 'choice', question: '斐波那契数列 f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)，f(6) 等于多少？', options: ['5', '8', '13', '21'], answer: 1, explanation: 'f(3)=2, f(4)=3, f(5)=5, f(6)=8。斐波那契数列：1,1,2,3,5,8...', hints: ['从 f(3) 开始逐步计算', 'f(3)=f(2)+f(1)=2', '答案是 B: 8'] },
        { type: 'fill', question: '补全代码：用递推计算斐波那契数列第 n 项。', code: 'f[1] = 1; f[2] = 1;\nfor (int i = 3; i <= n; i++)\n  f[i] = _________;', answers: ['f[i-1]+f[i-2]', 'f[i - 1] + f[i - 2]'], explanation: '斐波那契递推公式：f(i) = f(i-1) + f(i-2)。每一项等于前两项之和。', hints: ['递推公式是什么？', '前两项之和', '答案是 f[i-1]+f[i-2]'] }
      ],
      challenge: {
        title: '数楼梯',
        description: '<p>楼梯有 N 阶，上楼可以一步上一阶，也可以一步上二阶。编写一个程序，计算从第 0 阶到第 N 阶共有多少种走法。</p>' +
                     '<p><strong>输入：</strong>一个正整数 N（1 ≤ N ≤ 5000）。</p>' +
                     '<p><strong>输出：</strong>一个正整数，表示走到第 N 阶的走法数。注意结果可能很大。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>4</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>5</pre>' +
                     '<p>提示：这是经典的递推问题。f(1)=1, f(2)=2, f(n)=f(n-1)+f(n-2)。注意 N 较大时需要高精度。</p>',
        link: 'https://www.luogu.com.cn/problem/P1255', linkText: '洛谷 P1255 - 数楼梯',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 递推计算走法数\n    \n    return 0;\n}'
      }
    },
    21: {
      title: 'Week 3 复盘 · 小测',
      videoBvid: 'BV1fWEWzfEZD', videoPage: 1, videoThumb: './assets/thumbs/day21.jpg',
      concept: {
        text: '<p>第三周学习了函数、递归、排序、查找、模拟枚举和贪心算法。这些知识是 CSP-J 进阶内容的核心。</p>' +
              '<p>函数让代码模块化，递归让问题自我分解，排序和查找是数据处理的基础，模拟和枚举是竞赛中的通用思路，贪心则是最常用的优化策略之一。</p>' +
              '<p>本周重点回顾：sort(a, a+n) 快速排序、二分查找的 left/right/mid 更新、递归的终止条件、贪心的排序后策略。</p>' +
              '<p>Week 3 的挑战题覆盖了：阶乘函数、汉诺塔、排序、查找、质因数分解、数列极差。这些都是 CSP-J 中常见的算法题型。</p>',
        keyPoints: ['函数让代码模块化', '递归需要终止条件', 'sort(a, a+n) 快速排序', '二分查找要求数据有序', '贪心：先排序，再每次选最优']
      },
      quizzes: [
        { type: 'choice', question: '对 100 个已排序的整数进行查找，二分查找最多需要比较几次？', options: ['50次', '10次', '7次', '100次'], answer: 2, explanation: '二分查找每次范围缩小一半。2^7 = 128 > 100，所以最多需要 7 次比较。', hints: ['二分查找复杂度 O(log n)', '2^6=64, 2^7=128', '答案是 C: 7次'] },
        { type: 'fill', question: '补全代码：调用函数判断 n 是否为素数。', code: 'if (_________(n)) cout << "是素数";', answers: ['isPrime', 'isPrime '], explanation: '假设已经定义了 bool isPrime(int n) 函数，直接调用 isPrime(n) 即可。函数调用格式为函数名(参数)。', hints: ['直接调用函数', '函数名是 isPrime', '答案是 isPrime'] }
      ],
      challenge: {
        title: 'Week 3 综合挑战',
        description: '<p>某培训机构的学员有如下信息：姓名（字符串）、年龄（周岁，整数）、去年 NOIP 成绩（整数，且保证是 5 的倍数）。经过为期一年的培训，所有同学的成绩都有所提高，提升了 20%（NOIP 满分是 600 分，不能超过）。年龄也增加 1 岁。请设计结构体储存学员信息，输出培训后的学员信息。</p>' +
                     '<p><strong>输入：</strong>第一行一个正整数 n，接下来 n 行每行依次为姓名、年龄、成绩。</p>' +
                     '<p><strong>输出：</strong>n 行，每行依次输出培训后的姓名、年龄、成绩。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>3\nkkksc03 24 0\nchen_zhe 14 400\nnzhtl1477 18 590</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>kkksc03 25 0\nchen_zhe 15 480\nnzhtl1477 19 600</pre>' +
                     '<p>提示：定义结构体存储姓名、年龄、成绩，编写函数模拟培训过程（年龄+1，成绩*1.2 且不超过 600）。</p>',
        link: 'https://www.luogu.com.cn/problem/P5744', linkText: '洛谷 P5744 - 培训',
        starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n    int score;\n};\n\nStudent train(Student s) {\n    // 年龄 +1，成绩提升 20%（不超过 600）\n    \n    return s;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        Student s;\n        cin >> s.name >> s.age >> s.score;\n        s = train(s);\n        cout << s.name << " " << s.age << " " << s.score << endl;\n    }\n    return 0;\n}'
      }
    },
    22: {
      title: '二维数组',
      videoBvid: 'BV1Di4y1w7mT', videoPage: 1, videoThumb: './assets/thumbs/day22.jpg',
      concept: {
        text: '<p>' + C('二维数组') + ' 是数组的数组，用于存储表格或矩阵数据。声明格式：' + C('类型 数组名[行数][列数];') + '，例如 ' + C('int a[3][4];') + '。</p>' +
              '<p>访问元素：' + C('a[i][j]') + ' 表示第 i 行第 j 列的元素（下标从 0 开始）。遍历二维数组通常用嵌套 for 循环：外层控制行，内层控制列。</p>' +
              '<p>二维数组初始化：' + C('int a[2][3] = {{1,2,3}, {4,5,6}};') + '。第一维的大小可以省略，编译器会根据初始化值推断。</p>' +
              '<p>常见应用：矩阵运算、迷宫地图、棋盘游戏、图像处理等。注意行和列不要搞混，a[i][j] 中 i 是行号，j 是列号。</p>',
        keyPoints: ['二维数组声明：类型 a[行][列]', '访问：a[i][j]，i 行 j 列', '遍历用嵌套 for 循环', '可以省略第一维大小', '常见应用：矩阵、地图、棋盘']
      },
      quizzes: [
        { type: 'choice', question: '声明 int a[3][4]; 后，a[2][3] 表示什么？', options: ['第2行第3列', '第3行第4列', '第2行第4列', '第3行第3列'], answer: 1, explanation: 'a[2][3] 表示第 3 行第 4 列（下标从 0 开始）。a[0] 是第一行，a[2] 是第三行；a[2][0] 是第三行第一列，a[2][3] 是第三行第四列。', hints: ['下标从 0 开始', 'a[2] 是第 3 行', '答案是 B: 第3行第4列'] },
        { type: 'fill', question: '补全代码：输入一个 3×3 矩阵的所有元素。', code: 'for (int i = 0; i < 3; i++)\n  for (int j = 0; j < 3; j++)\n    cin >> _________;', answers: ['a[i][j]', 'a[i][j] '], explanation: '用 cin >> a[i][j] 读取矩阵的第 i 行第 j 列元素。外层循环控制行，内层循环控制列。', hints: ['二维数组元素访问格式', '行号 i，列号 j', '答案是 a[i][j]'] }
      ],
      challenge: {
        title: '矩阵转置',
        description: '<p>输入一个 n×m 的矩阵，输出它的转置矩阵（m×n，即行列互换）。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>2 3\n1 2 3\n4 5 6</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>1 4\n2 5\n3 6</pre>' +
                     '<p>提示：原矩阵 a[i][j] 变成转置矩阵 b[j][i]。</p>',
        link: 'https://www.luogu.com.cn/problem/B2106', linkText: '洛谷 B2106 - 矩阵转置',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, m, a[100][100];\n    cin >> n >> m;\n    for (int i = 0; i < n; i++)\n      for (int j = 0; j < m; j++)\n        cin >> a[i][j];\n    // 输出转置矩阵\n    \n    return 0;\n}'
      }
    },
    23: {
      title: '结构体',
      videoBvid: 'BV1ezExz4EwU', videoPage: 1, videoThumb: './assets/thumbs/day23.jpg',
      concept: {
        text: '<p>' + C('结构体') + '（struct）允许将多个不同类型的数据组合成一个整体。例如一个学生包含姓名、年龄、成绩等属性。</p>' +
              '<p>定义结构体：' + C('struct Student { string name; int age; double score; };') + '。声明变量：' + C('Student stu;') + '。访问成员用点号：' + C('stu.name') + '、' + C('stu.age') + '。</p>' +
              '<p>结构体数组：' + C('Student a[100];') + ' 存储 100 个学生。a[i].score 访问第 i 个学生的成绩。</p>' +
              '<p>结构体让代码更接近现实世界，便于组织复杂数据。C++ 中 struct 和 class 很相似，但 struct 的成员默认是 public。</p>',
        keyPoints: ['struct 定义复合数据类型', '用 . 访问成员变量', '可以定义结构体数组', 'struct 成员默认 public', '让代码更接近现实世界']
      },
      quizzes: [
        { type: 'choice', question: '以下哪个是结构体成员的正确访问方式？', options: ['stu->name', 'stu.name', 'stu::name', 'stu[name]'], answer: 1, explanation: '结构体变量用点号 . 访问成员，如 stu.name。-> 用于指针访问成员，:: 是作用域运算符，[] 是数组下标。', hints: ['结构体变量访问成员用点号', '类似对象访问属性', '答案是 B: stu.name'] },
        { type: 'fill', question: '补全代码：定义一个包含 x 和 y 两个整数的结构体 Point。', code: '_________ Point {\n  int x, y;\n};', answers: ['struct'], explanation: 'struct 是 C++ 中定义结构体的关键字。格式：struct 结构体名 { 成员列表; };', hints: ['定义结构体的关键字', '以小写字母开头', '答案是 struct'] }
      ],
      challenge: {
        title: '最厉害的学生',
        description: '<p>输入 n 个学生的姓名和成绩，按成绩从高到低排序后输出。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>3\nAlice 85\nBob 92\nCharlie 78</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>Bob 92\nAlice 85\nCharlie 78</pre>' +
                     '<p>提示：定义结构体 Student { string name; int score; }，用 sort 配合自定义比较函数排序。</p>',
        link: 'https://www.luogu.com.cn/problem/P5740', linkText: '洛谷 P5740 - 最厉害的学生',
        starterCode: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int score;\n};\n\nint main() {\n    int n;\n    Student a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i].name >> a[i].score;\n    // 按成绩排序\n    \n    for (int i = 0; i < n; i++)\n        cout << a[i].name << " " << a[i].score << endl;\n    return 0;\n}'
      }
    },
    24: {
      title: '指针基础',
      videoBvid: 'BV1jwD2YdE1j', videoPage: 1, videoThumb: './assets/thumbs/day24.jpg',
      concept: {
        text: '<p>' + C('指针') + ' 是存储内存地址的变量。声明格式：' + C('类型 *指针名;') + '，例如 ' + C('int *p;') + '。</p>' +
              '<p>' + C('&') + ' 是取地址运算符，' + C('p = &a;') + ' 将变量 a 的地址赋给指针 p。' + C('*') + ' 是解引用运算符，' + C('*p') + ' 表示指针 p 指向的变量的值。</p>' +
              '<p>指针与数组：数组名本质上是数组首元素的地址。' + C('int a[5]; int *p = a;') + ' 后，' + C('p[i]') + ' 等价于 ' + C('a[i]') + '，' + C('*(p+i)') + ' 也等价于 ' + C('a[i]') + '。</p>' +
              '<p>指针在 CSP-J 中考得较少，但理解指针对学习数据结构（链表、树）很有帮助。入门阶段重点掌握指针的基本概念和与数组的关系。</p>',
        keyPoints: ['指针存储内存地址', '& 取地址，* 解引用', '数组名是首元素地址', 'p[i] 等价于 *(p+i)', '指针是数据结构的基础']
      },
      quizzes: [
        { type: 'choice', question: '已知 int a = 10; int *p = &a; 则 *p 的值是多少？', options: ['a 的地址', '10', 'p 的地址', '不确定'], answer: 1, explanation: 'p 指向 a，*p 是解引用，即获取 p 指向的变量的值。a 的值是 10，所以 *p = 10。', hints: ['p = &a 表示 p 指向 a', '*p 获取指向的值', '答案是 B: 10'] },
        { type: 'fill', question: '补全代码：让指针 p 指向变量 x。', code: 'int x = 5;\nint *p = _________;', answers: ['&x', '&x '], explanation: '&x 获取变量 x 的地址，赋给指针 p。这样 p 就指向了 x。', hints: ['取地址运算符', '& 加变量名', '答案是 &x'] }
      ],
      challenge: {
        title: '数组逆序重存放',
        description: '<p>输入 n 个整数，用指针方式将它们逆序输出。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>5\n1 2 3 4 5</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>5 4 3 2 1</pre>' +
                     '<p>提示：用指针 p 指向数组末尾，然后向前遍历。</p>',
        link: 'https://www.luogu.com.cn/problem/B2089', linkText: '洛谷 B2089 - 数组逆序重存放',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int *p = a + n - 1;\n    // 用指针逆序输出\n    \n    return 0;\n}'
      }
    },
    25: {
      title: '搜索入门（DFS/BFS）',
      videoBvid: 'BV1BNTuzxEN9', videoPage: 1, videoThumb: './assets/thumbs/day25.jpg',
      concept: {
        text: '<p>' + C('深度优先搜索（DFS）') + ' 是一种"一条路走到底，走不通就回退"的搜索策略。通常用递归或栈实现。</p>' +
              '<p>DFS 的基本框架：从起点出发，标记当前节点已访问，然后依次尝试所有相邻的未访问节点。如果走到死路，回溯到上一个节点继续尝试其他方向。</p>' +
              '<p>' + C('广度优先搜索（BFS）') + ' 是一种"逐层扩展"的搜索策略。用队列实现：把起点入队，每次取出队首节点，将其所有未访问的相邻节点入队，直到找到目标或队列为空。</p>' +
              '<p>DFS 适合找所有方案（如八皇后、全排列），BFS 适合找最短路径（如迷宫最短步数）。两者都是 CSP-J 必考的核心算法。</p>',
        keyPoints: ['DFS：一条路走到底再回溯', 'BFS：逐层扩展，用队列', 'DFS 用递归或栈实现', 'DFS 适合找所有方案', 'BFS 适合找最短路径']
      },
      quizzes: [
        { type: 'choice', question: 'DFS（深度优先搜索）通常用什么数据结构实现？', options: ['队列', '栈或递归', '哈希表', '堆'], answer: 1, explanation: 'DFS 用栈（或递归）实现，一路走到底再回溯。递归本质上就是利用函数调用栈。', hints: ['DFS 是"走到底再回退"', '回退需要什么结构？', '答案是 B: 栈或递归'] },
        { type: 'fill', question: '补全代码：BFS 中从队列取出队首元素。', code: 'queue<int> q;\nq.push(start);\nwhile (!q.empty()) {\n  int cur = q._________();\n  q.pop();\n  // 处理 cur 的相邻节点\n}', answers: ['front', 'front '], explanation: 'queue 的 front() 返回队首元素，pop() 删除队首。BFS 每次取出队首进行处理，将其相邻节点入队。', hints: ['查看队首元素的方法', '不是 top()，那是 stack', '答案是 front'] }
      ],
      challenge: {
        title: '迷宫',
        description: '<p>给定一个 N×M 方格的迷宫，迷宫中有可通行的空地（.）和不可通行的障碍（#）。从起点 (sx, sy) 出发，只能上下左右移动，求到达终点 (tx, ty) 的最少步数。</p>' +
                     '<p><strong>输入：</strong>第一行 N, M。接下来 N 行每行 M 个字符。最后一行 sx sy tx ty。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>5 5\n.....\n.###.\n.....\n.###.\n.....\n0 0 4 4</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>8</pre>' +
                     '<p>提示：用 BFS 从起点搜索，第一次到达终点时的步数就是最短路径。DFS 也能搜索但不保证最短。</p>',
        link: 'https://www.luogu.com.cn/problem/P1605', linkText: '洛谷 P1605 - 迷宫',
        starterCode: '#include <iostream>\n#include <queue>\nusing namespace std;\n\nint dx[] = {0,0,1,-1};\nint dy[] = {1,-1,0,0};\n\nint main() {\n    int n, m;\n    char maze[100][100];\n    cin >> n >> m;\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < m; j++)\n            cin >> maze[i][j];\n    int sx, sy, tx, ty;\n    cin >> sx >> sy >> tx >> ty;\n    // BFS 求最短路径\n    \n    return 0;\n}'
      }
    },
    26: {
      title: '进制转换',
      videoBvid: 'BV16CYPzLEsn', videoPage: 1, videoThumb: './assets/thumbs/day26.jpg',
      concept: {
        text: '<p>' + C('进制') + ' 是数字的表示方式。日常生活中用十进制（0-9），计算机中用二进制（0-1），编程中常用十六进制（0-9,A-F）。</p>' +
              '<p>十进制转二进制：不断除以 2 取余数，直到商为 0，余数倒序排列。例如 13 = 1101₂。</p>' +
              '<p>二进制转十进制：每位乘以 2 的幂次相加。例如 1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13。</p>' +
              '<p>C++ 中可以用 ' + C('bitset') + ' 处理二进制（#include <bitset>），用 ' + C('hex') + ' 输出十六进制。进制转换是 CSP-J 常考的基础题型。</p>',
        keyPoints: ['十进制转其他进制：不断除取余', '其他进制转十进制：按权展开', '二进制是计算机的基础', 'hex 输出十六进制', 'bitset 处理二进制']
      },
      quizzes: [
        { type: 'choice', question: '十进制数 13 转换成二进制是多少？', options: ['1100', '1101', '1110', '1011'], answer: 1, explanation: '13 / 2 = 6 余 1；6 / 2 = 3 余 0；3 / 2 = 1 余 1；1 / 2 = 0 余 1。余数倒序：1101。', hints: ['不断除以2取余', '余数倒序排列', '答案是 B: 1101'] },
        { type: 'fill', question: '补全代码：将十进制数 n 转换为二进制并输出各位。', code: 'while (n > 0) {\n  cout << _________;\n  n /= 2;\n}', answers: ['n%2', 'n % 2'], explanation: 'n % 2 得到 n 除以 2 的余数，即二进制的当前位（0 或 1）。然后 n /= 2 继续处理下一位。', hints: ['除以2的余数就是当前位', '取模运算符 %', '答案是 n%2'] }
      ],
      challenge: {
        title: '十进制转二进制',
        description: '<p>输入一个正整数 n（n ≤ 1000），将其转换为二进制数输出。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>13</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>1101</pre>' +
                     '<p>提示：不断除以 2 取余数，将余数存入数组，最后倒序输出。</p>',
        link: 'https://www.luogu.com.cn/problem/B2161', linkText: '洛谷 B2161 - 十进制转二进制',
        starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, a[20], cnt = 0;\n    cin >> n;\n    // 转换为二进制\n    \n    // 倒序输出\n    for (int i = cnt - 1; i >= 0; i--)\n        cout << a[i];\n    return 0;\n}'
      }
    },
    27: {
      title: '综合应用',
      videoBvid: 'BV1f84y1Z7ce', videoPage: 1, videoThumb: './assets/thumbs/day27.jpg',
      concept: {
        text: '<p>今天是综合运用前面所学知识的一天。竞赛题目往往不是单一知识点的考察，而是多个知识点的组合应用。</p>' +
              '<p>常见的综合题型：排序 + 贪心、数组 + 模拟、结构体 + 排序、递归 + 分治等。解题时要学会分解问题，将大问题拆分成若干小问题。</p>' +
              '<p>面对综合题的建议：1）仔细阅读题目，提取关键信息；2）确定需要用到的数据结构和算法；3）先写伪代码梳理逻辑；4）再翻译成 C++ 代码；5）用样例验证。</p>' +
              '<p>不要畏惧综合题，它们都是由基础知识点组合而成的。扎实掌握每一天的内容，综合题自然能够迎刃而解。</p>',
        keyPoints: ['综合题是多个知识点的组合', '学会分解问题', '先写伪代码再写程序', '用样例验证正确性', '扎实基础是解综合题的关键']
      },
      quizzes: [
        { type: 'choice', question: '解决综合题的第一步应该做什么？', options: ['直接写代码', '仔细阅读题目，提取关键信息', '选择最复杂的算法', '复制之前的代码'], answer: 1, explanation: '解决任何编程题的第一步都是仔细读题，理解输入输出格式和题目要求。直接写代码容易遗漏细节或理解错题意。', hints: ['理解题意最重要', '磨刀不误砍柴工', '答案是 B'] },
        { type: 'fill', question: '补全代码：结构体数组按成绩排序后输出第一名。', code: 'sort(a, a + n, cmp);\ncout << _________ << endl;', answers: ['a[0].name', 'a[0].name '], explanation: '排序后第一名在数组的第一个位置 a[0]。用 a[0].name 访问其姓名。如果按降序排序，cmp 函数需要定义。', hints: ['排序后第一个元素', '用 .name 访问姓名', '答案是 a[0].name'] }
      ],
      challenge: {
        title: '奖学金',
        description: '<p>输入 n 个学生的语文、数学、英语成绩，按总分从高到低排序。总分相同则按语文成绩排序，再相同则按学号排序。输出前 5 名的学号和总分。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>6\n90 80 70\n85 85 85\n80 90 80\n90 90 90\n70 80 90\n95 85 80</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>4 270\n6 260\n2 255\n1 240\n3 250</pre>' +
                     '<p>提示：定义结构体存储学号和各科成绩，用 sort 配合多条件比较函数。</p>',
        link: 'https://www.luogu.com.cn/problem/P1093', linkText: '洛谷 P1093 - 奖学金',
        starterCode: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nstruct Student {\n    int id, c, m, e, sum;\n};\n\nbool cmp(Student a, Student b) {\n    // 多条件排序\n}\n\nint main() {\n    int n;\n    Student a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        a[i].id = i + 1;\n        cin >> a[i].c >> a[i].m >> a[i].e;\n        a[i].sum = a[i].c + a[i].m + a[i].e;\n    }\n    sort(a, a + n, cmp);\n    for (int i = 0; i < 5 && i < n; i++)\n        cout << a[i].id << " " << a[i].sum << endl;\n    return 0;\n}'
      }
    },
    28: {
      title: '结业挑战 · 综合测试',
      videoBvid: 'BV1YK4y1Y7Kd', videoPage: 1, videoThumb: './assets/thumbs/day28.jpg',
      concept: {
        text: '<p>恭喜你完成了 28 天的 C++ 竞赛编程学习！今天是一个综合性的结业挑战，检验你在整个课程中的学习成果。</p>' +
              '<p>回顾所学内容：程序基础（变量、输入输出、运算符）、流程控制（分支、循环）、数组与字符串、函数与递归、排序与查找、模拟与贪心、二维数组与结构体。</p>' +
              '<p>CSP-J 初赛考察计算机基础知识，复赛考察编程能力。继续学习建议：1）大量刷题（洛谷、Codeforces）；2）学习数据结构（栈、队列、链表、树）；3）学习算法（DFS、BFS、动态规划）。</p>' +
              '<p>编程是一门实践性很强的技能，多写代码、多调试、多参加比赛是提高的关键。祝你竞赛之路顺利！</p>',
        keyPoints: ['28天覆盖了 CSP-J 核心知识点', '继续学习：数据结构、DFS、BFS、DP', '多刷题是提高的关键', '参加模拟赛检验学习成果', '保持对编程的热爱和坚持']
      },
      quizzes: [
        { type: 'choice', question: '以下哪个数据结构适合"先进先出"的场景？', options: ['栈', '队列', '数组', '链表'], answer: 1, explanation: '队列（Queue）是先进先出（FIFO）的数据结构。栈是后进先出（LIFO）。数组和链表是线性存储结构，访问方式取决于具体操作。', hints: ['先进先出 = FIFO', 'Queue 是队列', '答案是 B: 队列'] },
        { type: 'fill', question: '补全代码：用递归计算斐波那契数列第 n 项。', code: 'int fib(int n) {\n  if (n <= 2) return 1;\n  return _________;\n}', answers: ['fib(n-1)+fib(n-2)', 'fib(n - 1) + fib(n - 2)'], explanation: '斐波那契数列的递归公式：F(n) = F(n-1) + F(n-2)。终止条件是 n<=2 时返回 1。', hints: ['斐波那契递归公式', '前两项之和', '答案是 fib(n-1)+fib(n-2)'] }
      ],
      challenge: {
        title: '结业综合挑战',
        description: '<p>明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了 N 个 1 到 1000 之间的随机整数（N≤100），对于其中重复的数字，只保留一个，把其余相同的数去掉。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请完成"去重"与"排序"的工作。</p>' +
                     '<p><strong>输入：</strong>第 1 行为 1 个正整数 N。第 2 行有 N 个用空格隔开的正整数，为所产生的随机数。</p>' +
                     '<p><strong>输出：</strong>第 1 行为 1 个正整数 M，表示不相同的随机数的个数。第 2 行为 M 个用空格隔开的正整数，为从小到大排好序的不相同的随机数。</p>' +
                     '<p><strong>输入示例：</strong></p>' +
                     '<pre ' + PRE + '>10\n20 40 32 67 40 20 89 300 400 15</pre>' +
                     '<p><strong>输出示例：</strong></p>' +
                     '<pre ' + PRE + '>8\n15 20 32 40 67 89 300 400</pre>' +
                     '<p>提示：先排序再去重，或用标记数组去重后排序。注意输出第一行是去重后的个数。</p>',
        link: 'https://www.luogu.com.cn/problem/P1059', linkText: '洛谷 P1059 - 明明的随机数',
        starterCode: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, a[100];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // 排序\n    sort(a, a + n);\n    // 去重并输出\n    \n    return 0;\n}'
      }
    }
  };

  window.aiResponseMapExt = {
    4: { explain: 'C++ 运算符分为：\n1. 算术：+ - * / %\n2. 关系：> < >= <= == !=\n3. 逻辑：&& || !\n\n特别注意：\n- 整数除法 7/2 = 3\n- % 是取模，7%2 = 1\n- == 是比较，= 是赋值', examples: 'int a = 10, b = 3;\ncout << a / b << endl;  // 3\ncout << a % b << endl;  // 1\ncout << (a > b) << endl; // 1 (true)\n\ndouble c = 10.0 / 3;\ncout << c << endl; // 3.33333', approach: '运算符题目：\n1. 确定需要的运算符\n2. 注意整数除法和浮点除法的区别\n3. 关系表达式结果为 true(1) 或 false(0)\n4. 复杂条件用括号' },
    5: { explain: '格式化输出有两种方式：\n1. printf（C风格）：printf("%d %.2f", a, b);\n2. cout + iomanip：cout << fixed << setprecision(2) << x;\n\n常用格式符：\n%d 整数, %f 浮点, %.2f 保留2位, %c 字符, %s 字符串', examples: '#include <cstdio>\nint a = 5;\ndouble b = 3.14159;\nprintf("a=%d, b=%.2f\n", a, b);\n// 输出: a=5, b=3.14\n\n// 或用 cout:\n#include <iomanip>\ncout << fixed << setprecision(2) << b;', approach: '格式化输出题目的关键：\n1. 确定输出类型选择正确的格式符\n2. 整数用 %d，浮点用 %.nf\n3. 注意换行（\n 或 endl）\n4. 多个值按顺序对应格式符' },
    6: { explain: '顺序结构综合题的关键是：\n1. 仔细读题，理解输入输出格式\n2. 选择合适的数据类型\n3. 注意运算优先级，必要时加括号\n4. 检查是否有多组测试数据\n\n常见陷阱：整数溢出、除零错误、格式不符。', examples: '例：求三个数的平均数\n#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    // 注意：整数除法会截断！\n    double avg = (a + b + c) / 3.0;\n    cout << avg << endl;\n    return 0;\n}', approach: '做综合题的步骤：\n1. 读题3遍，标出关键信息\n2. 确定输入输出格式\n3. 设计变量（考虑数据范围）\n4. 写出计算公式\n5. 检查边界情况' },
    7: { explain: 'Week 1 复盘要点：\n\n1. 程序结构：#include -> using namespace -> main()\n2. 变量类型：int(4字节), double(8字节), char(1字节), bool(1字节), long long(8字节)\n3. 输入输出：cin >> a; cout << a << endl;\n4. 运算符：+ - * / %，注意整数除法\n5. 格式化：printf 或 iomanip', examples: '// 综合示例：计算梯形面积\n#include <iostream>\nusing namespace std;\nint main() {\n    double a, b, h;\n    cin >> a >> b >> h;\n    double s = (a + b) * h / 2.0;\n    cout << s << endl;\n    return 0;\n}', approach: 'Week 1 综合题解题策略：\n1. 确定需要哪些变量\n2. 注意数据类型选择（整数 vs 浮点）\n3. 检查是否需要大整数（long long）\n4. 输出格式是否符合要求\n5. 公式推导正确后，直接翻译成代码' },
    8: { explain: 'if/else 是程序做决策的基础：\n\nif (条件) {\n    // 条件为真时执行\n} else if (另一个条件) {\n    // 上一个条件为假且这个条件为真\n} else {\n    // 所有条件都为假\n}\n\n注意：if 后面不要加分号！', examples: 'int score = 85;\nif (score >= 90) {\n    cout << "A" << endl;\n} else if (score >= 80) {\n    cout << "B" << endl;\n} else if (score >= 60) {\n    cout << "C" << endl;\n} else {\n    cout << "D" << endl;\n}', approach: '分支题目解题步骤：\n1. 分析题目有几种情况\n2. 确定每种情况的条件\n3. 按条件范围从小到大排列\n4. 写 if-else if-else 结构\n5. 检查边界条件' },
    9: { explain: 'switch vs if 的选择：\n\n用 switch：\n- 判断变量是否等于某个具体值\n- 例如：星期几、操作符、菜单选项\n\n用 if：\n- 判断范围或复杂条件\n- 例如：成绩等级、年龄范围\n\n注意：switch 的 case 不要忘记 break！', examples: 'char op;\ncin >> op;\nswitch(op) {\n    case "+": cout << a+b; break;\n    case "-": cout << a-b; break;\n    case "*": cout << a*b; break;\n    case "/": cout << a/b; break;\n    default: cout << "错误";\n}', approach: 'switch 题目解题策略：\n1. 确定switch的表达式是什么\n2. 列出所有可能的case值\n3. 每个case后面加break\n4. 用default处理意外情况\n5. 如果需要嵌套，考虑是否可以简化' },
    10: { explain: 'for 循环的核心结构：\n\nfor (初始化; 条件; 更新) {\n    // 循环体\n}\n\n执行流程：\n1. 初始化（只执行一次）\n2. 检查条件，为真则执行循环体\n3. 执行更新\n4. 回到步骤2\n\n常用模式：\n- 遍历 0~n-1: for (i=0; i<n; i++)\n- 遍历 1~n: for (i=1; i<=n; i++)', examples: '// 计算阶乘\nint n = 5;\nlong long fac = 1;\nfor (int i = 1; i <= n; i++) {\n    fac *= i;\n}\ncout << fac; // 120\n\n// 遍历数组\nint a[5] = {3,1,4,1,5};\nfor (int i = 0; i < 5; i++) {\n    cout << a[i] << " ";\n}', approach: 'for 循环解题步骤：\n1. 确定循环次数或终止条件\n2. 设计合适的循环变量范围\n3. 在循环体中完成累加/计数/判断\n4. 检查边界：前3次和最后1次是否正确\n5. 注意数据范围，大数用 long long' },
    11: { explain: 'while 和 for 的选择：\n\n用 for：\n- 循环次数已知\n- 有明确的计数器\n\n用 while：\n- 循环次数不确定\n- 条件是某个状态的变化\n\n嵌套循环：\n- 外层控制行/组\n- 内层控制列/元素', examples: '// 打印乘法表（嵌套循环）\nfor (int i = 1; i <= 9; i++) {\n    for (int j = 1; j <= i; j++) {\n        cout << j << "x" << i << "=" << i*j << " ";\n    }\n    cout << endl;\n}\n\n// while 示例：求最大公约数\nint a = 48, b = 18;\nwhile (b != 0) {\n    int t = b;\n    b = a % b;\n    a = t;\n}\ncout << a; // 6', approach: 'while 循环解题步骤：\n1. 确定循环的终止条件\n2. 初始化相关变量\n3. 在循环体内更新条件变量\n4. 检查是否会死循环\n5. 嵌套循环注意变量名不要冲突' },
    12: { explain: '数组是竞赛编程的核心数据结构：\n\n声明：int a[100]; // 100个整数\n访问：a[0] ~ a[99]\n遍历：for (int i=0; i<100; i++)\n\n关键注意点：\n1. 下标从 0 开始\n2. 不要越界访问\n3. 数组大小要足够', examples: '// 数组逆序输出\nint a[5] = {1,2,3,4,5};\nfor (int i = 4; i >= 0; i--) {\n    cout << a[i] << " ";\n}\n// 输出: 5 4 3 2 1\n\n// 数组求和\nint sum = 0;\nfor (int i = 0; i < 5; i++) {\n    sum += a[i];\n}', approach: '数组题目解题策略：\n1. 确定数组大小（留足余量）\n2. 用循环读取数据到数组\n3. 用循环处理数组元素\n4. 注意下标从 0 开始\n5. 输出结果' },
    13: { explain: '字符和字符串处理要点：\n\n1. char 是单个字符，用单引号\n2. 字符串是字符数组，末尾有 \\0\n3. string 类型更方便\n4. ASCII 码：\'0\'=48, \'A\'=65, \'a\'=97\n5. 字符和数字可以互相转换', examples: "// 统计字符串中字母个数\nchar s[100];\ncin >> s;\nint cnt = 0;\nfor (int i = 0; s[i] != '\\0'; i++) {\n    if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z'))\n        cnt++;\n}\ncout << cnt;\n\n// 大小写转换\nchar c = 'A';\ncout << char(c + 32); // a", approach: '字符串题目解题策略：\n1. 确定使用 char[] 还是 string\n2. 遍历每个字符处理\n3. 利用 ASCII 码特性\n4. 注意字符串结尾的 \\0\n5. 输出时注意不要越界' },
    14: { explain: 'Week 2 复盘要点：\n\n分支结构：\n- if-else if-else：处理范围判断\n- switch-case：处理具体值匹配\n\n循环结构：\n- for：已知循环次数\n- while：条件控制循环\n- break/continue：控制循环流程\n\n数组：\n- 下标从 0 开始\n- 遍历：for (i=0; i<n; i++)', examples: '// 综合示例：判断素数\n#include <cmath>\nint n; cin >> n;\nbool isPrime = true;\nfor (int i = 2; i <= sqrt(n); i++) {\n    if (n % i == 0) { isPrime = false; break; }\n}\ncout << (isPrime ? "是素数" : "不是素数");', approach: 'Week 2 综合题策略：\n1. 确定题目类型（分支/循环/数组）\n2. 选择合适的数据结构\n3. 注意边界条件\n4. 用样例验证程序\n5. 检查特殊情况（如 n=0, n=1）' },
    15: { explain: '函数基础要点：\n\n1. 定义：返回类型 函数名(参数) { 函数体 }\n2. return 返回结果\n3. void 表示不返回值\n4. 函数要先定义后调用\n5. 参数默认按值传递', examples: '// 求最大值的函数\nint maxVal(int a, int b) {\n    return a > b ? a : b;\n}\n\nint main() {\n    int x = 5, y = 3;\n    cout << maxVal(x, y); // 5\n    return 0;\n}', approach: '函数题目解题策略：\n1. 确定函数需要什么参数\n2. 确定返回类型\n3. 在函数体内实现功能\n4. 用 return 返回结果\n5. 在主函数中调用' },
    16: { explain: '递归入门要点：\n\n1. 递归是函数调用自身\n2. 必须有终止条件\n3. 递归公式分解问题\n4. 经典例子：阶乘、斐波那契\n5. 注意栈溢出风险', examples: '// 递归求阶乘\nlong long fac(int n) {\n    if (n == 0) return 1;\n    return n * fac(n - 1);\n}\n\n// 递归求和\nint sum(int n) {\n    if (n == 1) return 1;\n    return n + sum(n - 1);\n}', approach: '递归题目解题策略：\n1. 找出终止条件\n2. 找出递归公式\n3. 确保每次递归向终止条件靠近\n4. 用样例验证递归过程\n5. 注意递归深度不要过大' },
    17: { explain: '排序算法要点：\n\n1. 冒泡排序：相邻比较交换\n2. 选择排序：每轮选最小值放前面\n3. sort(a, a+n) 快速排序\n4. 排序前 #include <algorithm>\n5. 降序用 greater<int>()', examples: '// sort 排序\n#include <algorithm>\nint a[5] = {3,1,4,1,5};\nsort(a, a+5); // 升序\n\n// 降序\nsort(a, a+5, greater<int>());\n\n// 冒泡排序\nfor (int i = 0; i < n-1; i++)\n  for (int j = 0; j < n-1-i; j++)\n    if (a[j] > a[j+1]) swap(a[j], a[j+1]);', approach: '排序题目解题策略：\n1. 优先使用 sort 函数\n2. 需要稳定排序时考虑冒泡\n3. 排序后可以方便地查找、去重\n4. 结构体排序需要自定义 cmp\n5. 注意排序的时间复杂度' },
    18: { explain: '查找算法要点：\n\n1. 线性查找：逐个比较，O(n)\n2. 二分查找：每次缩小一半，O(log n)\n3. 二分要求数据已排序\n4. 维护 left 和 right 边界\n5. mid = (left + right) / 2', examples: '// 二分查找\nint binarySearch(int a[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (a[mid] == target) return mid;\n        if (a[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}', approach: '查找题目解题策略：\n1. 数据无序：用线性查找\n2. 数据有序：用二分查找\n3. 二分注意边界更新\n4. 检查 left <= right 条件\n5. 找不到时返回 -1 或其他标记' },
    19: { explain: '模拟与枚举要点：\n\n1. 模拟：按题目描述一步步执行\n2. 枚举：遍历所有可能情况\n3. 优化：缩小范围、提前剪枝\n4. 注意边界条件\n5. 把题目过程翻译成代码', examples: '// 枚举 1~n 中能被 3 整除的数\nfor (int i = 1; i <= n; i++) {\n    if (i % 3 == 0) cout << i << " ";\n}\n\n// 分解质因数\nfor (int i = 2; i * i <= n; i++) {\n    while (n % i == 0) {\n        cout << i << " ";\n        n /= i;\n    }\n}\nif (n > 1) cout << n;', approach: '模拟枚举解题策略：\n1. 理解题目描述的每一步\n2. 确定枚举的范围\n3. 写循环遍历所有情况\n4. 用 if 判断是否符合条件\n5. 优化：减少不必要的枚举' },
    20: { explain: '贪心算法要点：\n\n1. 每一步选当前最优\n2. 需要证明贪心策略正确\n3. 常见应用：活动安排、区间覆盖\n4. 通常先排序再贪心\n5. 不是所有问题都适合贪心', examples: '// 活动安排（按结束时间排序后贪心）\nstruct Activity { int start, end; };\nbool cmp(Activity a, Activity b) {\n    return a.end < b.end;\n}\nsort(a, a+n, cmp);\nint cnt = 1, lastEnd = a[0].end;\nfor (int i = 1; i < n; i++)\n    if (a[i].start >= lastEnd) {\n        cnt++; lastEnd = a[i].end;\n    }', approach: '贪心题目解题策略：\n1. 分析题目是否具有贪心选择性质\n2. 确定贪心策略（如选最早结束）\n3. 通常需要先排序\n4. 用循环实现贪心选择\n5. 验证样例和边界情况' },
    21: { explain: 'Week 3 复盘要点：\n\n1. 函数：模块化代码\n2. 递归：自我调用，注意终止条件\n3. 排序：sort(a, a+n) 最常用\n4. 查找：有序数据用二分\n5. 贪心：先排序再选最优', examples: '// 综合示例：排序 + 双指针\nsort(a, a+n);\nint left = 0, right = n-1;\nwhile (left < right) {\n    int sum = a[left] + a[right];\n    if (sum == target) {\n        cout << "YES"; break;\n    } else if (sum < target) left++;\n    else right--;\n}', approach: 'Week 3 综合题策略：\n1. 分析需要用到的算法\n2. 先排序预处理数据\n3. 根据题目选择合适的查找方式\n4. 贪心题目先想策略再证明\n5. 组合多种技巧解决问题' },
    22: { explain: '二维数组要点：\n\n1. 声明：类型 a[行][列]\n2. 访问：a[i][j]，i行j列\n3. 遍历用嵌套 for\n4. 可以省略第一维大小\n5. 应用：矩阵、地图、棋盘', examples: '// 矩阵转置\nfor (int i = 0; i < n; i++)\n  for (int j = 0; j < m; j++)\n    b[j][i] = a[i][j];\n\n// 输出转置矩阵\nfor (int i = 0; i < m; i++) {\n  for (int j = 0; j < n; j++)\n    cout << b[i][j] << " ";\n  cout << endl;\n}', approach: '二维数组解题策略：\n1. 确定行数和列数\n2. 用嵌套循环输入/输出\n3. 注意行列不要搞混\n4. 矩阵运算注意下标对应\n5. 初始化时注意第一维可省略' },
    23: { explain: '结构体要点：\n\n1. struct 定义复合数据类型\n2. 用 . 访问成员变量\n3. 可以定义结构体数组\n4. struct 成员默认 public\n5. 让代码更接近现实世界', examples: '// 结构体排序\nstruct Student {\n    string name;\n    int score;\n};\nbool cmp(Student a, Student b) {\n    return a.score > b.score; // 降序\n}\nsort(a, a+n, cmp);', approach: '结构体解题策略：\n1. 根据题目设计结构体成员\n2. 定义比较函数用于排序\n3. 用 . 访问成员\n4. 结构体数组批量处理数据\n5. 排序时考虑多条件比较' },
    24: { explain: '指针基础要点：\n\n1. 指针存储内存地址\n2. & 取地址，* 解引用\n3. 数组名是首元素地址\n4. p[i] 等价于 *(p+i)\n5. 指针是数据结构的基础', examples: '// 指针与数组\nint a[5] = {1,2,3,4,5};\nint *p = a;\ncout << *p; // 1\ncout << *(p+2); // 3\ncout << p[3]; // 4\n\n// 指针逆序输出\nint *end = a + n - 1;\nfor (int *p = end; p >= a; p--)\n    cout << *p << " ";', approach: '指针题目解题策略：\n1. 理解指针就是地址\n2. *p 是取指向的值\n3. 数组名可以赋值给指针\n4. 指针运算按类型大小偏移\n5. 注意指针不要越界' },
    25: { explain: '排序综合应用要点：\n\n1. 排序后求中位数方便\n2. 相同元素相邻便于去重\n3. 排序 + 贪心是经典组合\n4. 第 k 大元素排序后取\n5. 排序是预处理的重要手段', examples: '// 求中位数\nsort(a, a+n);\nif (n % 2 == 1) cout << a[n/2];\nelse cout << (a[n/2-1] + a[n/2]) / 2.0;\n\n// 去重\nint m = 0;\nfor (int i = 0; i < n; i++)\n    if (i == 0 || a[i] != a[i-1])\n        b[m++] = a[i];', approach: '排序应用解题策略：\n1. 先排序整理数据\n2. 利用有序性简化问题\n3. 去重：比较相邻元素\n4. 查找：二分或双指针\n5. 统计：遍历连续段' },
    26: { explain: '进制转换要点：\n\n1. 十进制转其他进制：不断除取余\n2. 其他进制转十进制：按权展开\n3. 二进制是计算机的基础\n4. hex 输出十六进制\n5. bitset 处理二进制', examples: '// 十进制转二进制\nwhile (n > 0) {\n    a[cnt++] = n % 2;\n    n /= 2;\n}\nfor (int i = cnt-1; i >= 0; i--)\n    cout << a[i];\n\n// 二进制转十进制\nint sum = 0, p = 1;\nfor (int i = len-1; i >= 0; i--) {\n    sum += (s[i]-\'0\') * p;\n    p *= 2;\n}', approach: '进制转换解题策略：\n1. 十进制转其他进制：除基取余，倒序排列\n2. 其他进制转十进制：按位乘权值求和\n3. 用数组存储转换结果\n4. 注意输出顺序\n5. 大数用 long long' },
    27: { explain: '综合应用要点：\n\n1. 综合题是多个知识点的组合\n2. 学会分解问题\n3. 先写伪代码再写程序\n4. 用样例验证正确性\n5. 扎实基础是解综合题的关键', examples: '// 综合示例：奖学金评选\nstruct Student { int id, c, m, e, sum; };\nbool cmp(Student a, Student b) {\n    if (a.sum != b.sum) return a.sum > b.sum;\n    if (a.c != b.c) return a.c > b.c;\n    return a.id < b.id;\n}\nsort(a, a+n, cmp);', approach: '综合题解题策略：\n1. 仔细读题，提取关键信息\n2. 确定需要的知识点组合\n3. 分模块实现功能\n4. 用样例逐步验证\n5. 调试时检查每个模块的输出' },
    28: { explain: '结业挑战要点：\n\n1. 28天覆盖了 CSP-J 核心知识点\n2. 程序基础：变量、输入输出、运算符\n3. 流程控制：分支、循环\n4. 数据结构：数组、字符串、二维数组、结构体\n5. 算法：排序、查找、模拟、贪心、递归', examples: '// 结业综合示例\n// 筛选 + 排序\nint cnt = 0;\nfor (int i = 0; i < n; i++)\n    if (a[i] % 2 == 1) b[cnt++] = a[i];\nif (cnt == 0) cout << "NO";\nelse {\n    sort(b, b+cnt);\n    for (int i = 0; i < cnt; i++)\n        cout << b[i] << " ";\n}', approach: '结业挑战策略：\n1. 分步骤实现题目要求\n2. 先用循环筛选数据\n3. 再用排序整理结果\n4. 检查特殊情况（如全偶数）\n5. 保持代码清晰，便于调试' }
  };

  if (typeof courseData !== 'undefined') {
    Object.assign(courseData, window.courseDataExt);
  }
  if (typeof aiResponseMap !== 'undefined') {
    Object.assign(aiResponseMap, window.aiResponseMapExt);
  }
})();
