class Plugin{
  apply(compiler){
    let pluginName = 'apiTest';

    const { webpack } = compiler;

    // Compilation 对象提供了对一些有用常量的访问。
    const { Compilation } = webpack;

    const { RawSource } = webpack.sources;
    console.log(RawSource);

    compiler.hooks.emit.tap(pluginName,function(compilation){
      // console.log(compilation)

      compilation.hooks.optimizeChunks.tap(pluginName, function(chunks){
        console.log('chunks');
        console.log(chunks)
        chunks.forEach(function(chunk){
          // 每个chunk代表一个代码块,每个代码块由多个模块组成
          chunk.forEach(module=>{
            module.fileDependencies.forEach(filePath=>{
              console.log(filePath);
            })
          })
        })
      })

      compilation.hooks.succeedModule.tap(pluginName, function(module){
        console.log('module');
        console.log(module)

      })
    })

    // compiler.plugin('emit', function(compilation, callback){
    //   compilation.chunks.forEach(function(chunk){
    //     // 每个chunk代表一个代码块,每个代码块由多个模块组成
    //     chunk.forEach(module=>{
    //       module.fileDependencies.forEach(filePath=>{
    //         console.log(filePath);
    //       })
    //     })
    //   })
    // })
  }
}

module.exports = Plugin;