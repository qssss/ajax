<?php

// isset 判断数是否存在
// cpage 获取数据的页数
// 判断cpage有没有传递进来 没有的话 默认是1

$cpage = isset($_GET['cpage']) ? $_GET['cpage'] : 1;

$url = 'http://www.wookmark.com/api/json/popular?page='.$cpage;

// file_get_contents 去读取url中文件的数据 并且以字符串的方式读入
$content = file_get_contents($url);
// 对读取到的数据进行编码
$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>