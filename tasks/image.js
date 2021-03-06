/*
Configuration:
"root" - 定义拷贝源
*/

module.exports = function(grunt) {
  var copy, _;

  _ = grunt.util._;

  copy = require("./../lib/fileUtils").copy;

  grunt.registerTask("images", "拷贝图片", function(target) {

    var destinationPath, targetConfig, taskConfig;

    grunt.log.writeln('运行IMG处理任务'.warn);

    target = target || "dist";
    this.requiresConfig("images.files");
        console.log(11111);
    this.requiresConfig("images." + target);
    taskConfig = grunt.config.get("images");
    targetConfig = grunt.config.get("images." + target);
    destinationPath = "" + targetConfig.dest + "/" + taskConfig.root;
    grunt.log.writeln("拷贝图片到:'" + destinationPath + "'");

    _(taskConfig.files).each(function(files, basePath) {
      _(grunt.file.expand(files)).each(function(src) {
        var dest;
        dest = "" + destinationPath + "/" + (src.replace(basePath, ""));
        copy(src, dest);
      });
    });
  });
};
