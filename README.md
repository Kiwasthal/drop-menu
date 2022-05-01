# drop-menu

<a href="https://www.npmjs.com/package/kiwasthal-dropmenu"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></a>

To install the package run :

    npm i kiwasthal-dropmenu
    
You will need the following packages :
<ul>
    <li>@babel/core</li>
    <li>babel-loader</li>
    <li>webpack</li>
    <li>webpack-cli</li>
</ul>

You can install all the dependencies by running:

    npm i -D @babel/core babel-loader webpack webpack-cli

# How to use

https://user-images.githubusercontent.com/99625875/166160447-d510cb51-835d-4569-91d8-5cb04fdc4fd2.mp4

<ol>
    <li>Passing a reference as the first arguement of the imported function will append the drop-down menu to the referenced element.</li>
    <li>The second arguement will determine the main color of your dropdown</li>
    <li>The third and fourth parameters determene the hover - and active colors of your drop-down.</li>
    <li>The fifth parameter sets the font-color.</li>
    <li>You can insert more arguements, and each one will create a new anchor element in your drop-down.</li>
</ol>

The drop-down menu is generated with a completely random id - so you can create as many as you would like in the same page and you can reference each one individually.



