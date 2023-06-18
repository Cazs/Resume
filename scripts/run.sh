#!/bin/bash

source_dir="./build/"
dest_dir="./public/"

npm run build

cp -R -v "$source_dir/*" $dest_dir

# sleep 300
# rm -rf $source_dir
# sleep 300

npm run start