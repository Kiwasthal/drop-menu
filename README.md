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
    <li>The second arguement will determine the main color of your dropdown.</li>
    <li>The third and fourth parameters determine the hover - and active colors of your drop-down.</li>
    <li>The fifth parameter sets the font-color.</li>
    <li>You can insert more arguements, and each one will create a new anchor element in your drop-down.</li>
</ol>

The drop-down menu is generated with a completely random id - so you can create as many as you would like in the same page and you can reference each one individually.

# About

This project is part of OTP's series on :Javascript In The Real World - Dynamic User Interface Interactions. The main idea is creating a reusable module and publishing to npm so it can be installed every-time it's needed. While researching for optimized ways to create and publish packages I came in contact with interesting concepts about how the industry approaches the procedure ,the importance of testing along with the use of compilers like babel (part of the bigger picture of an oprimized build), and the many intricate ways webpack handles dependencies allowing a dynamic modular approach to development . This lead to a deeper understanding of the importance of the steps someone might choose to take in the production procedure.



