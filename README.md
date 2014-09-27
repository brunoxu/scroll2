scroll2
=======

scroll2是一个jQuery插件，用来处理scroll事件，相比原生scroll会有更优的性能，并且可以设置delay值来满足更多情况的需求。

针对jQuery scroll事件的优化，idea不是我首创，我只是把它做成jQuery插件，加入可以配置delay功能。

关于原生scroll处理和优化后scroll处理，我做了一个简单的测试： 文章编辑中。。。


原理
---------

通过timeout来延迟执行scroll处理函数，如果滚动过快，会延迟scroll处理函数的执行，等scroll放缓或者停止的时候才执行scroll处理函数。 简单说就是用户在快速滚动时，不需要执行scroll处理函数，等放缓或者停止时再执行，这样可以节约浏览器性能消耗，增加流畅度体验。


如何使用
---------

先引入jQuery和jquery.scroll2.js文件，再使用scroll2绑定scroll事件。

scroll2参数有两个，第一个是处理函数，第二个是延迟值。

默认的延迟值为100毫秒，该值不是随意定的，是经过长时间使用后得出。

调用代码如下：

var scroll_handler = function(){
...
}
$(window).scroll2(scroll_handler, 400);


Sample
---------

<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.scroll2.js"></script>

<script type="text/javascript">
$(window).scroll2(function(){console.log('+++++++')});
//$(window).scroll2(function(){console.log('+++++++')}, 500); // 500毫秒的延迟值

//可以对比原生scroll效果测试
//$(window).scroll(function(){console.log('+++++++')});
</script>
