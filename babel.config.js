module.exports={
  "presets": [ "@babel/preset-env", "@babel/preset-react"],
  "env": {
    "test": {
      "plugins": [
        "transform-amd-to-commonjs"
      ]
    }
}
}