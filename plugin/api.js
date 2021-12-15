class Plugin{
  apply(compiler){
    let pluginName = 'apiTest';

    const { webpack } = compiler;

    // Compilation 对象提供了对一些有用常量的访问。
    const { Compilation } = webpack;

    const { RawSource } = webpack.sources;
    console.log(RawSource);

    compiler.hooks.emit.tap(pluginName,function(compilation){
      console.log(compilation)

    })
  }
}

module.exports = Plugin;
