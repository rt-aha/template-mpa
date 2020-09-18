#!/bin/sh
echo $@

if [ "$#" = "0" ]
then
  exit
fi


if [ "$#" != "0" ]
then
  echo "count $#"
fi


for i in $@
  do
    echo $i
  done

