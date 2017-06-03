---
title: html5学习笔记
date: 2017-06-02 23:21:49
tags: html5
---

### 1.html5与html4的区别

#### 1.1全局属性

* contenteditable属性 ：当一个元素的contenteditable状态为true（contenteditable属性为空字符串，或为true，或为inherit且其父元素状态为true）时，意味着该元素是可编辑的。否则，该元素不可编辑。

  如果想要整个网页可编辑，可在body或html标签内设置contentEditable

  在浏览器地址栏输入data:text/html, <html contenteditable> ，即可打开一个简单的在线编辑器。

  ```css
  /*可以自定义样式如下：使用轮廓线代替边框，因为它不会向盒状模型添加元素，所以页面区域不会在触发时突然闪现。*/
  <style type="text/css">
  	[contenteditable]:hover, [contenteditable]:focus {
  		outline: 2px dotted red;
  	}
  </style>
  ```

  ```html
  <h2>contenteditable属性</h2>
  <ul contenteditable="true">
      <li>列表1</li>
      <li>列表2</li>
  </ul>
  ```

* designMode属性

  用来指定整个页面是否可编辑，有两个值，on和off。该属性只能用javascript来修改值。如果design设置为on，则所有允许设置contenteditable的元素都可编辑。

  ```javascript
  window.document.designmode="off";
  ```

* hidden属性（非表单hidden属性）

  ```html
  <h2>hidden属性（非表单hidden属性）</h2>
  <ul hidden="hidden">
  	<li>列表1</li>
  	<li>列表2</li>
  </ul>
  ```

* spellcheck属性

  规定是否必须对元素进行拼写或语法检查。用了spellcheck属性，浏览器会帮助检查html元素文本内容拼写是否正确，只有当html元素在可编辑状态，sepllcheck属性才有意义，所以一般是针对input[text],textarea元素用户输入内容进行拼写和语法检查，拼写错误有红色的波浪下划线，**右键会给提示。**

  ```html
  <textarea spellcheck="true" cols="60" rows="5"> </textarea>
  ```

  ![](./img/spellcheck.png)

* tabindex属性

  tabindex 属性**规定元素的 tab键切换顺序**（当 tab 键用于导航时），可将tabIndex属性设成1到32767的一个值。

  Note：tabindex属性设为一个负值（如tabindex="-1")时，用户使用tab键切换时该html元素将不会被选中。

  ```html
  <form>
  	<label>姓名: <input type="text" name="name" tabindex="2"/></label><br/>
  	<label>身份证号: <input type="text" name="city" tabindex="-1"/></label></br>
  	<label>准考证号: <input type="text" name="country" tabindex="1"/></label></br>
  	<input type="submit" value="查询" tabindex="3"/>
  </form>
  ```

  ![](./img/tabindex.png)

#### 1.2html5与html4的区别

* 推出的理由

  ![](./img/html推出理由.png)

* 语法的改变

* 新增的元素和废除的元素

* 新增的属性和废除的属性

* 全局属性

