//此文件
const {
    override,
    fixBabelImports,
    addLessLoader,
} = require('customize-cra')
module.exports = override(
    fixBabelImports(
        'import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true

    }
    ),
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{
            '@primary-color':`#d214a2`,
            '@font0size-base':'12px'
        }
    }),

)