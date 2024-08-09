#!/bin/sh

# 检查是否提供了输入文件
if [ -z "$1" ]; then
  echo "请提供包含URL的文件路径。"
  exit 1
fi

# 读取文件路径
input_file="$1"

# 逐行读取文件中的每个URL并下载文件
while IFS= read -r url
do
  if [ -n "$url" ]; then
    # 从URL中提取文件名
    filename=$(basename "$url" | cut -d'?' -f1)

    # 使用curl下载文件
    curl "$url" \
      -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/116.0' \
      -H 'Accept: application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8' \
      -H 'Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2' \
      -H 'Accept-Encoding: gzip, deflate, br' \
      -H 'Origin: https://ikarao.com' \
      -H 'Connection: keep-alive' \
      -H 'Sec-Fetch-Dest: font' \
      -H 'Sec-Fetch-Mode: no-cors' \
      -H 'Sec-Fetch-Site: cross-site' \
      -H 'Referer: https://ikarao.com/' \
      -H 'Pragma: no-cache' \
      -H 'Cache-Control: no-cache' \
      -H 'TE: trailers' \
      --output "$filename"

    echo "下载完成: $filename"
  fi
done < "$input_file"

echo "所有文件下载完成。"

