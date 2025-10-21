module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 设计稿宽度的1/10（假设设计稿是750px宽度）
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 可以从px转换为rem的属性，['*']表示所有属性
      // 要忽略的选择器，不进行rem转换
      // 例如：['no-rem-', 'ignore-'] 会忽略所有以 'no-rem-' 或 'ignore-' 开头的选择器
      selectorBlackList: ['no-rem-', 'ignore-'], 
      replace: true, // 是否直接替换属性值，而不添加备用属性
      mediaQuery: false, // 是否在媒体查询的CSS代码中也进行转换
      minPixelValue: 1, // 设置最小的转换数值，小于这个值的px单位不会转换
      exclude: /node_modules/i, // 排除node_modules目录下的文件
      // 对字体进行特殊处理
      fontBase: 'font-size'
    }
  }
}