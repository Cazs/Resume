#!/bin/bash
# This script will run a copy command when a file in the source directory is modified, moved, created or deleted
source_dir="./build/*"
dest_dir="./public/"
# while true; do
  # inotifywait -r -e modify,move,create,delete $source_dir
  cp -R -v $source_dir $dest_dir
# done

# "build": "react-scripts build && update-public.sh && rm -rf build",
# ffmpeg -i input.jpg -vf scale=320:240 output_320x240.png

exit 0