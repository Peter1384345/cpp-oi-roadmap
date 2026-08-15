// assets/charts.js
// 一个月C++奥赛学习路线图 - 图表逻辑
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // Chinese-compatible font family for all chart text
  var CN_FONT = '"Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif';

  // ===== Chart 1: 四周学习强度与难度递进曲线 =====
  var el1 = document.getElementById('chart-progression');
  if (el1) {
    var chart1 = echarts.init(el1, null, { renderer: 'svg' });

    // 28天数据
    var days = [];
    var hours = [
      // Week1: 语法入门，强度适中
      2.0, 2.0, 2.5, 2.5, 2.5, 3.0, 2.0,
      // Week2: 控制结构，强度上升
      2.5, 2.5, 3.0, 3.0, 3.0, 3.0, 2.5,
      // Week3: 函数与算法，强度峰值
      3.0, 3.0, 3.5, 3.5, 3.5, 3.5, 3.0,
      // Week4: 冲刺，强度高位
      3.0, 3.0, 3.0, 3.0, 3.5, 3.5, 4.0
    ];
    var difficulty = [
      // Week1
      1.0, 1.2, 1.3, 1.5, 1.6, 1.5, 1.5,
      // Week2
      1.8, 2.0, 2.2, 2.5, 2.5, 2.5, 2.5,
      // Week3
      2.8, 3.0, 3.2, 3.5, 3.5, 3.8, 3.5,
      // Week4
      3.8, 4.0, 4.2, 4.3, 4.5, 4.5, 4.8
    ];
    for (var i = 1; i <= 28; i++) days.push('D' + i);

    // 周末标记
    var markAreaData = [
      [{ xAxis: 'D6' }, { xAxis: 'D7' }],
      [{ xAxis: 'D13' }, { xAxis: 'D14' }],
      [{ xAxis: 'D20' }, { xAxis: 'D21' }],
      [{ xAxis: 'D27' }, { xAxis: 'D28' }]
    ];

    chart1.setOption({
      textStyle: { fontFamily: CN_FONT },
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        axisPointer: { type: 'cross' },
        textStyle: { fontFamily: CN_FONT }
      },
      legend: {
        data: ['当日学习时长(小时)', '知识点难度系数'],
        top: 0,
        textStyle: { color: muted, fontSize: 12, fontFamily: CN_FONT }
      },
      grid: { left: 48, right: 48, top: 50, bottom: 40 },
      xAxis: {
        type: 'category',
        data: days,
        axisLine: { lineStyle: { color: rule } },
        axisLabel: { color: muted, fontSize: 10, interval: 1, fontFamily: CN_FONT },
        axisTick: { show: false }
      },
      yAxis: [
        {
          type: 'value',
          name: '时长(h)',
          min: 0, max: 5,
          nameTextStyle: { color: muted, fontSize: 11, fontFamily: CN_FONT },
          axisLine: { show: false },
          axisLabel: { color: muted, fontSize: 11, fontFamily: CN_FONT },
          splitLine: { lineStyle: { color: rule, type: 'dashed' } }
        },
        {
          type: 'value',
          name: '难度',
          min: 0, max: 5,
          nameTextStyle: { color: muted, fontSize: 11, fontFamily: CN_FONT },
          axisLine: { show: false },
          axisLabel: { color: muted, fontSize: 11, fontFamily: CN_FONT },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: '当日学习时长(小时)',
          type: 'bar',
          data: hours,
          itemStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: accent },
                { offset: 1, color: accent + '55' }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: '55%',
          markArea: {
            silent: true,
            itemStyle: { color: accent2 + '15' },
            data: markAreaData
          }
        },
        {
          name: '知识点难度系数',
          type: 'line',
          yAxisIndex: 1,
          data: difficulty,
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: { color: accent2, width: 3 },
          itemStyle: { color: accent2 },
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: accent2 + '40' },
                { offset: 1, color: accent2 + '00' }
              ]
            }
          }
        }
      ]
    });
    window.addEventListener('resize', function() { chart1.resize(); });
  }

  // ===== Chart 2: CSP-J 第二轮高频考点分布 =====
  var el2 = document.getElementById('chart-topics');
  if (el2) {
    var chart2 = echarts.init(el2, null, { renderer: 'svg' });
    chart2.setOption({
      textStyle: { fontFamily: CN_FONT },
      tooltip: {
        trigger: 'item',
        appendToBody: true,
        formatter: '{b}<br/>出现频率: {c}%',
        textStyle: { fontFamily: CN_FONT }
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        textStyle: { color: muted, fontSize: 12, fontFamily: CN_FONT }
      },
      series: [{
        type: 'pie',
        radius: ['42%', '70%'],
        center: ['38%', '50%'],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: '{b}\n{d}%',
          color: ink,
          fontSize: 11,
          fontFamily: CN_FONT
        },
        labelLine: { lineStyle: { color: rule } },
        itemStyle: {
          borderColor: bg2,
          borderWidth: 2
        },
        data: [
          { value: 28, name: '枚举/模拟', itemStyle: { color: accent } },
          { value: 20, name: '排序', itemStyle: { color: accent2 } },
          { value: 18, name: '基础数据结构', itemStyle: { color: '#7b5cf5' } },
          { value: 14, name: '字符串', itemStyle: { color: '#5b9ef5' } },
          { value: 12, name: '贪心', itemStyle: { color: '#a855f7' } },
          { value: 8,  name: '搜索/递推', itemStyle: { color: muted } }
        ]
      }]
    });
    window.addEventListener('resize', function() { chart2.resize(); });
  }

  // ===== Chart 3: 本月配套资源类型分布 =====
  var el3 = document.getElementById('chart-resources');
  if (el3) {
    var chart3 = echarts.init(el3, null, { renderer: 'svg' });
    chart3.setOption({
      textStyle: { fontFamily: CN_FONT },
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        axisPointer: { type: 'shadow' },
        textStyle: { fontFamily: CN_FONT }
      },
      grid: { left: 90, right: 40, top: 30, bottom: 30 },
      xAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: { color: muted, fontSize: 11, fontFamily: CN_FONT },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: ['官方平台', '图书', '工具(IDE)', '题单', '在线评测OJ', '视频课程'],
        axisLine: { lineStyle: { color: rule } },
        axisLabel: { color: ink, fontSize: 12, fontWeight: 600, fontFamily: CN_FONT },
        axisTick: { show: false }
      },
      series: [{
        type: 'bar',
        data: [
          { value: 4, itemStyle: { color: '#d97706' } },
          { value: 6, itemStyle: { color: accent2 } },
          { value: 4, itemStyle: { color: '#16a34a' } },
          { value: 8, itemStyle: { color: '#7b5cf5' } },
          { value: 4, itemStyle: { color: accent } },
          { value: 6, itemStyle: { color: '#e04040' } }
        ],
        barWidth: '55%',
        label: {
          show: true,
          position: 'right',
          color: ink,
          fontSize: 12,
          fontWeight: 700,
          fontFamily: CN_FONT,
          formatter: '{c} 个'
        },
        itemStyle: {
          borderRadius: [0, 6, 6, 0]
        }
      }]
    });
    window.addEventListener('resize', function() { chart3.resize(); });
  }

})();
