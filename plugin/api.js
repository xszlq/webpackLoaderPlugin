class Plugin{
  apply(compiler){
    let pluginName = 'apiTest';

    compiler.hooks.emit.tap(pluginName,function(compilation){
      console.log(compilation)

    })
  }
}

module.exports = Plugin;
