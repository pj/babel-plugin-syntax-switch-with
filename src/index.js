export default function () {
  return {
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("switch_with");
    }
  };
}
