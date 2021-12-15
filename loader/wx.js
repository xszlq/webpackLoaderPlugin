const fs = require('fs');
const path = require('path')

function resolveVueSfc(resourcePath, jsSource){
    let codes = '';
    console.log(resourcePath);

     let template = fs.readFileSync(path.join(resourcePath, '..', 'test.wxml'))
     let style = fs.readFileSync(path.join(resourcePath, '..', 'test.wxss'))

    codes = `<template>
                ${template}
            </template>
            <script>
               ${jsSource}
            </script>
            <style scoped>
                ${style}
            </style>
            `;
    console.log(codes);

    fs.writeFileSync(path.join(resourcePath, '..', 'test.vue'), codes);

    return codes;

}

module.exports = function(source){
    console.log(source);
    const {resourcePath} = this;


    return resolveVueSfc(resourcePath, source);
}
