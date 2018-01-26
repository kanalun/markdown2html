««« and »»»
#一级标题
##二级标题
###三级标题
####四级标题
#####五级标题


这是一个一级标题
============================
这是一个二级标题
----------------------------


#其他
##语法示例
###Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |
|  foo  |   bar   |  ~baz~  |


|h1         |    h2   |      h3 |      h3 |      h3 |      h3 |
|:----------|:-------:|--------:|--------:|--------:|--------:|
| 100       | [a][1]  | ![b][2] | ![b][2] | ![b][2] | ![b][2] |
| *foo*     | **bar** | ~~baz~~ | ~~baz~~ | ~~baz~~ | ~~baz~~ |
|  foo      |   bar   |  ~baz~  |  ~baz~  |  ~baz~  |  ~baz~  |

|标题|标题|标题|
|:---|:---:|---:|
|居左测试文本|居中测试文本|居右测试文本|
|居左测试文本1|居中测试文本2|居右测试文本3|
|居左测试文本11|居中测试文本22|居右测试文本33|
|居左测试文本111|居中测试文本222|居右测试文本333|

###TODO list

- [x] This task is done
- [ ] This is still pending
- [x] www.google.com
- [ ] *foo* **bar** ~~baz~~


###LINK

some text www.google.com
check this link www.google.com!
This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.
<http://example.com/>

http://example.com/

我经常去的几个网站[Google][1]、[Leanote][2]以及[自己的博客][3]
[Leanote 笔记][2]是一个不错的[网站][]。

[1]:http://www.google.com "Google"
[2]:http://www.leanote.com "Leanote"
[3]:http://blog.leanote.com/freewalk "梵居闹市"
[网站]:http://blog.leanote.com/freewalk

这是行内式链接：[ConnorLin's Blog](http://connorlin.github.io)。

这是参考式链接：[ConnorLin's Blog][url]，其中url为链接标记，可置于文中任意位置。

[url]: http://connorlin.github.io/ "ConnorLin's Blog"

链接标记格式为：[链接标记文本]:  链接地址  链接title(可忽略)

这是自动链接：直接使用`<>`括起来<http://connorlin.github.io>

这是图片：![][avatar]

[avatar]: http://img.smzy.com/imges/2018/0123/20180123021513961.png

作者：ConnorLin
链接：https://www.jianshu.com/p/82e730892d42
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


#### 0. 目录{#index}
跳转到[目录](#index)

###文本修饰

some text with__underscores__in middle
some text with**underscores**in middle
~~strikethrough~~

*斜体*或_斜体_
**粗体**
***加粗斜体***
~~删除线~~





###IMAGES

![foo](foo.jpg =100x80)     simple, assumes units are in px
![foo](foo.jpg =400x*)      sets the height to "auto"
![foo](foo.jpg =80%x500em)  Image with width of 80% and height of 5em
![foo](foo.jpg)  Image with width of 80% and height of 5em
###code

####使用缩进

	class Version
	  include Comparable
	  attr_reader :parts

	  def initialize(str)
	    @parts = str.split(".").map { |p| p.to_i }
	  end

	  def <=>(other)
	    parts <=> self.class.new(other).parts
	  end
	end

####指定语言

```java
public static void main(String args[]){
	int i = 0;
	String abcd = "abcd";
}
```


```c
void main(){
	int i = 0;
	string abcd("abcd");
}
```

这是行内代码`onCreate(Bundle savedInstanceState)`的例子。

这是代码块和语法高亮：

###区块引用 Blockquotes

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.


> 一级引用
> > 二级引用
> > > 三级引用

> #### 这是一个四级标题
> 
> 1. 这是第一行列表项
> 2. 这是第二行列表项

###列表
* 	Red
* 	Green
*   Blue

1.  Bird
2.  McHale
3.  Parish

+   Red
+   Green
+   Blue

-   Red
-   Green
-   Blue



*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

###分隔符
* * *
1111111111
***
2222222222
*****
3333333333
- - -
4444444444

---------------------------------------
5555555555

在行尾添加两个空格加回车表示换行：  
你好!
这是一行后面加两个空格  换行

这是一个脚注的例子[^1]

[^1]: 这里是脚注

this is a :smile: emoji




